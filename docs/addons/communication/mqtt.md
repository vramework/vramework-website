---
format: md
title: Mqtt
description: "Publish messages to an MQTT broker"
sidebar_label: Mqtt
---

# Mqtt

Publish messages to an MQTT broker

```bash
npm install @pikku/addon-mqtt
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-mqtt`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `sendMessage` | Publish a message to an MQTT topic | `mqtt` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mqtt',
  package: '@pikku/addon-mqtt',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
