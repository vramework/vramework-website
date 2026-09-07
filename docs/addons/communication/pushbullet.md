---
format: md
title: Pushbullet
description: "Pushbullet addon"
sidebar_label: Pushbullet
---

# Pushbullet

Pushbullet addon

```bash
npm install @pikku/addon-pushbullet
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-pushbullet`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `pushCreate` | Push create | `pushbullet` |
| `pushDelete` | Push delete | `pushbullet` |
| `pushGetAll` | Push get all | `pushbullet` |
| `pushUpdate` | Push update | `pushbullet` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'pushbullet',
  package: '@pikku/addon-pushbullet',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
