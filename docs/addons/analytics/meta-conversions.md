---
format: md
title: Meta Conversions
description: "Meta (Facebook) Conversions API for server-side event tracking."
sidebar_label: Meta Conversions
---

# Meta Conversions

Meta (Facebook) Conversions API for server-side event tracking.

```bash
npm install @pikku/addon-meta-conversions
```

Category: **Analytics** · Version: `0.1.6` · Package: `@pikku/addon-meta-conversions`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `eventSend` | Send server-side conversion events to Meta via the Conversions API | `metaConversions` |

## Secrets

- `META_CONVERSIONS_CREDENTIALS` — Meta (Facebook) Conversions API for server-side event tracking

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'meta-conversions',
  package: '@pikku/addon-meta-conversions',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
