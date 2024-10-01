---
sidebar_position: 0
title: Introduction
---

:::note
This page is still a WIP, some of the constructors used are currently outdated.
 🚧
:::

One goal behind vramework is to make it very easy to switch out services depending on which environment your running in, in a mix and match premise.

The following code is from a relatively large project with a few different dependencies. Loadup time could be improved quite a bit by doing things in parralel, but the extra few seconds startup time isn't really a concern most of the time when deployed, and when running locally they resolve pretty much immediately.

```typescript
export const setupServices = async (config: Config): Promise<SingletonServices> => {
  const logger: PinoLogger = pino()

  if (config.logger.level) {
    logger.level = config.logger.level
  }

  const promises: Array<Promise<void>> = []

  // I always use AWS Secrets, since I don't want to store
  // any of them locally
  const secrets = new AWSSecrets(config, logger)

  // The database-config method is implemented in our
  // codebase. If the NODE_ENV is production it uses 
  // the secrets service, otherwise it returns the 
  // local api.
  const postgresConfig = await getDatabaseConfig(
    secrets,
    config.secrets.postgresCredentials,
    config.sql
  )
  const { kysely } = new KyselyDB(postgresConfig)

  // This retrieves the JWT token from the database instead
  // of from environment variables, which makes it easier
  // to rotate versions live
  const jwt = new JoseJWTService<UserSession>(
    async () => kysely.selectFrom('app.jwt').selectAll().execute(),
    logger
  )
  promises.push(jwt.init())

  // This is all local so far
  const sessionService = new VrameworkSessionService(jwt, {
    cookieNames: ['session'],
    getSessionForCookieValue: async (cookieValue: string) => {
      return await jwt.decodeSession(cookieValue)
    },
    getSessionForAPIKey: async (_apiKey: string) => {
      throw new Error('Not implemented')
    },
  })

  // An example where we switch between local/s3 depending on 
  // the deployment environment.
  // NOTE: This is not yet working locally for 0.2 since we use a different method
  let content: S3Content | LocalContent
  if (process.env.NODE_ENV === 'production' || process.env.PRODUCTION_SERVICES) {
    const keypairId = await secrets.getSecret(config.secrets.cloudfrontContentId)
    const privateKeyString = await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey)
    content = new S3Content(config.content, logger, { keypairId, privateKeyString })
  } else {
    content = new LocalContent(config, logger as any)
  }

  // I find it better to log in the local console which 
  // template we could have used / with what variables 
  // but not actually call the sendGrid API to avoid unecessary
  // emails if not in Production
  const email = new SendGrid(isProduction ? 
    await secrets.getSecret(config.secrets.sendGridAPIKey) : ''
  )

  const stripeAPIKey = await secrets.getSecret(config.secrets.stripeAPIKey)
  const stripeSigningSecret = await secrets.getSecret(config.secrets.stripeSigningSecret)
  const stripe = new StripeService(stripeAPIKey, config.domain, stripeSigningSecret, typedDatabase, email, logger)

  const openAPIKey = await secrets.getSecret(config.secrets.openaiAPIKey)
  const chatgbt = new ChatGBT(logger, openAPIKey, kysely, streamService)
  await chatgbt.init()
  
  const assemblyAIAPIKey = await secrets.getSecret(config.secrets.assemblyAIAPIKey)
  const assemblyai = new AssemblyAI(assemblyAIAPIKey, logger)

  const elevenlabsAPIKey = await secrets.getSecret(config.secrets.elevenLabsAPIKey)
  const elevenlabs = new ElevenLabs(elevenlabsAPIKey)

  const { web: { client_id, client_secret }} = await secrets.getSecret<{ web: { client_id: string, client_secret: string }}>(config.secrets.googleAuthSecret)
  const googleAuth = new GoogleAuth(client_id, client_secret)

  const tmpFileService = new TemporaryFileService(logger, config.tmpFileDirectory)

  const permissionService = new PermissionService()

  await Promise.all(promises)

  return {
    config,
    content,
    logger,
    email,
    secrets,
    kysely,
    sessionService,
    permissionService,
    jwt,
    stripe,
    chatgbt,
    assemblyai,
    tmpFileService,
    elevenlabs,
    googleAuth,
    streamService
  }
}
```

An example optimised version (by openai 01 model):

