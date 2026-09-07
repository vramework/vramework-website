---
format: md
title: Dropcontact
description: "Find B2B emails and enrich contacts"
sidebar_label: Dropcontact
---

# Dropcontact

Find B2B emails and enrich contacts

```bash
npm install @pikku/addon-dropcontact
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-dropcontact`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactEnrich` | Find B2B emails and enrich contacts | `dropcontact` |
| `contactFetchRequest` | Fetch the result of an enrichment request | `dropcontact` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'dropcontact',
  package: '@pikku/addon-dropcontact',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
