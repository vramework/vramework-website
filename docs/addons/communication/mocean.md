---
format: md
title: Mocean
description: "mocean addon"
sidebar_label: Mocean
---

# Mocean

mocean addon

```bash
npm install @pikku/addon-mocean
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-mocean`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `smsSend` | Sms send | `mocean` |
| `voiceSend` | Voice send | `mocean` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mocean',
  package: '@pikku/addon-mocean',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
