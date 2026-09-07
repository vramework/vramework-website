---
format: md
title: Facebook Graph API
description: "Interact with Facebook using the Graph API"
sidebar_label: Facebook Graph API
---

# Facebook Graph API

Interact with Facebook using the Graph API

```bash
npm install @pikku/addon-facebook-graph-api
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-facebook-graph-api`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `graphDelete` | Delete a Graph API node or edge | `facebookGraphApi` |
| `graphGet` | Read a Graph API node or edge | `facebookGraphApi` |
| `graphPost` | Create or publish to a Graph API node or edge | `facebookGraphApi` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'facebook-graph-api',
  package: '@pikku/addon-facebook-graph-api',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
