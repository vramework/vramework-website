---
format: md
title: Rss Feed
description: "Parse RSS and Atom feeds."
sidebar_label: Rss Feed
---

# Rss Feed

Parse RSS and Atom feeds.

```bash
npm install @pikku/addon-rss-feed
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-rss-feed`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `rssFeedRead` | Read and parse an RSS or Atom feed | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'rss-feed',
  package: '@pikku/addon-rss-feed',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
