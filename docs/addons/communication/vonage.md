---
format: md
title: Vonage
description: "Send SMS messages via the Vonage (Nexmo) API"
sidebar_label: Vonage
---

# Vonage

Send SMS messages via the Vonage (Nexmo) API

```bash
npm install @pikku/addon-vonage
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-vonage`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `smsSend` | Send an SMS message | `vonage` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'vonage',
  package: '@pikku/addon-vonage',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
