---
format: md
title: Totp
description: "TOTP addon"
sidebar_label: Totp
---

# Totp

TOTP addon

```bash
npm install @pikku/addon-totp
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-totp`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `totpGenerate` | Totp generate | `totp` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'totp',
  package: '@pikku/addon-totp',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
