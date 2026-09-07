---
format: md
title: Google Big Query
description: "Google BigQuery integration for Pikku"
sidebar_label: Google Big Query
---

# Google Big Query

Google BigQuery integration for Pikku

```bash
npm install @pikku/addon-google-big-query
```

Category: **Database** · Version: `0.0.8` · Package: `@pikku/addon-google-big-query`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `executeQuery` | Execute a SQL query | `googleBigQuery` |
| `insert` | Insert rows in a table | `googleBigQuery` |

## Secrets

- `GOOGLE_BIG_QUERY_OAUTH_APP` — OAuth2 app credentials for Google BigQuery

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-big-query',
  package: '@pikku/addon-google-big-query',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
