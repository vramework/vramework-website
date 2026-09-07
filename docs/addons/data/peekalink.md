---
format: md
title: Peekalink
description: "Peekalink addon"
sidebar_label: Peekalink
---

# Peekalink

Peekalink addon

```bash
npm install @pikku/addon-peekalink
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-peekalink`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `isAvailable` | Is available | `peekalink` |
| `preview` | Preview | `peekalink` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'peekalink',
  package: '@pikku/addon-peekalink',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
