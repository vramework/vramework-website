---
format: md
title: Google Analytics
description: "Google Analytics 4 event tracking and reporting."
sidebar_label: Google Analytics
---

# Google Analytics

Google Analytics 4 event tracking and reporting.

```bash
npm install @pikku/addon-google-analytics
```

Category: **Analytics** · Version: `0.1.6` · Package: `@pikku/addon-google-analytics`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `eventSend` | Send one or more events to Google Analytics 4 via the Measurement Protocol | `googleAnalytics` |
| `eventValidate` | Validate events against the GA4 Measurement Protocol without sending them | `googleAnalytics` |
| `metadataGet` | List available dimensions and metrics for a GA4 property | `googleAnalyticsReporting` |
| `reportRun` | Run a report on Google Analytics 4 data with metrics, dimensions, and date ranges | `googleAnalyticsReporting` |

## Secrets

- `GOOGLE_ANALYTICS_CREDENTIALS` — API key and Measurement ID for sending events via Measurement Protocol

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-analytics',
  package: '@pikku/addon-google-analytics',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
