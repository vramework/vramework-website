---
format: md
title: Strapi
description: "Consume the Strapi headless CMS API"
sidebar_label: Strapi
---

# Strapi

Consume the Strapi headless CMS API

```bash
npm install @pikku/addon-strapi
```

Category: **Documents** · Version: `0.0.7` · Package: `@pikku/addon-strapi`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `entryCreate` | Create an entry | `strapi` |
| `entryDelete` | Delete an entry | `strapi` |
| `entryGet` | Get an entry | `strapi` |
| `entryGetAll` | Get many entries | `strapi` |
| `entryUpdate` | Update an entry | `strapi` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'strapi',
  package: '@pikku/addon-strapi',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
