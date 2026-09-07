---
format: md
title: Vero
description: "Vero addon"
sidebar_label: Vero
---

# Vero

Vero addon

```bash
npm install @pikku/addon-vero
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-vero`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `eventTrack` | Event track | `vero` |
| `userAddTags` | User add tags | `vero` |
| `userAlias` | User alias | `vero` |
| `userCreate` | User create | `vero` |
| `userDelete` | User delete | `vero` |
| `userResubscribe` | User resubscribe | `vero` |
| `userUnsubscribe` | User unsubscribe | `vero` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'vero',
  package: '@pikku/addon-vero',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
