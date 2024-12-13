---
sidebar_position: 1
title: Introduction
description: Vramework Introduction
---

# Vramework: A Function-First Approach for TypeScript Backend Development

Welcome to **Vramework**, a lightweight, TypeScript-centric framework designed around a **function-first philosophy**. Vramework enables you to build versatile and maintainable backend applications by decoupling your business logic from the underlying server or runtime.

---

## The Function-First Vision

At the heart of Vramework is the concept of defining all your endpoints as **pure functions**. These functions can be mapped to various use cases, including:

- HTTP routes
- WebSocket messages
- Cron jobs and scheduled tasks
- Other runtime-specific interactions

This function-first design ensures your codebase is versatile, allowing it to seamlessly support both traditional servers and serverless platforms. It eliminates the pain points typically encountered when switching between these paradigms or attempting to use them simultaneously within a single codebase.

With Vramework, you can deploy your functionality using:

- Traditional servers like **[Express](https://expressjs.com)**, **[Fastify](https://www.fastify.io)**, and **[uWS (µWebSockets)](https://github.com/uNetworking/uWebSockets.js)**
- Frameworks like **[Next.js](https://nextjs.org)**
- Serverless platforms like **[AWS Lambda](https://aws.amazon.com/lambda)**, **[Azure Functions](https://azure.microsoft.com/en-us/products/functions/)**, and **[Cloudflare Workers](https://workers.cloudflare.com)**

Vramework’s flexibility allows you to choose the best runtime for your project without being locked into a specific framework.

---

## Why Choose Vramework?

Vramework is built with simplicity and minimalism in mind. Unlike comprehensive frameworks like NestJS or tRPC that introduce their own abstractions and APIs, Vramework keeps things lightweight and TypeScript-native. It focuses on enabling you to write clear, concise, and maintainable code while leveraging the full power of TypeScript.

With Vramework, you don’t need to learn new paradigms for handling HTTP, WebSockets, or scheduled tasks. Instead, you write reusable, testable **pure functions** that work across multiple contexts.

### Key Benefits:
- **TypeScript-Native:** Use TypeScript interfaces, types, and checks to ensure reliability and maintainability.
- **Minimal Dependencies:** Delegates heavy lifting (e.g., HTTP and WebSocket handling) to the runtime of your choice, keeping Vramework lightweight.
- **Unified Logic:** One function can power both server and serverless use cases.
- **Focus on Modularity:** Write clean, portable, and testable backend logic without unnecessary boilerplate.

If you’re comfortable writing TypeScript interfaces, functions, and unit tests, you’re already equipped to use Vramework.

---

## Key Features

- **Unified Function-Based Logic:** Define pure functions for routes, WebSocket handlers, and scheduled tasks.
- **Seamless Runtime Abstraction:** Switch between runtimes (e.g., Express, uWS, AWS Lambda) without modifying your business logic.
- **Typed Fetch Client:** Generate client-side SDKs with type-safe API calls.
- **WebSocket Support:** Manage real-time communication through typed, channel-based handlers.
- **Scheduled Tasks:** Define cron jobs and background tasks with minimal configuration.
- **Type-Driven Development:** Automatically generate OpenAPI docs, validation schemas, and shared client types from TypeScript definitions.
- **Upcoming Features:** Web-compatible streams and queue handling to further enhance Vramework’s flexibility.

---

## A Greener Future: Measuring Impact and Carbon Offsets

As infrastructure choices multiply, understanding their environmental impact becomes more important. Vramework’s flexibility makes it easier to experiment with different runtimes, servers, and deployment options—be it on VMs, containers, or serverless. By observing how these choices affect **CPU cycles and memory consumption**, you can get a clearer picture of the carbon footprint associated with your application’s workload.

We’re excited about the idea of using Vramework as a platform to help companies make environmentally informed decisions. Imagine comparing resource usage and emissions across deployments and automatically suggesting lower-impact configurations. While this is still in the concept stage, it’s a direction we’re exploring to align performance optimization with environmental responsibility.

---

## Installation and Getting Started

To get started with Vramework, you can clone a starter project or set it up from scratch. We recommend cloning a starter project for your first steps.

### Available Starters:

- **[Next.js Starter (App Router)](./10-core/10-getting-started.md)**
- **[Express Middleware Starter](./10-core/10-getting-started.md)**
- **[Workspace Starter (All Examples)](./10-core/10-getting-started.md)**

### Clone and Run the Starter Project:

To install the TypeScript starter project using Git:

```bash
# Clone the project
git clone https://github.com/vramework/vramework-starter.git project
# Enter the directory
cd project
# Install dependencies
npm install
# Run Vramework CLI to set up the environment
npx @vramework/cli
# Start the server
npm run start
```

:::tip
Want a fresh clone without Git history? Use [degit](https://github.com/Rich-Harris/degit):
```bash
npx degit vramework/vramework-starter project
```
:::

---

## A Flexible Framework for the Future

By decoupling application logic from specific runtimes, Vramework allows you to build scalable and maintainable solutions tailored to your deployment needs—whether serverless, containerized, or traditional server-hosted environments. Its function-first philosophy, paired with the power of TypeScript, empowers you to focus on writing clean, reliable code without being constrained by runtime-specific abstractions.

---

For detailed documentation, visit the [Vramework Documentation](https://vramework.dev/docs).
