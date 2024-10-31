---
sidebar_position: 3
title: uWS
description: Using Vramework with uWS
---

# Using uWS Handler

Vramework can be / is best used within uws as a handler.

```typescript title="uWS Handler"
import { vrameworkHandler } from '@vramework/uws-handler'

import { createSingletonServices, createSessionServices } from 'path/to/vramework-bootstrap.ts'

// The fastify server setup goes here...

const singletonServices = await createSingletonServices()
app.any('/*', vrameworkHandler({
   logRoutes: true,
   singletonServices,
   createSessionServices,
}))
```

# Using VrameworkUWSServer

:::note
The setup process for Express, uWS, and Fastify servers are identical, except for using different constructors.
:::

VrameworkUWSServer is a quick way to get a fastify server started with vramework if you don't need to put in any custom configuration. 

```typescript reference title="Test"
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/backends/uws/bin/start.ts
```

This script does the following:

1. Imports necessary modules from `@vramework/uws` and your project's configuration and services.
2. Defines an async function `runServer` that:
   - Loads the Vramework configuration
   - Creates singleton services
   - Initializes a new `VrameworkUWSServer` instance
   - Enables graceful shutdown on SIGINT
   - Initializes and starts the server
3. Handles any errors by logging them and exiting the process
4. Calls the `runServer` function to start the server

By following this setup, you can easily integrate Vramework with a uWS server, benefiting from both Vramework's features and uWS's performance.
