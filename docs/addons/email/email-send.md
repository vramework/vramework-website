---
format: md
title: Email Send
description: "Send emails via SMTP."
sidebar_label: Email Send
---

# Email Send

Send emails via SMTP.

```bash
npm install @pikku/addon-email-send
```

Category: **Email** · Version: `0.1.8` · Package: `@pikku/addon-email-send`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `emailSend` | Send an email via SMTP | `emailTransport` |
| `emailSendHtml` | Send an HTML email with optional attachments via SMTP | `emailTransport`, `content` |

## Secrets

- `EMAIL_SEND_CREDENTIALS` — SMTP server connection credentials

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'email-send',
  package: '@pikku/addon-email-send',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
