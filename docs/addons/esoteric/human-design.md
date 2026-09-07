---
format: md
title: Human Design
description: "Human Design bodygraph calculations."
sidebar_label: Human Design
---

# Human Design

Human Design bodygraph calculations.

```bash
npm install @pikku/addon-human-design
```

Category: **Esoteric** · Version: `0.1.7` · Package: `@pikku/addon-human-design`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `getBodygraph` | Generate a natal bodygraph from a birth date using Human Design | — |
| `getTransitChart` | Generate a transit chart for a given date using Human Design | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'human-design',
  package: '@pikku/addon-human-design',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
