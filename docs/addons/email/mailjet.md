---
format: md
title: Mailjet
description: "Send transactional email and SMS via the Mailjet API"
sidebar_label: Mailjet
---

# Mailjet

Send transactional email and SMS via the Mailjet API

```bash
npm install @pikku/addon-mailjet
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-mailjet`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `emailSend` | Send an email | `mailjet` |
| `emailSendTemplate` | Send an email template | `mailjet` |
| `smsSend` | Send an SMS | `mailjet` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mailjet',
  package: '@pikku/addon-mailjet',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
