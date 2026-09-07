---
format: md
title: Clickup
description: "Consume the ClickUp API"
sidebar_label: Clickup
---

# Clickup

Consume the ClickUp API

```bash
npm install @pikku/addon-clickup
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-clickup`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `checklistCreate` | Checklist create | `clickup` |
| `checklistDelete` | Checklist delete | `clickup` |
| `checklistUpdate` | Checklist update | `clickup` |
| `commentCreate` | Comment create | `clickup` |
| `commentDelete` | Comment delete | `clickup` |
| `commentGetAll` | Comment get all | `clickup` |
| `commentUpdate` | Comment update | `clickup` |
| `folderCreate` | Folder create | `clickup` |
| `folderDelete` | Folder delete | `clickup` |
| `folderGet` | Folder get | `clickup` |
| `folderGetAll` | Folder get all | `clickup` |
| `folderUpdate` | Folder update | `clickup` |
| `goalCreate` | Goal create | `clickup` |
| `goalDelete` | Goal delete | `clickup` |
| `goalGet` | Goal get | `clickup` |
| `goalGetAll` | Goal get all | `clickup` |
| `goalUpdate` | Goal update | `clickup` |
| `listCreate` | List create | `clickup` |
| `listCustomFields` | List custom fields | `clickup` |
| `listDelete` | List delete | `clickup` |
| `listGet` | List get | `clickup` |
| `listGetAll` | List get all | `clickup` |
| `listMember` | List member | `clickup` |
| `listUpdate` | List update | `clickup` |
| `spaceTagCreate` | Space tag create | `clickup` |
| `spaceTagDelete` | Space tag delete | `clickup` |
| `spaceTagGetAll` | Space tag get all | `clickup` |
| `spaceTagUpdate` | Space tag update | `clickup` |
| `taskCreate` | Task create | `clickup` |
| `taskDelete` | Task delete | `clickup` |
| `taskGet` | Task get | `clickup` |
| `taskGetAll` | Task get all | `clickup` |
| `taskMember` | Task member | `clickup` |
| `taskSetCustomField` | Task set custom field | `clickup` |
| `taskTagAdd` | Task tag add | `clickup` |
| `taskTagRemove` | Task tag remove | `clickup` |
| `taskUpdate` | Task update | `clickup` |
| `timeEntryCreate` | Time entry create | `clickup` |
| `timeEntryDelete` | Time entry delete | `clickup` |
| `timeEntryGet` | Time entry get | `clickup` |
| `timeEntryGetAll` | Time entry get all | `clickup` |
| `timeEntryStart` | Time entry start | `clickup` |
| `timeEntryStop` | Time entry stop | `clickup` |
| `timeEntryUpdate` | Time entry update | `clickup` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'clickup',
  package: '@pikku/addon-clickup',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
