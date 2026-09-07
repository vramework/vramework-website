---
format: md
title: Microsoft To Do
description: "Consume the Microsoft To Do API (tasks, lists, linked resources)."
sidebar_label: Microsoft To Do
---

# Microsoft To Do

Consume the Microsoft To Do API (tasks, lists, linked resources).

```bash
npm install @pikku/addon-microsoft-to-do
```

Category: **Automation** · Version: `0.0.8` · Package: `@pikku/addon-microsoft-to-do`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `linkedResourceCreate` | Create a linked resource | `microsoftToDo` |
| `linkedResourceDelete` | Delete a linked resource | `microsoftToDo` |
| `linkedResourceGet` | Get a linked resource | `microsoftToDo` |
| `linkedResourceGetAll` | List linked resources | `microsoftToDo` |
| `linkedResourceUpdate` | Update a linked resource | `microsoftToDo` |
| `listCreate` | Create a task list | `microsoftToDo` |
| `listDelete` | Delete a task list | `microsoftToDo` |
| `listGet` | Get a task list | `microsoftToDo` |
| `listGetAll` | List task lists | `microsoftToDo` |
| `listUpdate` | Update a task list | `microsoftToDo` |
| `taskCreate` | Create a task | `microsoftToDo` |
| `taskDelete` | Delete a task | `microsoftToDo` |
| `taskGet` | Get a task | `microsoftToDo` |
| `taskGetAll` | List tasks | `microsoftToDo` |
| `taskUpdate` | Update a task | `microsoftToDo` |

## Secrets

- `MICROSOFT_TO_DO_OAUTH_APP` — OAuth2 app credentials for Microsoft To Do

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'microsoft-to-do',
  package: '@pikku/addon-microsoft-to-do',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
