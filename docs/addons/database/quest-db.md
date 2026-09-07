---
format: md
title: Quest DB
description: "questdb addon"
sidebar_label: Quest DB
---

# Quest DB

questdb addon

```bash
npm install @pikku/addon-quest-db
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-quest-db`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `executeQuery` | Execute query | `questDb` |
| `insert` | Insert | `questDb` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'quest-db',
  package: '@pikku/addon-quest-db',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
