---
format: md
title: Wikipedia
description: "Search Wikipedia and fetch article summaries and full plain-text content via the"
sidebar_label: Wikipedia
---

# Wikipedia

Search Wikipedia and fetch article summaries and full plain-text content via the

```bash
npm install @pikku/addon-wikipedia
```

Category: **Data** · Version: `0.2.4` · Package: `@pikku/addon-wikipedia`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `getPage` | Fetch the full plain-text content of a Wikipedia article by its exact title | — |
| `search` | Search Wikipedia and return matching page titles with plain-text snippets | — |
| `summary` | Fetch the plain-text summary of a Wikipedia article by its exact title | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'wikipedia',
  package: '@pikku/addon-wikipedia',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
