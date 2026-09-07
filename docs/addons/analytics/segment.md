---
format: md
title: Segment
description: "Segment analytics for tracking events and identifying users."
sidebar_label: Segment
---

# Segment

Segment analytics for tracking events and identifying users.

```bash
npm install @pikku/addon-segment
```

Category: **Analytics** · Version: `0.1.6` · Package: `@pikku/addon-segment`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `identifyUser` | Identify a user in Segment | `segment` |
| `trackEvent` | Track an event in Segment | `segment` |

## Secrets

- `SEGMENT_CREDENTIALS` — Customer data platform

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'segment',
  package: '@pikku/addon-segment',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
