---
format: md
title: Grist
description: "Grist integration for Pikku"
sidebar_label: Grist
---

# Grist

Grist integration for Pikku

```bash
npm install @pikku/addon-grist
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-grist`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `_delete` | Delete rows from a table | `grist` |
| `create` | Create rows in a table | `grist` |
| `getAll` | Get many rows from a table | `grist` |
| `update` | Update rows in a table | `grist` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'grist',
  package: '@pikku/addon-grist',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
