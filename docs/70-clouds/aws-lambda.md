---
sidebar_position: 10
title: AWS Lambda
---

The `@vramework/lambda` package is designed to map the lambda requests to vramework.

When working with Lambda (and other serverless functions), it is important to consider warm-up time and package size, as these factors can significantly impact performance.

Be mindful that a large number of services or routes could potentially slow down execution time.

Using Webpack to create a roll-up of all the code is a recommended approach to eliminate unnecessary `node_modules` and reduce overall package size.

:::info
The lambda deployment hasn't been tested in a while and likely requires some work first. Join the discussion for it here [WIP](https://github.com/vramework/vramework.io/issues/2)
 🚧
:::