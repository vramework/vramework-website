---
format: md
title: Ghost
description: "Consume the Ghost blogging CMS Admin and Content API"
sidebar_label: Ghost
---

# Ghost

Consume the Ghost blogging CMS Admin and Content API

```bash
npm install @pikku/addon-ghost
```

Category: **Documents** · Version: `0.0.7` · Package: `@pikku/addon-ghost`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `postCreate` | Create a post | `ghost` |
| `postDelete` | Delete a post | `ghost` |
| `postGet` | Get a post | `ghost` |
| `postGetAll` | Get many posts | `ghost` |
| `postUpdate` | Update a post | `ghost` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'ghost',
  package: '@pikku/addon-ghost',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
