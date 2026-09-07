---
format: md
title: Phantombuster
description: "Consume the Phantombuster API to launch and manage agents"
sidebar_label: Phantombuster
---

# Phantombuster

Consume the Phantombuster API to launch and manage agents

```bash
npm install @pikku/addon-phantombuster
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-phantombuster`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `agentDelete` | Delete an agent by ID | `phantombuster` |
| `agentGet` | Get an agent by ID | `phantombuster` |
| `agentGetAll` | Get many agents of the current user's organization | `phantombuster` |
| `agentGetOutput` | Get the output of the most recent container of an agent | `phantombuster` |
| `agentLaunch` | Add an agent to the launch queue | `phantombuster` |
| `agentLaunchSync` | Launch an agent and stream results | `phantombuster` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'phantombuster',
  package: '@pikku/addon-phantombuster',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
