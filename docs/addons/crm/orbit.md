---
format: md
title: Orbit
description: "Consume the Orbit API"
sidebar_label: Orbit
---

# Orbit

Consume the Orbit API

```bash
npm install @pikku/addon-orbit
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-orbit`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `activityCreate` | Create an activity for a member | `orbit` |
| `activityGetAll` | Get many activities | `orbit` |
| `memberDelete` | Delete a member | `orbit` |
| `memberGet` | Get a member | `orbit` |
| `memberGetAll` | Get many members in a workspace | `orbit` |
| `memberLookup` | Lookup a member by identity | `orbit` |
| `memberUpdate` | Update a member | `orbit` |
| `memberUpsert` | Create or update a member | `orbit` |
| `noteCreate` | Create a note | `orbit` |
| `noteGetAll` | Get many notes for a member | `orbit` |
| `noteUpdate` | Update a note | `orbit` |
| `postCreate` | Create a post | `orbit` |
| `postDelete` | Delete a post | `orbit` |
| `postGetAll` | Get many posts | `orbit` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'orbit',
  package: '@pikku/addon-orbit',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
