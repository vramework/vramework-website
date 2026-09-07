---
format: md
title: Posthog
description: "PostHog product analytics."
sidebar_label: Posthog
---

# Posthog

PostHog product analytics.

```bash
npm install @pikku/addon-posthog
```

Category: **Analytics** · Version: `0.1.6` · Package: `@pikku/addon-posthog`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `eventsCapture` | Capture an event in PostHog | `posthog` |
| `personsList` | List persons in PostHog | `posthog` |

## Secrets

- `POSTHOG_CREDENTIALS` — Product analytics

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'posthog',
  package: '@pikku/addon-posthog',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
