---
format: md
title: Uptimerobot
description: "UptimeRobot uptime monitoring."
sidebar_label: Uptimerobot
---

# Uptimerobot

UptimeRobot uptime monitoring.

```bash
npm install @pikku/addon-uptimerobot
```

Category: **Monitoring** · Version: `0.1.6` · Package: `@pikku/addon-uptimerobot`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `monitorsCreate` | Create an UptimeRobot monitor | `uptimerobot` |
| `monitorsDelete` | Delete an UptimeRobot monitor | `uptimerobot` |
| `monitorsList` | List UptimeRobot monitors | `uptimerobot` |

## Secrets

- `UPTIMEROBOT_CREDENTIALS` — Website monitoring

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'uptimerobot',
  package: '@pikku/addon-uptimerobot',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
