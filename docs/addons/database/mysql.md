---
format: md
title: Mysql
description: "MySQL database operations."
sidebar_label: Mysql
---

# Mysql

MySQL database operations.

```bash
npm install @pikku/addon-mysql
```

Category: **Database** · Version: `0.1.6` · Package: `@pikku/addon-mysql`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `count` | Counts rows in a MySQL table with optional filtering | `mysql` |
| `deleteRows` | Deletes rows from a MySQL table with advanced filtering | `mysql` |
| `describeTable` | Gets the schema/structure of a MySQL table | `mysql` |
| `dropTable` | Drops a MySQL table, removing it completely including structure and data | `mysql` |
| `executeQuery` | Executes a raw SQL query on the MySQL database | `mysql` |
| `insert` | Inserts a row into a MySQL table | `mysql` |
| `insertMany` | Inserts multiple rows into a MySQL table | `mysql` |
| `listTables` | Lists all tables in the MySQL database | `mysql` |
| `select` | Selects rows from a MySQL table with advanced filtering | `mysql` |
| `transaction` | Executes multiple queries in a transaction with automatic rollback on error | `mysql` |
| `truncate` | Truncates a MySQL table, removing all data but preserving the structure | `mysql` |
| `update` | Updates rows in a MySQL table with advanced filtering | `mysql` |
| `upsert` | Inserts a row or updates it if a duplicate key exists | `mysql` |

## Secrets

- `MYSQL_CREDENTIALS` — MySQL authentication secrets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mysql',
  package: '@pikku/addon-mysql',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
