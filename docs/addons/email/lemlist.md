---
format: md
title: Lemlist
description: "Consume the Lemlist cold email API"
sidebar_label: Lemlist
---

# Lemlist

Consume the Lemlist cold email API

```bash
npm install @pikku/addon-lemlist
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-lemlist`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `activityGetAll` | Get many activities | `lemlist` |
| `campaignGetAll` | Get many campaigns | `lemlist` |
| `campaignGetStats` | Get campaign stats | `lemlist` |
| `enrichGet` | Fetch a previously completed enrichment | `lemlist` |
| `enrichLead` | Enrich a lead using an email or LinkedIn URL | `lemlist` |
| `enrichPerson` | Enrich a person using an email or LinkedIn URL | `lemlist` |
| `leadCreate` | Add a lead to a campaign | `lemlist` |
| `leadDelete` | Delete or unsubscribe a lead from a campaign | `lemlist` |
| `leadGet` | Get a specific lead by email | `lemlist` |
| `teamGet` | Get a team | `lemlist` |
| `teamGetCredits` | Get team credits | `lemlist` |
| `unsubscribeAdd` | Add an email to the unsubscribe list | `lemlist` |
| `unsubscribeDelete` | Delete an email from the unsubscribe list | `lemlist` |
| `unsubscribeGetAll` | Get many unsubscribed emails | `lemlist` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'lemlist',
  package: '@pikku/addon-lemlist',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
