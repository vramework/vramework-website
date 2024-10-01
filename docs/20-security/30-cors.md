---
sidebar_position: 20
title: CORs
description: Cross Origin Requests
---

## CORS

Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain. 

### Express

Under the hood, Vramework uses the package cors to process cors commands.

To enable CORS in express:

```typescript
const server = new VrameworkServer(...)
server.enableCors()
await server.init()
```

The enableCors() method takes an optional configuration object argument. The available properties of this object are described in the official CORS documentation. Another way is to pass a callback function that lets you define the configuration object asynchronously based on the request.

### Fastify

:::note
This has not yet been implemented
:::

### uWS

:::note
This has not yet been implemented
:::