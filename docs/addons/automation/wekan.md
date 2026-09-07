---
format: md
title: Wekan
description: "Consume the Wekan kanban API"
sidebar_label: Wekan
---

# Wekan

Consume the Wekan kanban API

```bash
npm install @pikku/addon-wekan
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-wekan`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `boardCreate` | Create a board | `wekan` |
| `boardDelete` | Delete a board | `wekan` |
| `boardGet` | Get a board | `wekan` |
| `boardGetAll` | Get all boards for a user | `wekan` |
| `cardCommentCreate` | Create a comment on a card | `wekan` |
| `cardCommentDelete` | Delete a comment | `wekan` |
| `cardCommentGet` | Get a comment | `wekan` |
| `cardCommentGetAll` | Get all comments on a card | `wekan` |
| `cardCreate` | Create a card | `wekan` |
| `cardDelete` | Delete a card | `wekan` |
| `cardGet` | Get a card | `wekan` |
| `cardGetAll` | Get all cards in a list | `wekan` |
| `cardUpdate` | Update a card | `wekan` |
| `checklistCreate` | Create a checklist | `wekan` |
| `checklistDelete` | Delete a checklist | `wekan` |
| `checklistGet` | Get a checklist | `wekan` |
| `checklistGetAll` | Get all checklists on a card | `wekan` |
| `checklistItemDelete` | Delete a checklist item | `wekan` |
| `checklistItemGet` | Get a checklist item | `wekan` |
| `checklistItemUpdate` | Update a checklist item | `wekan` |
| `listCreate` | Create a list | `wekan` |
| `listDelete` | Delete a list | `wekan` |
| `listGet` | Get a list | `wekan` |
| `listGetAll` | Get all lists on a board | `wekan` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'wekan',
  package: '@pikku/addon-wekan',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
