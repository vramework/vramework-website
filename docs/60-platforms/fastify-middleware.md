---
sidebar_position: 2
title: Fastify
description: Using Vramework with Fastify
---

# Using Fastify Plugin

Vramework can be / is best used within fastify as a plugin.

```typescript title="Fastify plugin"
import vrameworkFastifyPlugin from '@vramework/fastify-plugin'

import { createSingletonServices, createSessionServices } from 'path/to/vramework-bootstrap.ts'

// The fastify server setup goes here...

const singletonServices = await createSingletonServices()
app.register(vrameworkFastifyPlugin, {
   vramework: {
      singletonServices,
      createSessionServices,
      respondWith404: true,
      logRoutes: true,
      loadSchemas: true
   }
})
```

# Using VrameworkFastifyServer

:::note
The setup process for Express, uWS, and Fastify servers are identical, except for using different constructors.
:::

VrameworkFastifyServer is a quick way to get a fastify server started with vramework if you don't need to put in any custom configuration. 

```typescript reference title="Test"
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/backends/fastify/bin/start.ts
```

This script does the following:

1. Imports necessary modules from `@vramework/fastify` and your project's configuration and services.
2. Defines an async function `runServer` that:
   - Loads the Vramework configuration
   - Creates singleton services
   - Initializes a new `VrameworkFastifyServer` instance
   - Enables graceful shutdown on SIGINT
   - Initializes and starts the server
3. Handles any errors by logging them and exiting the process
4. Calls the `runServer` function to start the server

By following this setup, you can easily integrate Vramework with a Fastify server, benefiting from both Vramework's features and Fastify's performance.