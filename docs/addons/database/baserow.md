---
format: md
title: Baserow
description: "Consume the Baserow API"
sidebar_label: Baserow
---

# Baserow

Consume the Baserow API

```bash
npm install @pikku/addon-baserow
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-baserow`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `rowBatchCreate` | Create up to 200 rows in one request | `baserow` |
| `rowBatchDelete` | Delete up to 200 rows in one request | `baserow` |
| `rowBatchUpdate` | Update up to 200 rows in one request | `baserow` |
| `rowCreate` | Create a row | `baserow` |
| `rowDelete` | Delete a row | `baserow` |
| `rowGet` | Retrieve a row | `baserow` |
| `rowGetAll` | List rows in a table | `baserow` |
| `rowUpdate` | Update a row | `baserow` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'baserow',
  package: '@pikku/addon-baserow',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
