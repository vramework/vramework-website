---
format: md
title: Whatsapp
description: "WhatsApp messaging via the official WhatsApp Business Cloud API."
sidebar_label: Whatsapp
---

# Whatsapp

WhatsApp messaging via the official [WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api). Requires a Meta Business account.

```bash
npm install @pikku/addon-whatsapp
```

Category: **Communication** · Version: `0.1.8` · Package: `@pikku/addon-whatsapp`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `messagesSend` | Send a text message via WhatsApp | `whatsapp` |
| `messagesSendTemplate` | Send a template message via WhatsApp | `whatsapp` |

## Secrets

- `WHATSAPP_CREDENTIALS` — WhatsApp Business messaging platform

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'whatsapp',
  package: '@pikku/addon-whatsapp',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
