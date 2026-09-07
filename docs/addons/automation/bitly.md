---
format: md
title: Bitly
description: "bitly addon"
sidebar_label: Bitly
---

# Bitly

bitly addon

```bash
npm install @pikku/addon-bitly
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-bitly`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `linkCreate` | Link create | `bitly` |
| `linkGet` | Link get | `bitly` |
| `linkUpdate` | Link update | `bitly` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'bitly',
  package: '@pikku/addon-bitly',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
