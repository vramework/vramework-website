---
format: md
title: Taiga
description: "Consume the Taiga API"
sidebar_label: Taiga
---

# Taiga

Consume the Taiga API

```bash
npm install @pikku/addon-taiga
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-taiga`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `epicCreate` | EpicCreate | `taiga` |
| `epicDelete` | EpicDelete | `taiga` |
| `epicGet` | EpicGet | `taiga` |
| `epicGetAll` | EpicGetAll | `taiga` |
| `epicUpdate` | EpicUpdate | `taiga` |
| `issueCreate` | IssueCreate | `taiga` |
| `issueDelete` | IssueDelete | `taiga` |
| `issueGet` | IssueGet | `taiga` |
| `issueGetAll` | IssueGetAll | `taiga` |
| `issueUpdate` | IssueUpdate | `taiga` |
| `taskCreate` | TaskCreate | `taiga` |
| `taskDelete` | TaskDelete | `taiga` |
| `taskGet` | TaskGet | `taiga` |
| `taskGetAll` | TaskGetAll | `taiga` |
| `taskUpdate` | TaskUpdate | `taiga` |
| `userStoryCreate` | UserStoryCreate | `taiga` |
| `userStoryDelete` | UserStoryDelete | `taiga` |
| `userStoryGet` | UserStoryGet | `taiga` |
| `userStoryGetAll` | UserStoryGetAll | `taiga` |
| `userStoryUpdate` | UserStoryUpdate | `taiga` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'taiga',
  package: '@pikku/addon-taiga',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
