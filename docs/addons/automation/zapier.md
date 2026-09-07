---
format: md
title: Zapier
description: "Trigger Zapier webhooks for workflow automation."
sidebar_label: Zapier
---

# Zapier

Trigger Zapier webhooks for workflow automation.

```bash
npm install @pikku/addon-zapier
```

Category: **Automation** · Version: `0.1.6` · Package: `@pikku/addon-zapier`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `webhookTrigger` | Send a JSON payload to a Zapier webhook URL to trigger a Zap | `zapier` |
| `webhookTriggerNamed` | Trigger a named Zapier webhook using a pre-configured webhook URL from secrets | `zapier` |

## Secrets

- `ZAPIER_CREDENTIALS` — Zapier webhook URLs for automation triggers

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'zapier',
  package: '@pikku/addon-zapier',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
