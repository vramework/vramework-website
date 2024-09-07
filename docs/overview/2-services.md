---
sidebar_position: 2
title: Services
description: How services work
---

The first step in Vramework is setting up the services.

Services in Vramework are a fundamental way for functions to access any form of state outside of them.

There is nothing particularly special about a service, other than optionally requiring an initialization and destruction endpoint.

For example, here is a service endpoint for sending out emails via the SendGrid service. Note that it does not rely on any Vramework-specific concepts or libraries.

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

  private async sendEmail(to: string, templateId: SendGridTemplate, dynamicTemplateData?: Record<string, string | number>) {
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

Vramework is built around a combination of dependency lookup and dependency injection.

There are two types of services in Vramework:

### Singleton Service

A singleton service is created once for the entire server. Its lifetime begins when the server starts and ends when the server shuts down.

Example core services include:

- **Session Management**: A service used to validate user sessions
- **Database**: To create an ORM/database pool connection
- **Email Provider**: To send email templates

### Session Service

A session service is created on demand for each API call. Its lifetime is tied to the duration of the call itself. The service is aware of the user session, and is destroyed once the call concludes.

Example session services include:

- **HeaderService**: Provides access to request information (such as headers or binary payloads)
- **Database Client**: A database client that performs transactions (which can enable features like auto-auditing)
- **TemporaryFileService**: Creates a temporary folder that is deleted once the call is complete

A session service can optionally implement the `SessionService` interface, which includes a single function, `closeSession`, to destroy the service upon completion.

**Important**: Session services should always be lazy-loaded or created on demand. This means that while the class itself is created and provided with session context, it should not perform any operations until it is called. This approach prevents any unrequired work being done.

## Creating Services

Vramework does not incorporate extensive "magic" in service creation. Instead, it relies on straightforward functions that return an object with all services, along with a factory function for creating session services.

First, define the types:

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

Then, create the services to populate these objects. This file consolidates all services and is the primary configuration file for Vramework.

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

  // Create a secret service that retrieves secrets using environment variables
  const secrets = new LocalSecretService(config, logger)

  // Create a connection to the database
  const { kysely } = new KyselyDB(config.sql, await secrets.getPostgresCredentials())
  promises.push(await kysely.init())
  
  // Get JWT tokens
  const jwt = new JWTService<UserSession>(async () => 
    await kysely.selectFrom('app.jwtSecret').selectAll().execute(), 
    logger as any
  )
  promises.push(jwt.init())

  // Create a SendGrid connection
  const email = new SendGrid(await secrets.getSecret(config.secrets.sendGridAPIKey))

  // Create a session service, which checks if a user has a valid session
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
    } as Services
  }

  return { ...singletonServices, createSessionServices }
}
```

## Dependency Lookup vs Dependency Injection

In Vramework, services are not scoped to each module. This means that if multiple email providers are used (e.g., SendGrid and SES), it is necessary to specify which provider is being used in each context.

For example:

```typescript
const sendEmail = async (services, data, session) => {
    const { email } = services
    email.sendgrid.send()
    email.ses.send()
}
```

The transition between different libraries can occur within the service itself, reducing the cognitive load of managing different providers. The service initializer can handle the specifics of how to proceed.

Using interfaces for services allows for switching out providers within the `services.ts` file.

Here is a comparison between dependency lookup and dependency injection:

| **Aspect**               | **Dependency Lookup**                                             | **Dependency Injection**                                         |
|--------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Dependency Acquisition**| Object retrieves dependencies when needed.                      | Dependencies are provided to the object at creation.             |
| **Responsibility**        | The object controls how and when to access its dependencies.     | The framework or external entity manages the dependencies.       |
| **Flexibility**           | Offers flexibility by allowing the object to decide when to fetch dependencies. | Dependencies are provided upfront, reducing runtime decisions.   |
| **Coupling**              | Can lead to tighter coupling, as the object knows where to find dependencies. | Promotes loose coupling by not requiring the object to know about the source of its dependencies. |
| **Testability**           | May require more effort to mock dependencies for testing.        | Simplifies testing, as dependencies are easily injected.         |
| **Use Case**              | Suitable when runtime flexibility in dependency resolution is needed. | Useful for systems that prioritize decoupling and testability.   |

## Advanced

One significant benefit of using injected or looked-up services is that it is not always necessary to interact with cloud providers or online/third-party services. Often, local alternatives suffice. This philosophy is central to Vramework.

An example shows how to switch between local and cloud services (not for production!) by setting `NODE_ENV` to production.

The implementation approach is flexible. The `isProduction` check can be placed either inside the `createServices` function or within the service itself.

```typescript title="services.ts"
const isProduction = process.env.NODE_ENV === 'production'
let content: S3Content | LocalContent
if (isProduction || process.env.PRODUCTION_SERVICES) {
  const keypairId = await secrets.getSecret(config.secrets.cloudfrontContentId)
  const privateKeyString = await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey)
  content = new S3Content(config.content, logger, { keypairId, privateKeyString })
} else {
  content = new LocalContent(config, logger as any)
}
```

Alternatively, for unit tests, a `createServicesStubs` file can be used to mock all interfaces using tools like SinonJS or Jest. This approach also accommodates those who prefer to develop their own testing frameworks.
