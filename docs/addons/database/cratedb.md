---
format: md
title: Cratedb
description: "Add and update data in CrateDB"
sidebar_label: Cratedb
---

# Cratedb

Add and update data in CrateDB

```bash
npm install @pikku/addon-cratedb
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-cratedb`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `executeQuery` | Execute a SQL query | `cratedb` |
| `insert` | Insert rows into a table | `cratedb` |
| `update` | Update rows in a table | `cratedb` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'cratedb',
  package: '@pikku/addon-cratedb',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
