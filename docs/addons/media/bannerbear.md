---
format: md
title: Bannerbear
description: "Generate images from templates with the Bannerbear API"
sidebar_label: Bannerbear
---

# Bannerbear

Generate images from templates with the Bannerbear API

```bash
npm install @pikku/addon-bannerbear
```

Category: **Media** · Version: `0.0.7` · Package: `@pikku/addon-bannerbear`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `imageCreate` | Create an image | `bannerbear` |
| `imageGet` | Get a specific image | `bannerbear` |
| `templateGet` | Get a specific template | `bannerbear` |
| `templateGetAll` | List templates | `bannerbear` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'bannerbear',
  package: '@pikku/addon-bannerbear',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
