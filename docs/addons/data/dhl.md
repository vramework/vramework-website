---
format: md
title: Dhl
description: "DHL addon"
sidebar_label: Dhl
---

# Dhl

DHL addon

```bash
npm install @pikku/addon-dhl
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-dhl`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `shipmentGet` | Get tracking details for a shipment | `dhl` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'dhl',
  package: '@pikku/addon-dhl',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
