---
sidebar_position: 1
title: Express
description: Using Vramework with Express
---

# Using Express Middleware

Vramework can be / is best used within express as a middleware function.

```typescript title="Express middleware"
import { vrameworkMiddleware } from '@vramework/express-middleware'

import { createSingletonServices, createSessionServices } from 'path/to/vramework-bootstrap.ts'

// The express server setup goes here...

const singletonServices = await createSingletonServices()
app.use(vrameworkMiddleware(
   singletonServices, 
   createSessionServices, 
   {
      respondWith404: false,
      logRoutes: true,
      loadSchemas: true
   }
))
```

# Using VrameworkExpressServer 

:::note
The setup process for Express, uWS, and Fastify servers are identical, except for using different constructors.
:::

VrameworkExpressServer is a quick way to get an express server started with vramework if you don't need to put in any custom configuration. 

```typescript reference title="Express start"
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/backends/express/bin/start.ts
```

This script does the following:

1. Imports necessary modules from `@vramework/express` and your project's configuration and services.
2. Defines an async function `runServer` that:
   - Loads the Vramework configuration
   - Creates singleton services
   - Initializes a new `VrameworkExpressServer` instance
   - Enables graceful shutdown on SIGINT
   - Initializes and starts the server
3. Handles any errors by logging them and exiting the process
4. Calls the `runServer` function to start the server

By following this setup, you can easily integrate Vramework with a Express server, benefiting from both Vramework's features and Express's ecosystem.