---
format: md
title: Humantic AI
description: "Consume the Humantic AI personality API"
sidebar_label: Humantic AI
---

# Humantic AI

Consume the Humantic AI personality API

```bash
npm install @pikku/addon-humantic-ai
```

Category: **AI** · Version: `0.0.7` · Package: `@pikku/addon-humantic-ai`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `profileCreate` | Create a profile | `humanticAi` |
| `profileGet` | Retrieve a profile | `humanticAi` |
| `profileUpdate` | Update a profile | `humanticAi` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'humantic-ai',
  package: '@pikku/addon-humantic-ai',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
