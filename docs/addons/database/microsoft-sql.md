---
format: md
title: Microsoft Sql
description: "microsoftsql addon"
sidebar_label: Microsoft Sql
---

# Microsoft Sql

microsoftsql addon

```bash
npm install @pikku/addon-microsoft-sql
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-microsoft-sql`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `deleteRows` | Delete rows | `microsoftSql` |
| `executeQuery` | Execute query | `microsoftSql` |
| `insert` | Insert | `microsoftSql` |
| `update` | Update | `microsoftSql` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'microsoft-sql',
  package: '@pikku/addon-microsoft-sql',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
