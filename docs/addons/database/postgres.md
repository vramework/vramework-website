---
format: md
title: Postgres
description: "PostgreSQL database operations."
sidebar_label: Postgres
---

# Postgres

PostgreSQL database operations.

```bash
npm install @pikku/addon-postgres
```

Category: **Database** · Version: `0.1.6` · Package: `@pikku/addon-postgres`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `count` | Counts rows in a PostgreSQL table with optional filtering | `postgres` |
| `deleteRows` | Deletes rows from a PostgreSQL table | `postgres` |
| `describeTable` | Gets the schema/structure of a PostgreSQL table | `postgres` |
| `dropTable` | Drops a PostgreSQL table | `postgres` |
| `executeQuery` | Executes a raw SQL query on the PostgreSQL database | `postgres` |
| `insert` | Inserts a row into a PostgreSQL table | `postgres` |
| `insertMany` | Inserts multiple rows into a PostgreSQL table | `postgres` |
| `listTables` | Lists all tables in the PostgreSQL database | `postgres` |
| `onChanges` | Triggers when rows are inserted, updated, or deleted in a PostgreSQL table | `postgres` |
| `select` | Selects rows from a PostgreSQL table with advanced filtering | `postgres` |
| `transaction` | Executes multiple queries in a transaction with automatic rollback on error | `postgres` |
| `truncate` | Truncates (empties) a PostgreSQL table | `postgres` |
| `update` | Updates rows in a PostgreSQL table | `postgres` |
| `upsert` | Inserts a row or updates it if it already exists (ON CONFLICT) | `postgres` |

## Secrets

- `POSTGRES_CREDENTIALS` — PostgreSQL authentication secrets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'postgres',
  package: '@pikku/addon-postgres',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
