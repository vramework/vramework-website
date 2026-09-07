---
format: md
title: Timescale DB
description: "timescaledb addon"
sidebar_label: Timescale DB
---

# Timescale DB

timescaledb addon

```bash
npm install @pikku/addon-timescale-db
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-timescale-db`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `executeQuery` | Execute query | `timescaleDb` |
| `insert` | Insert | `timescaleDb` |
| `update` | Update | `timescaleDb` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'timescale-db',
  package: '@pikku/addon-timescale-db',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
