---
format: md
title: Math
description: "Evaluate mathematical expressions, take symbolic derivatives, and simplify"
sidebar_label: Math
---

# Math

Evaluate mathematical expressions, take symbolic derivatives, and simplify

```bash
npm install @pikku/addon-math
```

Category: **Data** · Version: `0.2.4` · Package: `@pikku/addon-math`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `derivative` | Take the symbolic derivative of an expression with respect to a variable | — |
| `evaluate` | Evaluate a mathematical expression — arithmetic, trigonometry, units, and functions | — |
| `simplify` | Algebraically simplify a mathematical expression | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'math',
  package: '@pikku/addon-math',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
