---
format: md
title: Webflow
description: "Consume the Webflow CMS API"
sidebar_label: Webflow
---

# Webflow

Consume the Webflow CMS API

```bash
npm install @pikku/addon-webflow
```

Category: **Cloud** · Version: `0.0.7` · Package: `@pikku/addon-webflow`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `itemCreate` | Create a collection item | `webflow` |
| `itemDelete` | Delete a collection item | `webflow` |
| `itemGet` | Get a collection item | `webflow` |
| `itemGetAll` | List collection items | `webflow` |
| `itemUpdate` | Update a collection item | `webflow` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'webflow',
  package: '@pikku/addon-webflow',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
