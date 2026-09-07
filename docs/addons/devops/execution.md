---
format: md
title: Execution
description: "Run shell commands and spawn processes from a Pikku workflow, capturing"
sidebar_label: Execution
---

# Execution

Run shell commands and spawn processes from a Pikku workflow, capturing

```bash
npm install @pikku/addon-execution
```

Category: **DevOps** · Version: `0.2.4` · Package: `@pikku/addon-execution`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `execute` | Run a shell command, capturing stdout, stderr, and the exit code | — |
| `spawnCommand` | Spawn a program with an argument array (no shell), capturing stdout, stderr, and the exit code | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'execution',
  package: '@pikku/addon-execution',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
