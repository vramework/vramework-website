---
sidebar_position: 3
title: uWS
description: Using Vramework with uWS
---

# Using Vramework with uWS

To use Vramework with uWS, you need to create an instance of the `VrameworkUWSServer`.

:::note
The setup process for Express, uWS, and Fastify is identical, except for using different constructors.
:::

## Setup

Here's how to set up Vramework with uWS:

```typescript
import {
  VrameworkUWSServer,
  getVrameworkConfig,
} from '@vramework/deploy-uws'

import { config } from '@todos/functions/src/config'
import { createSingletonServices, createSessionServices } from '@todos/functions/src/services'

const runServer = async (configFile: string) => {
  try {
    const vrameworkConfig = await getVrameworkConfig(configFile)
    const singletonServices = await createSingletonServices(config)
    const appServer = new VrameworkUWSServer(
      vrameworkConfig,
      config,
      singletonServices,
      createSessionServices
    )
    appServer.enableExitOnSigInt()
    await appServer.init()
    await appServer.start()
  } catch (e: any) {
    console.error(e.toString())
    process.exit(1)
  }
}

runServer()
```

This script does the following:

1. Imports necessary modules from `@vramework/deploy-uws` and your project's configuration and services.
2. Defines an async function `runServer` that:
   - Loads the Vramework configuration
   - Creates singleton services
   - Initializes a new `VrameworkUWSServer` instance
   - Enables graceful shutdown on SIGINT
   - Initializes and starts the server
3. Handles any errors by logging them and exiting the process
4. Calls the `runServer` function to start the server

By following this setup, you can easily integrate Vramework with a uWS server, benefiting from both Vramework's features and uWS's performance.