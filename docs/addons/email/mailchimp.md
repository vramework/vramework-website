---
format: md
title: Mailchimp
description: "Consume the Mailchimp Marketing API"
sidebar_label: Mailchimp
---

# Mailchimp

Consume the Mailchimp Marketing API

```bash
npm install @pikku/addon-mailchimp
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-mailchimp`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `campaignDelete` | Delete a campaign | `mailchimp` |
| `campaignGet` | Get a campaign | `mailchimp` |
| `campaignGetAll` | Get many campaigns | `mailchimp` |
| `campaignReplicate` | Replicate a campaign | `mailchimp` |
| `campaignResend` | Resend a campaign to non-openers | `mailchimp` |
| `campaignSend` | Send a campaign | `mailchimp` |
| `listGroupGetAll` | Get many groups in an interest category | `mailchimp` |
| `memberCreate` | Create a new member on a list | `mailchimp` |
| `memberDelete` | Delete a member on a list | `mailchimp` |
| `memberGet` | Get a member on a list | `mailchimp` |
| `memberGetAll` | Get many members on a list | `mailchimp` |
| `memberTagCreate` | Add tags to a list member | `mailchimp` |
| `memberTagDelete` | Remove tags from a list member | `mailchimp` |
| `memberUpdate` | Update a member on a list | `mailchimp` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mailchimp',
  package: '@pikku/addon-mailchimp',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
