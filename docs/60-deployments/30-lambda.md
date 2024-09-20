---
sidebar_position: 3
title: Lambda
---

The `@vramework/deploy-lambda` package is designed to map the request/response to Vramework's internals efficiently.

When working with Lambda (and other serverless functions), it is important to consider warm-up time and package size, as these factors can significantly impact performance.

Be mindful that a large number of services or routes could potentially slow down execution time.

Using Webpack to create a roll-up of all the code is a recommended approach to eliminate unnecessary `node_modules` and reduce overall package size.

:::note
This page is still a [WIP](https://github.com/vramework/vramework.io/issues/2)
 🚧
:::