---
format: md
title: Pushover
description: "Send push notifications via Pushover"
sidebar_label: Pushover
---

# Pushover

Send push notifications via Pushover

```bash
npm install @pikku/addon-pushover
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-pushover`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `messagePush` | Push a notification message | `pushover` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'pushover',
  package: '@pikku/addon-pushover',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
