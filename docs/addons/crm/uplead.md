---
format: md
title: Uplead
description: "uplead addon"
sidebar_label: Uplead
---

# Uplead

uplead addon

```bash
npm install @pikku/addon-uplead
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-uplead`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyEnrich` | Company enrich | `uplead` |
| `personEnrich` | Person enrich | `uplead` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'uplead',
  package: '@pikku/addon-uplead',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