```typescript
export const setupServices = async (config: Config): Promise<SingletonServices> => {
  const logger: PinoLogger = pino();

  if (config.logger.level) {
    logger.level = config.logger.level;
  }

  const isProduction = process.env.NODE_ENV === 'production' || process.env.PRODUCTION_SERVICES;

  // Use AWS Secrets Manager to avoid storing secrets locally
  const secrets = new AWSSecrets(config, logger);

  // Initialize promises array for services that can be initialized in parallel
  const promises: Array<Promise<void>> = [];

  // Get the PostgreSQL configuration, using secrets in production or local settings otherwise
  const postgresConfigPromise = getDatabaseConfig(
    secrets,
    config.secrets.postgresCredentials,
    config.sql
  );

  // Initialize the Kysely database
  const kyselyPromise = postgresConfigPromise.then((postgresConfig) => {
    const { kysely } = new KyselyDB(postgresConfig);
    return kysely;
  });

  // Retrieve the JWT tokens from the database for easier live rotation
  const jwtPromise = kyselyPromise.then((kysely) => {
    const jwt = new JoseJWTService<UserSession>(
      async () => kysely.selectFrom('app.jwt').selectAll().execute(),
      logger
    );
    promises.push(jwt.init());
    return jwt;
  });

  // Initialize the session service
  const sessionServicePromise = jwtPromise.then((jwt) => {
    return new VrameworkSessionService(jwt, {
      cookieNames: ['session'],
      getSessionForCookieValue: async (cookieValue: string) => {
        return await jwt.decodeSession(cookieValue);
      },
      getSessionForAPIKey: async (_apiKey: string) => {
        throw new Error('Not implemented');
      },
    });
  });

  // Switch between local content service and S3 content service depending on the environment
  let contentPromise: Promise<S3Content | LocalContent>;
  if (isProduction) {
    contentPromise = Promise.all([
      secrets.getSecret(config.secrets.cloudfrontContentId),
      secrets.getSecret(config.secrets.cloudfrontContentPrivateKey),
    ]).then(([keypairId, privateKeyString]) => {
      return new S3Content(config.content, logger, { keypairId, privateKeyString });
    });
  } else {
    contentPromise = Promise.resolve(new LocalContent(config, logger));
  }

  // Initialize the email service; avoid sending emails when not in production
  const emailPromise = (async () => {
    const sendGridApiKey = isProduction
      ? await secrets.getSecret(config.secrets.sendGridAPIKey)
      : '';
    return new SendGrid(sendGridApiKey);
  })();

  // Initialize the Stripe service
  const stripePromise = Promise.all([
    secrets.getSecret(config.secrets.stripeAPIKey),
    secrets.getSecret(config.secrets.stripeSigningSecret),
    kyselyPromise,
    emailPromise,
  ]).then(([stripeAPIKey, stripeSigningSecret, kysely, email]) => {
    return new StripeService(
      stripeAPIKey,
      config.domain,
      stripeSigningSecret,
      kysely,
      email,
      logger
    );
  });

  // Initialize the OpenAI ChatGPT service
  const chatgptPromise = Promise.all([
    secrets.getSecret(config.secrets.openaiAPIKey),
    kyselyPromise,
  ]).then(async ([openAIKey, kysely]) => {
    const chatgpt = new ChatGPT(logger, openAIKey, kysely, streamService);
    await chatgpt.init();
    return chatgpt;
  });

  // Initialize the AssemblyAI service
  const assemblyAIPromise = secrets
    .getSecret(config.secrets.assemblyAIAPIKey)
    .then((apiKey) => new AssemblyAI(apiKey, logger));

  // Initialize the ElevenLabs service
  const elevenLabsPromise = secrets
    .getSecret(config.secrets.elevenLabsAPIKey)
    .then((apiKey) => new ElevenLabs(apiKey));

  // Initialize the Google Auth service
  const googleAuthPromise = secrets
    .getSecret<{
      web: { client_id: string; client_secret: string };
    }>(config.secrets.googleAuthSecret)
    .then(({ web: { client_id, client_secret } }) => {
      return new GoogleAuth(client_id, client_secret);
    });

  // Initialize the temporary file service
  const tmpFileService = new TemporaryFileService(logger, config.tmpFileDirectory);

  // Initialize the permission service
  const permissionService = new PermissionService();

  // Wait for all promises to resolve
  const [
    kysely,
    jwt,
    sessionService,
    content,
    email,
    stripe,
    chatgpt,
    assemblyAI,
    elevenLabs,
    googleAuth,
  ] = await Promise.all([
    kyselyPromise,
    jwtPromise,
    sessionServicePromise,
    contentPromise,
    emailPromise,
    stripePromise,
    chatgptPromise,
    assemblyAIPromise,
    elevenLabsPromise,
    googleAuthPromise,
    ...promises,
  ]);

  // Error handling can be implemented here if any of the services failed to initialize

  return {
    config,
    content,
    logger,
    email,
    secrets,
    kysely,
    sessionService,
    permissionService,
    jwt,
    stripe,
    chatgpt,
    assemblyAI,
    tmpFileService,
    elevenLabs,
    googleAuth,
    streamService,
  };
};
```