---
format: md
title: Grafana
description: "Grafana dashboards and alert management."
sidebar_label: Grafana
---

# Grafana

Grafana dashboards and alert management.

```bash
npm install @pikku/addon-grafana
```

Category: **Monitoring** · Version: `0.1.6` · Package: `@pikku/addon-grafana`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `alertsList` | List Grafana alerts | `grafana` |
| `dashboardsGet` | Get Grafana dashboard by UID | `grafana` |
| `dashboardsList` | Search Grafana dashboards | `grafana` |

## Secrets

- `GRAFANA_CREDENTIALS` — Observability platform

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'grafana',
  package: '@pikku/addon-grafana',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
