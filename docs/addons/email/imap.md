---
format: md
title: Imap
description: "Read and manage emails via IMAP."
sidebar_label: Imap
---

# Imap

Read and manage emails via IMAP.

```bash
npm install @pikku/addon-imap
```

Category: **Email** · Version: `0.1.7` · Package: `@pikku/addon-imap`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `deleteEmail` | Delete one or more emails from a mailbox | `imap` |
| `getEmail` | Get a single email by its UID with full content and attachments info | `imap` |
| `listMailboxes` | List all mailboxes (folders) in the email account | `imap` |
| `markAsRead` | Mark one or more emails as read | `imap` |
| `markAsUnread` | Mark one or more emails as unread | `imap` |
| `moveEmail` | Move one or more emails to another mailbox | `imap` |
| `searchEmails` | Search for emails in a mailbox | `imap` |

## Secrets

- `IMAP_CREDENTIALS` — Connect to email servers via IMAP protocol

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'imap',
  package: '@pikku/addon-imap',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
