---
sidebar_position: 20
title: CORS
description: Cross Origin Requests
---

## CORS

Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain. 

The server implementations such as `VrameworkExpressServer` don't provide much customization and are best used as a quick start, allowing cors and other settings to be done directly via the server.

### Express

:::info
It's recommended to use `@vramework/express-middleware` as it will give you complete control over your server settings.
:::

Under the hood, Vramework uses the package cors to process cors commands.

To enable CORS in express:

```typescript
const server = new VrameworkServer(...)
server.enableCors()
await server.init()
```

The enableCors() method takes an optional configuration object argument. The available properties of this object are described in the official CORS documentation. Another way is to pass a callback function that lets you define the configuration object asynchronously based on the request.

### Fastify

:::info
It's recommended to use `@vramework/fastify-plugin` as it will give you complete control over your server settings.
:::

### uWS

:::info
It's recommended to use `@vramework/uws-handler` as it will give you complete control over your server settings.
:::