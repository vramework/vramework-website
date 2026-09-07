---
format: md
title: Lingvanex
description: "Consume the LingvaNex translation API"
sidebar_label: Lingvanex
---

# Lingvanex

Consume the LingvaNex translation API

```bash
npm install @pikku/addon-lingvanex
```

Category: **AI** · Version: `0.0.7` · Package: `@pikku/addon-lingvanex`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `translate` | Translate text | `lingvanex` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'lingvanex',
  package: '@pikku/addon-lingvanex',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
