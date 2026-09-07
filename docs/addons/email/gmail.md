---
format: md
title: Gmail
description: "Gmail API for messages, drafts, labels, and threads."
sidebar_label: Gmail
---

# Gmail

Gmail API for messages, drafts, labels, and threads.

```bash
npm install @pikku/addon-gmail
```

Category: **Email** · Version: `0.1.7` · Package: `@pikku/addon-gmail`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `draftCreate` | Creates a new email draft | `gmail` |
| `draftDelete` | Deletes a draft | `gmail` |
| `draftGet` | Gets a specific draft by ID | `gmail` |
| `draftList` | Lists drafts in the mailbox | `gmail` |
| `labelCreate` | Creates a new label | `gmail` |
| `labelDelete` | Deletes a label | `gmail` |
| `labelGet` | Gets a specific label by ID | `gmail` |
| `labelList` | Lists all labels in the mailbox | `gmail` |
| `messageAddLabel` | Adds labels to a message | `gmail` |
| `messageDelete` | Deletes or trashes a message | `gmail` |
| `messageGet` | Gets a specific message by ID | `gmail` |
| `messageGetAttachment` | Gets an attachment from a message | `gmail` |
| `messageList` | Lists messages in the mailbox | `gmail` |
| `messageMarkRead` | Marks a message as read | `gmail` |
| `messageMarkUnread` | Marks a message as unread | `gmail` |
| `messageRemoveLabel` | Removes labels from a message | `gmail` |
| `messageReply` | Sends a reply to an existing message | `gmail` |
| `messageSend` | Sends an email through Gmail | `gmail` |
| `onMessage` | Triggers when a new message is received in Gmail | `gmail` |
| `threadAddLabel` | Adds labels to all messages in a thread | `gmail` |
| `threadDelete` | Immediately and permanently deletes a thread | `gmail` |
| `threadGet` | Gets a specific thread by ID with all messages | `gmail` |
| `threadList` | Lists threads in the mailbox | `gmail` |
| `threadRemoveLabel` | Removes labels from all messages in a thread | `gmail` |
| `threadReply` | Sends a reply to the last message in a thread | `gmail` |
| `threadTrash` | Moves a thread to the trash | `gmail` |
| `threadUntrash` | Removes a thread from the trash | `gmail` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'gmail',
  package: '@pikku/addon-gmail',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
