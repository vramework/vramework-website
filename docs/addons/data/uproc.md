---
format: md
title: Uproc
description: "uProc data tools API (email/phone/address/company data enrichment and validation)"
sidebar_label: Uproc
---

# Uproc

uProc data tools API (email/phone/address/company data enrichment and validation)

```bash
npm install @pikku/addon-uproc
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-uproc`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `perform` | Executes a uProc processor (tool). | `uproc` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'uproc',
  package: '@pikku/addon-uproc',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
