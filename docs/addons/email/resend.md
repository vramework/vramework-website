---
format: md
title: Resend
description: "Email API for developers"
sidebar_label: Resend
---

# Resend

Email API for developers

```bash
npm install @pikku/addon-resend
```

Category: **Email** · Version: `0.0.8` · Package: `@pikku/addon-resend`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `resendSend` | Send an email via Resend | `resend` |

## Secrets

- `RESEND_CREDENTIALS` — Email API for developers

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'resend',
  package: '@pikku/addon-resend',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
