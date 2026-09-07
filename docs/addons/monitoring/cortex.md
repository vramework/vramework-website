---
format: md
title: Cortex
description: "Run Cortex analyzers and responders on observables and entities"
sidebar_label: Cortex
---

# Cortex

Run Cortex analyzers and responders on observables and entities

```bash
npm install @pikku/addon-cortex
```

Category: **Monitoring** · Version: `0.0.7` · Package: `@pikku/addon-cortex`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `analyzerExecute` | Run an analyzer on an observable | `cortex` |
| `jobGet` | Get details of a job | `cortex` |
| `jobReport` | Get details and report of a job | `cortex` |
| `responderExecute` | Run a responder on an entity | `cortex` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'cortex',
  package: '@pikku/addon-cortex',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
