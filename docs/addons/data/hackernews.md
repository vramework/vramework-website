---
format: md
title: Hackernews
description: "Hacker News API for stories, items, and users."
sidebar_label: Hackernews
---

# Hackernews

Hacker News API for stories, items, and users.

```bash
npm install @pikku/addon-hackernews
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-hackernews`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `hnGetItem` | Get a Hacker News item (story, comment, job, poll) | — |
| `hnGetStories` | Get Hacker News story IDs (top, new, best, ask, show, job) | — |
| `hnGetUser` | Get a Hacker News user profile | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'hackernews',
  package: '@pikku/addon-hackernews',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
