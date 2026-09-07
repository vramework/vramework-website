---
format: md
title: Philips Hue
description: "philipshue addon"
sidebar_label: Philips Hue
---

# Philips Hue

philipshue addon

```bash
npm install @pikku/addon-philips-hue
```

Category: **Infrastructure** · Version: `0.0.7` · Package: `@pikku/addon-philips-hue`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `lightDelete` | Light delete | `philipsHue` |
| `lightGet` | Light get | `philipsHue` |
| `lightGetAll` | Light get all | `philipsHue` |
| `lightUpdate` | Light update | `philipsHue` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'philips-hue',
  package: '@pikku/addon-philips-hue',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
