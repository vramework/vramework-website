---
format: md
title: Supabase
description: "Supabase database operations."
sidebar_label: Supabase
---

# Supabase

Supabase database operations.

```bash
npm install @pikku/addon-supabase
```

Category: **Database** · Version: `0.2.3` · Package: `@pikku/addon-supabase`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `deleteRows` | Deletes rows from a Supabase table | `supabase` |
| `ingest` | Embed text chunks (via the aiEmbedding service) and insert them into a Supabase pgvector table | `supabase`, `aiEmbedding` |
| `insertRows` | Inserts rows into a Supabase table | `supabase` |
| `query` | Embed a text query (via the aiEmbedding service) and search a Supabase pgvector store in one call | `supabase`, `aiEmbedding` |
| `rpc` | Calls a PostgreSQL function via Supabase RPC | `supabase` |
| `search` | Search a Supabase pgvector store by a pre-computed embedding vector (via a match function) | `supabase` |
| `selectRows` | Selects rows from a Supabase table | `supabase` |
| `updateRows` | Updates rows in a Supabase table | `supabase` |
| `upsertRows` | Inserts or updates rows in a Supabase table | `supabase` |

## Secrets

- `SUPABASE_CREDENTIALS` — Supabase project URL and API key

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'supabase',
  package: '@pikku/addon-supabase',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
