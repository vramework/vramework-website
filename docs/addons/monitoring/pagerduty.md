---
format: md
title: Pagerduty
description: "PagerDuty incident and service management."
sidebar_label: Pagerduty
---

# Pagerduty

PagerDuty incident and service management.

```bash
npm install @pikku/addon-pagerduty
```

Category: **Monitoring** · Version: `0.1.6` · Package: `@pikku/addon-pagerduty`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `incidentsGet` | Get PagerDuty incident details | `pagerduty` |
| `incidentsList` | List PagerDuty incidents | `pagerduty` |
| `servicesList` | List PagerDuty services | `pagerduty` |

## Secrets

- `PAGERDUTY_CREDENTIALS` — Incident management

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'pagerduty',
  package: '@pikku/addon-pagerduty',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
