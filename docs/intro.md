---
sidebar_position: 1
title: Introduction
description: TODO
---

Vramework is a lightweight framework for building efficient, scalable [Node.js](https://nodejs.org/) server-side applications. 

It's a few hundred lines of code that removes the concept of HTTP from your logic and allows you to focus on a writing pure functions instead.

The core concept behind vramework is about creating a thin layer between your HTTP server and your application logic, which means it can use any server that implements the [contract](/how-to/contract). This allows us to use different server libraries and deployment methods, such as [Express](https://expressjs.com/) (the default), [uWS](https://github.com/uNetworking/uWebSockets/), or even serverless calls like lambda without having to change any of our actual logic.

Similar to nestJS, vramework can expose the actual server itself if you want to add custom code. However it's recommended instead to use a custom [Session Services](./docs/session-services) to access or manipulate the data.

#### Philosophy

Vramework tries to really do a handful of things well and get out of your way. Other more powerful frameworks like [NestJS](https://docs.nestjs.com/) and [tRPC](https://trpc.io/) exist with more bells and whistles. However ultimately require you to learn a whole new framework, APIs and libraries. Vramework takes a very different approach, which is to hide away the concept of coding in HTTP, and instead just use out of the box Typescript and classes to get thing done. All while still adhering the incredible toolbox that is the Typescript ecosystem to verify type correctness during both build-time (typechecks) and run time (schema validation).

Know how to to write typescript interfaces, functions and tests? That's pretty much all you need to know. 


#### Installation

To get started, you can clone a starter project or setup it up from scratch.

It's recommended to clone the project first to get started and is the method we will be using for the first steps.

To install the TypeScript starter project with **Git**:

```bash
$ git clone https://github.com/vramework/vramework-starter.git project
$ cd project
$ npm install
$ npm run start
```

> info **Hint** If you'd like to clone the repository without the git history, you can use [degit](https://github.com/Rich-Harris/degit).
