---
sidebar_position: 10
title: Getting Started
description: How does it work?
---

This set of articles covers the **core fundamentals** of Vramework. To understand how Vramework operates, a basic CRUD application will be built, demonstrating fundamental features at an introductory level.

## Prerequisites

Ensure that [Node.js](https://nodejs.org) (version >= 20) is installed on the operating system.

Throughout this guide, `npm` will be used to install and manage packages.

### Setup

Begin by installing the starter project using **Git**:

```bash
git clone https://github.com/vramework/express-starter.git project
cd project
npm install
```

The `project` directory will be created. Node modules and other boilerplate files will be installed, and a files will be created:

```bash
bin/
  main.ts
src/
  config.ts
  services.ts
  vramework-types.ts
  books.service.ts
  books.function.ts
  books.types.ts
vramework.config.json
```

Here's a brief overview of these core files:

| **File**                    | **Description**                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `main.ts`                   | The entry point                                                                                           |
| `config.ts`                 | The configuration used by the server                                                                      |
| `services.ts`               | A function that creates all the expected services required                                                 |
| `book.service.ts` | A simple book service                                                                                     |
| `books.function.ts`  | The glue between services and http calls
| `books.types.ts`  | The types we expect to use for this object                                                            |
| `vramework.config.json`  | A bit of config needed by vramework to know where to look for routes and to save generated schemas                                                            |

The `main.ts` file includes an asynchronous function that starts the application.

We'll explain what some of the non vanilla functionality is shortly!

```typescript
import { getVrameworkConfig } from '@vramework/core/vramework-config'
import { ExpressServer } from '@vramework/deploy-express'

import { config } from '../src/config'
import { createSessionServices, createSingletonServices } from '../src/services'

async function main ({ configFile }: { configFile?: string }): Promise<void> {
  try {
    const vrameworkConfig = await getVrameworkConfig(configFile)
    const services = await createSingletonServices(config)

    const appServer = new ExpressServer(
      vrameworkConfig,
      config, 
      services,
      createSessionServices,
    )

    await appServer.init()
    await appServer.start()

    process.removeAllListeners('SIGINT').on('SIGINT', async () => {
      await appServer.stop()
      process.exit(0)
    })
  } catch (e: any) {
    console.error(e.toString())
    process.exit(1)
  }
}

main({
  // This is an optional argument for the config file to use
  configFile: process.argv[2]
})
```

### The config file

The `vramework.config.json` file tells us where to look for routes and where to save our generated our schemas to validate calls against.

```json
{
    "routeDirectories": ["./src"],
    "schemaOutputDirectory": "./generated",
    "tsconfig": "./tsconfig.json"
}
```

#### Running the Application

After completing the installation, run the following command in the OS command prompt to start the application and listen for inbound HTTP requests:

To start the server, use:

```bash
# Generate all the required schemas, 
# only needed when typescript interfaces change
npm run schema
# Run the server
npm run dev
```

The first command creates schemas for all of your HTTP endpoints, so that we can ensure the data is valid before our actual endpoints recieve them. This will be discussed in more depth further on.

This command starts the app with the HTTP server listening on the port defined in the `src/config.ts` file. Once the application is running, open a browser and navigate to `http://localhost:4002/health-check` to see the health check working.

To monitor file changes and start the application in development mode, use:

```bash
npm run dev
```

This command will watch for file changes, automatically recompiling and reloading the server.
