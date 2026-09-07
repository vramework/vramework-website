---
format: md
title: Yourls
description: "Yourls addon"
sidebar_label: Yourls
---

# Yourls

Yourls addon

```bash
npm install @pikku/addon-yourls
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-yourls`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `urlExpand` | Url expand | `yourls` |
| `urlShorten` | Url shorten | `yourls` |
| `urlStats` | Url stats | `yourls` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'yourls',
  package: '@pikku/addon-yourls',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
