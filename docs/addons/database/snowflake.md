---
format: md
title: Snowflake
description: "Run SQL queries, insert and update rows in Snowflake"
sidebar_label: Snowflake
---

# Snowflake

Run SQL queries, insert and update rows in Snowflake

```bash
npm install @pikku/addon-snowflake
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-snowflake`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `executeQuery` | Execute an SQL query | `snowflake` |
| `insert` | Insert rows into a table | `snowflake` |
| `update` | Update rows in a table | `snowflake` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'snowflake',
  package: '@pikku/addon-snowflake',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
