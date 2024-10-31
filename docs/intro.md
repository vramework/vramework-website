---
sidebar_position: 1
title: Introduction
description: TODO
---

Vramework is a lightweight typescript focused framework for keeping your backend code decoupled from the http server it's using. 

The main concept behind vramework is to provide a thin layer between your HTTP server and your application logic, which means it can use any server that implements the contract. 

What this means is you can interact and deploy all your HTTP endpoints directly via your prefered server, whether that's directly within **nextJS**, via **express, fastify, or uWS** or through serverless methods like **lambda** or **azure functions**.

#### TODO: Insert tabs here

The production dependency itself is a few hundred lines of code that removes the concept of HTTP from your logic and allows you to focus on a writing pure functions instead.

#### Philosophy

Vramework tries to really do a handful of things well and get out of your way. Other more powerful frameworks like [NestJS](https://docs.nestjs.com/) and [tRPC](https://trpc.io/) exist with more bells and whistles. However ultimately require you to learn a whole new framework, APIs and libraries. Vramework takes a very different approach, which is to hide away the concept of coding in HTTP, and instead just use out of the box Typescript and classes to get thing done. All while still adhering the incredible toolbox that is the Typescript ecosystem to verify type correctness during both build-time (typechecks) and run time (schema validation).


In a nutshell, if you know know how to to write **typescript interfaces**, **functions** and **vanilla unit tests** you'll get most of the way there.


#### Installation

To get started, you can clone a starter project or setup it up from scratch.

It's recommended to clone the project first to get started and is the method we will be using for the first steps.

There are a few different starter packages, depending on what you want to use it for:

- [nextJS](./10-overview/10-getting-started.md)
- [express middleware](./10-overview/10-getting-started.md)
- [a workspace with all examples](./10-overview/10-getting-started.md)

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
