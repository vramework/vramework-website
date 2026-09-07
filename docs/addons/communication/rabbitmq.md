---
format: md
title: Rabbitmq
description: "rabbitmq addon"
sidebar_label: Rabbitmq
---

# Rabbitmq

rabbitmq addon

```bash
npm install @pikku/addon-rabbitmq
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-rabbitmq`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `deleteMessage` | Delete message | `rabbitmq` |
| `sendMessage` | Send message | `rabbitmq` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'rabbitmq',
  package: '@pikku/addon-rabbitmq',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
