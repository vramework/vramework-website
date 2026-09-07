---
format: md
title: Sendgrid
description: "SendGrid email delivery and contact management."
sidebar_label: Sendgrid
---

# Sendgrid

SendGrid email delivery and contact management.

```bash
npm install @pikku/addon-sendgrid
```

Category: **Email** · Version: `0.1.7` · Package: `@pikku/addon-sendgrid`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactDelete` | Deletes contacts by ID | `sendgrid` |
| `contactGet` | Retrieves a contact by ID | `sendgrid` |
| `contactList` | Retrieves contacts, optionally filtered by query | `sendgrid` |
| `contactUpsert` | Adds or updates contacts in SendGrid | `sendgrid` |
| `listCreate` | Creates a new marketing list | `sendgrid` |
| `listDelete` | Deletes a marketing list | `sendgrid` |
| `listGet` | Retrieves a marketing list by ID | `sendgrid` |
| `listList` | Retrieves all marketing lists | `sendgrid` |
| `listUpdate` | Updates a marketing list | `sendgrid` |
| `mailSend` | Sends an email through SendGrid | `sendgrid` |

## Secrets

- `SENDGRID_API_KEY` — SendGrid API key

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'sendgrid',
  package: '@pikku/addon-sendgrid',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
