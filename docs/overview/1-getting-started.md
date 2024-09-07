---
sidebar_position: 1
title: Getting Started
description: How does it work?
---

In this set of articles, you'll learn the **core fundamentals** of Vramework. To get familiar with how Vramework works, we'll build a basic CRUD application with features that cover a lot of ground at an introductory level.

## Prerequisites

Please make sure that [Node.js](https://nodejs.org) (version >= 20) is installed on your operating system.

For the duration of this guide, we will be using `yarn` to install and manage our packages.

### Setup

We first need to install the starter project using **Git**:

```bash
git clone https://github.com/vramework/vramework-starter.git project
cd project
npm install
```

The `project` directory will be created, node modules and a few other boilerplate files will be installed, and several different folders will be created:

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

Here's a brief overview of those core files:

| **File**                    | **Description**                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `main.ts`                   | The entry point                                                                                           |
| `config.ts`                 | The configuration used by the server                                                                      |
| `services.ts`               | A function that creates all the expected services required                                                 |
| `services/kysely.ts`        | Our database driver                                                                                         |
| `services/email-service.ts` | A simple email service                                                                                    |
| `functions/hello-world.ts`  | A hello world function                                                                                     |
| `functions/email-function.ts` | Functions related to emails                                                                              |
| `functions/email-function.spec.ts` | The unit tests for the email functions                                                                |

The `main.ts` file includes an async function, which will start our application.

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

#### Running the application

Once the installation process is complete, you can run the following command at your OS command prompt to start the application listening for inbound HTTP requests:

To run the server, use:

```bash
cd server
yarn start
```

This command starts the app with the HTTP server listening on the port defined in the `src/config.ts` file. Once the application is running, open your browser and navigate to `http://localhost:3000/`. You should see the `Hello World!` message.

To watch for changes in your files, you can run the following command to start the application in development mode:

```bash
yarn start:dev
```

This command will watch your files, automatically recompiling and reloading the server.
