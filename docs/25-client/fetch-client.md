---
sidebar_position: 10
title: Vramework Fetch
description: Vramework Fetch
---

# Calling vramework methods using fetch

You can interact with vramework using a thin wrapper around fetch that does type validation.

![Vramework Client](/img/fetch.gif)

### Creating the client

The vramework CLI can generate a `vramework-fetch.ts` file which would allow you to interact with your functions via http.

It has no client side dependencies, and is driven by a typescript type decalartion file so shouldn't take up any unnecessary space. 

In order to do so you can run `npx @vramework/cli fetch` and will need to have a `vramework.config.json` file within the `fetchFile` path set.

For example:

```json reference title="vramework.config.json"
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/apps/cli/vramework.config.json
```

For additional functionality or feature requests, please submit an issue on the [Vramework repository](https://github.com/vramework/vramework).