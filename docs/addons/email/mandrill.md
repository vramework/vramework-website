---
format: md
title: Mandrill
description: "Send transactional emails via Mandrill (Mailchimp Transactional)."
sidebar_label: Mandrill
---

# Mandrill

Send transactional emails via Mandrill (Mailchimp Transactional).

```bash
npm install @pikku/addon-mandrill
```

Category: **Email** · Version: `0.1.7` · Package: `@pikku/addon-mandrill`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `mandrillMessageSend` | Send an email via Mandrill | `mandrill` |
| `mandrillMessageSendTemplate` | Send an email using a Mandrill template | `mandrill` |

## Secrets

- `MANDRILL_API_KEY` — Mandrill email API key

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mandrill',
  package: '@pikku/addon-mandrill',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
