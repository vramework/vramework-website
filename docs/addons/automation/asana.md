---
format: md
title: Asana
description: "Consume the Asana REST API"
sidebar_label: Asana
---

# Asana

Consume the Asana REST API

```bash
npm install @pikku/addon-asana
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-asana`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `projectCreate` | Project create | `asana` |
| `projectDelete` | Project delete | `asana` |
| `projectGet` | Project get | `asana` |
| `projectGetAll` | Project get all | `asana` |
| `projectUpdate` | Project update | `asana` |
| `subtaskCreate` | Subtask create | `asana` |
| `subtaskGetAll` | Subtask get all | `asana` |
| `taskCommentAdd` | Task comment add | `asana` |
| `taskCommentRemove` | Task comment remove | `asana` |
| `taskCreate` | Task create | `asana` |
| `taskDelete` | Task delete | `asana` |
| `taskGet` | Task get | `asana` |
| `taskGetAll` | Task get all | `asana` |
| `taskMove` | Task move | `asana` |
| `taskProjectAdd` | Task project add | `asana` |
| `taskProjectRemove` | Task project remove | `asana` |
| `taskSearch` | Task search | `asana` |
| `taskTagAdd` | Task tag add | `asana` |
| `taskTagRemove` | Task tag remove | `asana` |
| `taskUpdate` | Task update | `asana` |
| `userGet` | User get | `asana` |
| `userGetAll` | User get all | `asana` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'asana',
  package: '@pikku/addon-asana',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
