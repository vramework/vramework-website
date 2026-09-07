---
format: md
title: Google Tasks
description: "Consume the Google Tasks API"
sidebar_label: Google Tasks
---

# Google Tasks

Consume the Google Tasks API

```bash
npm install @pikku/addon-google-tasks
```

Category: **Automation** · Version: `0.0.8` · Package: `@pikku/addon-google-tasks`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `taskCreate` | Create a task in a task list | `googleTasks` |
| `taskDelete` | Delete a task | `googleTasks` |
| `taskGet` | Get a task by ID | `googleTasks` |
| `taskGetAll` | List all tasks in a task list | `googleTasks` |
| `taskUpdate` | Update a task | `googleTasks` |

## Secrets

- `GOOGLE_TASKS_OAUTH_APP` — OAuth2 app credentials for Google Tasks

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-tasks',
  package: '@pikku/addon-google-tasks',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
