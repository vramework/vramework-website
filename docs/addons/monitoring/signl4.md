---
format: md
title: Signl4
description: "Send and resolve SIGNL4 alerts"
sidebar_label: Signl4
---

# Signl4

Send and resolve SIGNL4 alerts

```bash
npm install @pikku/addon-signl4
```

Category: **Monitoring** · Version: `0.0.7` · Package: `@pikku/addon-signl4`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `alertResolve` | Resolve an alert | `signl4` |
| `alertSend` | Send an alert | `signl4` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'signl4',
  package: '@pikku/addon-signl4',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
