---
format: md
title: Bitwarden
description: "Consume the Bitwarden organization management API"
sidebar_label: Bitwarden
---

# Bitwarden

Consume the Bitwarden organization management API

```bash
npm install @pikku/addon-bitwarden
```

Category: **Infrastructure** · Version: `0.0.7` · Package: `@pikku/addon-bitwarden`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `collectionDelete` | Delete a collection | `bitwarden` |
| `collectionGet` | Get a collection | `bitwarden` |
| `collectionGetAll` | List collections | `bitwarden` |
| `collectionUpdate` | Update a collection | `bitwarden` |
| `eventGetAll` | List events | `bitwarden` |
| `groupCreate` | Create a group | `bitwarden` |
| `groupDelete` | Delete a group | `bitwarden` |
| `groupGet` | Get a group | `bitwarden` |
| `groupGetAll` | List groups | `bitwarden` |
| `groupGetMembers` | Get group member ids | `bitwarden` |
| `groupUpdate` | Update a group | `bitwarden` |
| `groupUpdateMembers` | Update group member ids | `bitwarden` |
| `memberCreate` | Create a member | `bitwarden` |
| `memberDelete` | Delete a member | `bitwarden` |
| `memberGet` | Get a member | `bitwarden` |
| `memberGetAll` | List members | `bitwarden` |
| `memberGetGroups` | Get member group ids | `bitwarden` |
| `memberUpdate` | Update a member | `bitwarden` |
| `memberUpdateGroups` | Update member group ids | `bitwarden` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'bitwarden',
  package: '@pikku/addon-bitwarden',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
