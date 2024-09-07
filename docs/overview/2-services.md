---
sidebar_position: 2
title: Services
description: TODO
---

The first thing we need to do in vramework is setup our services.

Services in vramework are a fundemental way for the functions to access any form of state outside of them. 

There isn't any special about a service, other than optionally requiring an initialization and destruction endpoint.

For example, here's a service endpoint for sending out emails via the SendGrid service. Notice how it doesn't require any vramework concepts or libraries.

```typescript
import sgMail from '@sendgrid/mail'

export enum SendGridTemplate {
  WELCOME_EMAIL = 'd-xxxx',
}

export class SendGrid {
  constructor(apiKey: string) {
    sgMail.setApiKey(apiKey)
  }

  public async sendWelcomeEmail(to: string) {
    return await this.sendEmail(to, SendGridTemplate.WELCOME_EMAIL) 
  }

  private async sendEmail (to: string, templateId: SendGridTemplate, dynamicTemplateData?: Record<string, string | number>) {
    try {
      await sgMail.send({
        from: 'no-reply@your-domain.com',
        to, 
        templateId,
        dynamicTemplateData
      })
    } catch (error: any) {
      console.error(error)
    }
  }
}
```

## Services Theory

Vramework is build around what I like to think is a combination of a dependency lookup and dependency injection.

There are two different types of services in vramework:

## Singleton Service

A singleton service is created once for the entire server and it's lifetime starts when the server starts / is destroyed when the server shutsdown.

Example core services could be:
    - **Session Management**: A service used to validate user sessions
    - **Database**: To create your ORM / database pool connection
    - **Email provider**: To send email templates out

## Session Service

A session service is created on demand for each API call. This means it's lifetime is called the actual call itself, the service is aware of the user session, and once the call concludes it is destroyed.

Example session services are:
    - **HeaderService**: Access to the request information (like the headers or body payload if binary)
    - **Database Client** A database client that automatically runs everything in a transaction (which could enable features like auto auditing).
    - **TemporaryFileService** Creating a temporary folder which gets deleted once the call is complete

A session service can optionally implement the `SessionService` interface which is a single function `closeSession` to destroy the service on completion.

**Important**: SessionServices should always be lazy loaded / created on demand. This means whilst we do create the class itself and provide it with session context, it shouldn't do anything until it is called. This is to prevent us from having to pay to create services that are never used.

## Creating your services

You'll notice a bit of a trend in the documentation, which is vramework really doesn't provide that much ***magic***. This also applies to how we create our services.

It's rather a single function that returns an object with all our services, as well as a factory function that we can call to create our session services.

First we'll define our types

```typescript title="api.ts"
export type Config = CoreConfig & {
  secrets: {
    sendGridAPIKey: string
  }
}

export type SingletonServices = CoreSingletonServices & {
  secrets: LocalSecretService
  kysely: Kysely<DB>
  logger: Logger
  jwt: JWTService<UserSession>
  config: Config
  email: SendGrid
}

export type Services = SingletonServices & {
  httpRequest: HTTPRequestService
}
```

And then we create our services to fill produce those objects.

This file may look a bit daunting at first, if it helps it's the single place where all your services are tied together and the only file you need for vramework to know how to put things together.

