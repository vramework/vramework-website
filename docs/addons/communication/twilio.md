---
format: md
title: Twilio
description: "Twilio SMS and voice calls."
sidebar_label: Twilio
---

# Twilio

Twilio SMS and voice calls.

```bash
npm install @pikku/addon-twilio
```

Category: **Communication** · Version: `0.1.6` · Package: `@pikku/addon-twilio`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `callMake` | Make a voice call with a spoken message or TwiML | `twilio` |
| `smsSend` | Send an SMS, MMS, or WhatsApp message | `twilio` |

## Secrets

- `TWILIO_CREDENTIALS` — Twilio Account SID and Auth Token

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'twilio',
  package: '@pikku/addon-twilio',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
