---
sidebar_position: 1
title: Introduction
description: Vramework Introduction
---

# Vramework: A Function-First Approach for TypeScript Backend Development

Introducing **Vramework**, a lightweight, TypeScript-centric framework designed around a function-first philosophy. Vramework keeps your backend code effortlessly decoupled from the underlying server or runtime, empowering you to build versatile and maintainable applications.

## The Function-First Vision

Vramework allows all your endpoints to be defined as Functions. These functions are then mapped to routes, cron jobs, websocket messages and other runtimes. 

This function-first design ensures your code can be used both via servers and serverless equally, removing the pain points of seperation normally brought by trying to use both or switching between them within a single codebase.

Deploy your endpoints or functionality using [Next.js](https://nextjs.org), [Express](https://expressjs.com), [Fastify](https://www.fastify.io), [uWS](https://github.com/uNetworking/uWebSockets.js), or serverless platforms like [AWS Lambda](https://aws.amazon.com/lambda), [Azure Functions](https://azure.microsoft.com/en-us/products/functions/), and [Cloudflare Workers](https://workers.cloudflare.com). Vramework’s flexibility ensures you’re not tied to a specific framework or runtime, allowing you to choose the best fit for your project’s needs.

## Why Choose Vramework?

Vramework is built on the principles of simplicity and minimalism. Unlike more comprehensive frameworks such as NestJS or tRPC, which often require adopting their ecosystems and learning new APIs, Vramework stays unobtrusive. It prioritizes TypeScript-native development, letting you concentrate on what truly matters—building your application.

With Vramework, there's no need to navigate complex abstractions for HTTP, WebSocket, or scheduling. Instead, you write pure functions that are versatile across different use cases. Leveraging TypeScript’s robust ecosystem, Vramework provides both build-time type checks and runtime schema validation, ensuring your code is reliable and maintainable.

If you’re comfortable writing TypeScript interfaces, functions, and unit tests, you’re already well-equipped to get started with Vramework.

## Key Features

- **Lightweight TypeScript-Based WebSocket and Fetch Clients:** Streamline real-time and network communications with ease.
  
- **Pure Function-Based Logic:** Maintain modular, testable, and portable backend code.
  
- **WebSocket Support:** Effortlessly manage real-time interactions through dedicated channels.
  
- **Scheduled Tasks:** Handle cron jobs and background tasks with minimal configuration.
  
- **Web-Compatible Streams and Queue Handling:** Upcoming features that will further enhance Vramework’s flexibility.
  
- **Minimal Production Dependencies:** Vramework relies on your chosen runtime to handle the heavy lifting, ensuring the framework remains lightweight and efficient.

By decoupling your application logic from specific protocols or runtimes, Vramework allows you to focus on building scalable and maintainable solutions tailored to your deployment needs—whether that's serverless, containerized, or traditional server-hosted environments.

#### Installation

To get started, you can clone a starter project or setup it up from scratch.

It's recommended to clone the project first to get started and is the method we will be using for the first steps.

There are a few different starter packages, depending on what you want to use it for:

- [nextJS](./10-core/10-getting-started.md)
- [express middleware](./10-core/10-getting-started.md)
- [a workspace with all examples](./10-core/10-getting-started.md)

To install the TypeScript starter project with **Git**:

```bash npm2yarn
# Clone the project
git clone https://github.com/vramework/vramework-starter.git project
# Enter the directory
cd project
# Setup dependencies
npm install
# Run vramework cli
npx @vramework/cli
# Run start
npm run start
```

:::tip
If you'd like to clone the repository without the git history, you can use [degit](https://github.com/Rich-Harris/degit).
:::
