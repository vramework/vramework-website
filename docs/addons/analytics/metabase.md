---
format: md
title: Metabase
description: "Metabase dashboard and question queries."
sidebar_label: Metabase
---

# Metabase

Metabase dashboard and question queries.

```bash
npm install @pikku/addon-metabase
```

Category: **Analytics** · Version: `0.1.6` · Package: `@pikku/addon-metabase`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `dashboardsGet` | Get details of a specific dashboard | `metabase` |
| `dashboardsList` | List all dashboards in Metabase | `metabase` |
| `questionsGet` | Get details of a specific question (card) | `metabase` |
| `questionsList` | List all saved questions (cards) in Metabase | `metabase` |

## Secrets

- `METABASE_CREDENTIALS` — Business intelligence

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'metabase',
  package: '@pikku/addon-metabase',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
