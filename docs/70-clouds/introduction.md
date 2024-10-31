---
sidebar_position: 0
title: Introduction
---

# Cloud Deployment Strategies

Deploying to the cloud usually means interacting with one of the following concepts:

### Virtual Machines

Ah, the classic deployment directly on a virtual machine approach. This doesn't require any new knowledge, as you'll just run the server on a VM the same way we did in the 1990s. Simple and ideal for quick deployments.

### Containers

Widely known as Docker, this approach is the most favoured in the world of server devop deployments. Build your docker file locally or via CI and run it via kubernetes, ECS, Azure Web App, Elastic Beanstalk or any other docker compatible hosting solution.

### Functions

Functions means getting rid of the idea of having a server in the cloud and directly invoking with your functions.

:::info
Since vramework is just a thin route wrapper to help your desired API call to get routed to your backend function, we can support all the different strategies, with a small overhead ontop.
:::

# Cloud Services

We also have some packages like `@vramework/aws` that provide custom services to ease development. These will be documented at a later stage since they don't affect the core functionality.
