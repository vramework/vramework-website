---
format: md
title: Quickchart
description: "Create chart images via the QuickChart API"
sidebar_label: Quickchart
---

# Quickchart

Create chart images via the QuickChart API

```bash
npm install @pikku/addon-quickchart
```

Category: **Media** · Version: `0.1.7` · Package: `@pikku/addon-quickchart`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `chartCreate` | Render a chart image from a Chart.js configuration | `quickchart` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'quickchart',
  package: '@pikku/addon-quickchart',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
