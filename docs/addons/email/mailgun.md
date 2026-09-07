---
format: md
title: Mailgun
description: "Send emails via Mailgun."
sidebar_label: Mailgun
---

# Mailgun

Send emails via Mailgun.

```bash
npm install @pikku/addon-mailgun
```

Category: **Email** · Version: `0.1.7` · Package: `@pikku/addon-mailgun`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `messagesSend` | Send an email via Mailgun | `mailgun` |

## Secrets

- `MAILGUN_CREDENTIALS` — Email delivery service

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mailgun',
  package: '@pikku/addon-mailgun',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
