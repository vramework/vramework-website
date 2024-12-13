---
sidebar_position: 20
title: Services  
description: How services work  
---

## Introduction to Services in Vramework

Services in Vramework are a fundamental way for functions to interact with any form of external state.

Most services are simple in nature, only requiring optional initialization and cleanup steps. Let's look at an example.

### Example: Book Management Service

Here's an example service that manages a collection of books. Notice that it doesn't depend on any vramework features other than the Error, making it straightforward and easy to use.

It also demonstrates how to handle errors using `NotFoundError`. This error type is recognized by Vramework and automatically mapped to an appropriate message.

```typescript reference title="Book Server"
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/src/book.service.ts
```

## Types of Services

Vramework offers two main types of services:

### Singleton Services

These services are created once when the server starts and remain active until the server shuts down. Singleton services are ideal for managing global resources, like:

- **Session Management**: Retrieves and validates user sessions.
- **Book Service**: The book service we just saw earlier.
- **Database Connection**: Manages database connections, such as a Pool.
- **Email Provider**: Sends emails.

:::info
Different function calls can use the same instance, so ***do not*** save any state specific to the function call. That's where session services come in handy!
:::

### Session Services

These are created for each API call and exist only for the duration of that call. They can interact with user sessions, request and response objects, and more.

The core services are:

- **VrameworkRequest**: Access request data (like headers)
- **VrameworkResponse**: Modify the response (like setting cookies)

Custom examples include:

- **Database Client**: If the singleton service is a pool, the session service could be a client, which can provide benefits such as running everything in a single transaction if desired or automatically auditing tables.
- **TemporaryFileService**: Manages temporary files that are automatically deleted when the session ends

## How to Create Services

Creating services in Vramework is a straightforward process, relying on basic functions to return services, along with a factory to generate session services.

First you'll need your application types. These are types that extend the vramework ones and are passed as parameters to your functions.

:::info
Note how this uses a declaration file `.d.ts`. This enforces us to avoid putting anything concrete in this file.
:::

```typescript reference title="Application Types"
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/types/application-types.d.ts
```

Now, let's create the services:

```typescript reference title="Application Types"
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/src/services.ts
```

## Dependency Lookup vs. Dependency Injection

Vramework supports **dependency lookup** for service management.

The reasoning behind this is primarily to keep things simple. By having a single entry point to create our services we can manage how they are created.

:::info
The disadvantage to this approach is that it's harder for to tree shake our dependencies when selecting routes. This is something that requires more investigation, and may mean we ultimately go down the route of dependency injection.
:::

| **Aspect**               | **Dependency Lookup**                                             | **Dependency Injection**                                         |
|--------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Dependency Acquisition**| Object retrieves dependencies as needed.                        | Dependencies are provided when the object is created.            |
| **Responsibility**        | The object manages its own dependencies.                        | The system provides dependencies.                                |
| **Flexibility**           | Flexible, since dependencies are acquired on demand.            | Less flexible but reduces runtime decision-making.               |
| **Coupling**              | Tighter coupling, as the object knows how to get its dependencies. | Looser coupling, making the system more modular.                 |
| **Testability**           | Requires mocking during testing.                                | Easily testable since dependencies are injected.                 |
| **Best Use Case**         | When runtime flexibility is important.                          | When system decoupling and easy testing are priorities.          |

## Advanced Use: Switching Between Local and Cloud Services

Vramework allows you to switch between local and cloud services easily, which is especially helpful for development environments. Here's an example:

```typescript
const isProduction = process.env.NODE_ENV === 'production';
let content: S3Content | LocalContent;
if (isProduction) {
  const keypairId = await secrets.getSecret(config.secrets.cloudfrontContentId);
  const privateKeyString = await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey);
  content = new S3Content(config.content, logger, { keypairId, privateKeyString });
} else {
  content = new LocalContent(config, logger);
}
```

For unit tests, you can use a `createServicesStubs` file to mock services using tools like SinonJS or Jest.

By understanding and mastering how services work in Vramework, you'll be able to efficiently manage both session-based and global resources, making your applications more scalable and maintainable.