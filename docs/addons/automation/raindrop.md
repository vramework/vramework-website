---
format: md
title: Raindrop
description: "Consume the Raindrop bookmarks API"
sidebar_label: Raindrop
---

# Raindrop

Consume the Raindrop bookmarks API

```bash
npm install @pikku/addon-raindrop
```

Category: **Automation** · Version: `0.0.8` · Package: `@pikku/addon-raindrop`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `bookmarkCreate` | Create a bookmark | `raindrop` |
| `bookmarkDelete` | Delete a bookmark | `raindrop` |
| `bookmarkGet` | Get a bookmark | `raindrop` |
| `bookmarkGetAll` | Get all bookmarks in a collection | `raindrop` |
| `bookmarkUpdate` | Update a bookmark | `raindrop` |
| `collectionCreate` | Create a collection | `raindrop` |
| `collectionDelete` | Delete a collection | `raindrop` |
| `collectionGet` | Get a collection | `raindrop` |
| `collectionGetAll` | Get all root collections | `raindrop` |
| `collectionUpdate` | Update a collection | `raindrop` |
| `tagDelete` | Delete tags | `raindrop` |
| `tagGetAll` | Get all tags | `raindrop` |
| `userGet` | Get the authenticated user | `raindrop` |

## Secrets

- `RAINDROP_OAUTH_APP` — OAuth2 app credentials for Raindrop

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'raindrop',
  package: '@pikku/addon-raindrop',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
