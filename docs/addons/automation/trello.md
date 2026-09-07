---
format: md
title: Trello
description: "Create, change and delete Trello boards, cards, lists and more"
sidebar_label: Trello
---

# Trello

Create, change and delete Trello boards, cards, lists and more

```bash
npm install @pikku/addon-trello
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-trello`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `attachmentCreate` | Create an attachment | `trello` |
| `attachmentDelete` | Delete an attachment | `trello` |
| `attachmentGet` | Get an attachment | `trello` |
| `attachmentGetAll` | Get many attachments | `trello` |
| `boardCreate` | Create a board | `trello` |
| `boardDelete` | Delete a board | `trello` |
| `boardGet` | Get a board | `trello` |
| `boardMemberAdd` | Add a board member | `trello` |
| `boardMemberGetAll` | Get many board members | `trello` |
| `boardMemberInvite` | Invite a board member | `trello` |
| `boardMemberRemove` | Remove a board member | `trello` |
| `boardUpdate` | Update a board | `trello` |
| `cardCommentCreate` | Create a card comment | `trello` |
| `cardCommentDelete` | Delete a card comment | `trello` |
| `cardCommentUpdate` | Update a card comment | `trello` |
| `cardCreate` | Create a card | `trello` |
| `cardDelete` | Delete a card | `trello` |
| `cardGet` | Get a card | `trello` |
| `cardUpdate` | Update a card | `trello` |
| `checklistCompletedCheckItems` | Get completed checklist items | `trello` |
| `checklistCreate` | Create a checklist | `trello` |
| `checklistCreateCheckItem` | Create checklist item | `trello` |
| `checklistDelete` | Delete a checklist | `trello` |
| `checklistDeleteCheckItem` | Delete a checklist item | `trello` |
| `checklistGet` | Get a checklist | `trello` |
| `checklistGetAll` | Get many checklists | `trello` |
| `checklistGetCheckItem` | Get checklist items | `trello` |
| `checklistUpdateCheckItem` | Update a checklist item | `trello` |
| `labelAddLabel` | Add a label to a card | `trello` |
| `labelCreate` | Create a label | `trello` |
| `labelDelete` | Delete a label | `trello` |
| `labelGet` | Get a label | `trello` |
| `labelGetAll` | Get many labels | `trello` |
| `labelRemoveLabel` | Remove a label from a card | `trello` |
| `labelUpdate` | Update a label | `trello` |
| `listArchive` | Archive or unarchive a list | `trello` |
| `listCreate` | Create a list | `trello` |
| `listGet` | Get a list | `trello` |
| `listGetAll` | Get many lists | `trello` |
| `listGetCards` | Get all cards in a list | `trello` |
| `listUpdate` | Update a list | `trello` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'trello',
  package: '@pikku/addon-trello',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
