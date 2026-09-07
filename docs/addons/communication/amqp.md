---
format: md
title: Amqp
description: "AMQP sender integration for Pikku"
sidebar_label: Amqp
---

# Amqp

AMQP sender integration for Pikku

```bash
npm install @pikku/addon-amqp
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-amqp`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `sendMessage` | Send a raw message via AMQP | `amqp` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'amqp',
  package: '@pikku/addon-amqp',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
