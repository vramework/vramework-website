---
sidebar_position: 30
title: Vramework Websocket
description: Vramework Websocket
---

### Creating the client

The vramework CLI can generate a `vramework-websocket.ts` file which would allow you to interact with your channels.

It has no client side dependencies, and is driven by a typescript type decalartion file so shouldn't take up any unnecessary space. 

In order to do so you can run `npx @vramework/cli websocket` and will need to have a `vramework.config.json` file within the `websocketFile` path set.

```typescript reference title="websocket.ts"
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/apps/cli/bin/websocket.ts
```
