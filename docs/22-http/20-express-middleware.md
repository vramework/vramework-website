---
sidebar_position: 20
title: Express Middleware
description: Running via express middleware 
---

Now that we went through the core concepts, we can look at how the `express-middleware-starter` pulls them all together.

### The bin file

The `main.ts` file includes an asynchronous function that starts the application.

```typescript reference title="Entry point"
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/bin/main.ts
```

### The server file

The `src/server.ts` file is where we setup our express server. There's nothing special going on here, other than using the `vrameworkMiddleware` to handle our HTTP requests.

The important thing is to remember to import the routes and schemas so that they can be registered for the server.

```typescript reference title="The express server"
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/src/server.ts
```


#### Running the Application

After completing the installation, run the following command in the OS command prompt to start the application and listen for inbound HTTP requests:

To start the server, use:

```bash
# Run the vramework CLI, needed whenever your routes change.
# This will create all the schemas and a few useful type files to make
# development easier
npx @vramework/cli
# Run the server
npm run dev
```

This command starts the server in dev mode with the HTTP server listening on the port defined in the `src/config.ts` file. 

Once the application is running, open a browser and navigate to `http://localhost:4002/health-check` to see the health check working.