```typescript title="services.ts"
// This will be explained in a following document
import './generated/schemas'

import { Logger as PinoLogger, pino } from 'pino'

import { VrameworkSessionService } from '@vramework/core/src/services/vramework-session-service'
import { JWTService } from '@vramework/core/src/services/jwt-service'
import { LocalSecretService } from '@vramework/core/src/services/local-secrets'

import { Config, Services, SingletonServices } from './api'
import { HTTPRequestService } from './services/http-request-service'
import { SendGrid } from './services/sendgrid'
import { KyselyDB } from './services/kysely'

export const setupServices = async (config: Config): Promise<SingletonServices> => {
  const logger: PinoLogger = pino()

  const promises: Array<Promise<void>> = []

  // Create a secret service that retrieves secrets using env variable
  const secrets = new LocalSecrets(config, logger)

  // Create a connection to the database
  const { kysely } = new KyselyDB(config.sql, await secrets.getPostgresCredentials())
  promises.push(await kysely.init())
  
  // Get JWT tokens
  const jwt = new JWTService<UserSession>(async () => 
    await kysely.selectFrom('app.jwtSecret').selectAll().execute(), 
    logger as any
  )
  promises.push(jwt.init())

  // Create a sengrid connection
  const email = new SendGrid(await secrets.getSecret(config.secrets.sendGridAPIKey))

  // Create a sessions service, which is a wrapper around APIs to check if a user has a valid session or not
  const sessionService = new VrameworkSessionService(jwt, {})

  await Promise.all(promises)

  const singletonServices = {
    config,
    logger,
    email,
    secrets,
    sessionService,
    jwt,
    kysely
  }

  const createSessionServices = (singletonServices: SingletonServices, httpRequest: any, _session: Session): Services => {
    return {
      ...singletonServices,
      httpRequest: new HTTPRequestService(httpRequest)
    } as never as Services
  }

  return { ...singletonServices, createSessionServices } as never as SingletonServices
}
```

## Dependecy Lookup vs Dependency Injection

The difference I see between dependency injection and lookup is that services in vramework are not scoped to each module. This means if you want to send some emails via sendGrid and others via ses you'll need to specify which one is being used where.

For example:

```typescript
const sendEmail = async (services, data, session) => {
    const { email } = services
    email.sendgrid.send()
    email.ses.send()
}
```

The transition or mixture of one library to another could rather occur within the service itself, and removes the extra cognitive requirement on knowing what is used where. The service initializer can then decide how to proceed.

By using interfaces for your services, you can switch out your actual provider within the `services.ts` file.

Here's a comparison between dependency lookup and dependency injection by chatgbt. You can see how we don't really fall into one or the other, since the service object is injected into each function, and only session services are created on demand.

| **Aspect**               | **Dependency Lookup**                                             | **Dependency Injection**                                         |
|--------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Dependency Acquisition**| Object retrieves dependencies when needed.                      | Dependencies are provided to the object at creation.             |
| **Responsibility**        | The object controls how and when to access its dependencies.     | The framework or external entity manages the dependencies.       |
| **Flexibility**           | Offers flexibility by allowing the object to decide when to fetch dependencies. | Dependencies are provided upfront, reducing runtime decisions.   |
| **Coupling**              | Can lead to tighter coupling, as the object knows where to find dependencies. | Promotes loose coupling by not requiring the object to know about the source of its dependencies. |
| **Testability**           | May require more effort to mock dependencies for testing.        | Simplifies testing, as dependencies are easily injected.         |
| **Use Case**              | Suitable when runtime flexibility in dependency resolution is needed. | Useful for systems that prioritize decoupling and testability.   |

## Advanced

One large benefit of having services injected/lookups is that we don't always need to run things against our cloud provider or online/third party services. Alot of the times local is just fine. And that's a philosophy vramework really tries to keep at it's core.

This file here is an example of how we can simply switch between our local and cloud (ideally not prod!) by setting NODE_ENV to production.

How this is done is really up to you. You can either put the isProduction check inside of the `createServices` function, or inside of your service itself.

```typescript title="services.ts"
const isProduction = process.env.NODE_ENV === 'production'
let content: S3Content | LocalContent
if (process.env.NODE_ENV === 'production' || process.env.PRODUCTION_SERVICES) {
  const keypairId = await secrets.getSecret(config.secrets.cloudfrontContentId)
  const privateKeyString = await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey)
  content = new S3Content(config.content, logger, { keypairId, privateKeyString })
} else {
  content = new LocalContent(config, logger as any)
}
```

Or if we want to stub out our services for your unit tests, you could have a single `createServicesStubs` file, that would mock out all your interfaces using something like sinonjs or jest. Or provide a service for those who like to program their mini test frameworks (something I have seen pretty often in various industries).
