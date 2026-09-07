---
format: md
title: Erpnext
description: "Consume the ERPNext REST API"
sidebar_label: Erpnext
---

# Erpnext

Consume the ERPNext REST API

```bash
npm install @pikku/addon-erpnext
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-erpnext`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `documentCreate` | Create a document of a DocType | `erpnext` |
| `documentDelete` | Delete a document | `erpnext` |
| `documentGet` | Get a single document | `erpnext` |
| `documentGetAll` | Get all documents of a DocType | `erpnext` |
| `documentUpdate` | Update a document | `erpnext` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'erpnext',
  package: '@pikku/addon-erpnext',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
