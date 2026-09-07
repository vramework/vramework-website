---
format: md
title: Msg91
description: "MSG91 addon"
sidebar_label: Msg91
---

# Msg91

MSG91 addon

```bash
npm install @pikku/addon-msg91
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-msg91`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `smsSend` | Sms send | `msg91` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'msg91',
  package: '@pikku/addon-msg91',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
