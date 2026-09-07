---
format: md
title: Clearbit
description: "Consume the Clearbit API for company and person enrichment"
sidebar_label: Clearbit
---

# Clearbit

Consume the Clearbit API for company and person enrichment

```bash
npm install @pikku/addon-clearbit
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-clearbit`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyAutocomplete` | Autocomplete a company | `clearbit` |
| `companyEnrich` | Enrich a company | `clearbit` |
| `personEnrich` | Enrich a person | `clearbit` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'clearbit',
  package: '@pikku/addon-clearbit',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
