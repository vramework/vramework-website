---
sidebar_position: 1
title: Getting Started
description: How does it work?
---

This set of articles covers the **core fundamentals** of Vramework. To understand how Vramework operates, a basic CRUD application will be built, demonstrating fundamental features at an introductory level.

## Prerequisites

Ensure that [Node.js](https://nodejs.org) (version >= 20) is installed on the operating system.

Throughout this guide, `yarn` will be used to install and manage packages.

### Setup

Begin by installing the starter project using **Git**:

```bash
git clone https://github.com/vramework/vramework-starter.git project
cd project
npm install
```

The `project` directory will be created. Node modules and other boilerplate files will be installed, and a files will be created:

```bash
src/
    main.ts
    config.ts
    services.ts
    services/
      email-service.ts
    functions/
      email-functions.ts
      email-functions.spec.ts
```

Here's a brief overview of these core files:

| **File**                    | **Description**                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `main.ts`                   | The entry point                                                                                           |
| `config.ts`                 | The configuration used by the server                                                                      |
| `services.ts`               | A function that creates all the expected services required                                                 |
| `services/kysely.ts`        | The database driver                                                                                         |
| `services/email-service.ts` | A simple email service                                                                                    |
| `functions/hello-world.ts`  | A hello world function                                                                                     |
| `functions/email-functions.ts` | Functions related to emails                                                                              |
| `functions/email-functions.spec.ts` | The unit tests for the email functions                                                                |

The `main.ts` file includes an asynchronous function that starts the application.

```typescript
import { VrameworkExpress } from '@vramework/vramework-express'
import { config } from './config'
import { setupServices } from './services'
import { getRoutes } from './routes'

async function main(): Promise<void> {
  try {
    const services = await setupServices(config)
    const routes = getRoutes()
    const appServer = new VrameworkExpress(config, services, routes as any)
    appServer.init().then(async () => await appServer.start())
    process.removeAllListeners('SIGINT').on('SIGINT', async () => {
      services.logger.info('Stopping server')
      await appServer.stop()
      process.exit(0)
    })
  } catch (e: any) {
    console.error(e.toString())
    process.exit(1)
  }
}

main()
```

#### Running the Application

After completing the installation, run the following command in the OS command prompt to start the application and listen for inbound HTTP requests:

To start the server, use:

```bash
cd server
yarn start
```

This command starts the app with the HTTP server listening on the port defined in the `src/config.ts` file. Once the application is running, open a browser and navigate to `http://localhost:3000/` to see the `Hello World!` message.

To monitor file changes and start the application in development mode, use:

```bash
yarn start:dev
```

This command will watch for file changes, automatically recompiling and reloading the server.
