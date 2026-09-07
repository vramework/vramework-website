---
format: md
title: Sentry
description: "Sentry error tracking and organization management."
sidebar_label: Sentry
---

# Sentry

Sentry error tracking and organization management.

```bash
npm install @pikku/addon-sentry
```

Category: **Monitoring** · Version: `0.1.6` · Package: `@pikku/addon-sentry`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `sentryEventGet` | Get a Sentry event by ID | `sentry` |
| `sentryEventGetMany` | Get many Sentry events from a project | `sentry` |
| `sentryIssueDelete` | Delete a Sentry issue | `sentry` |
| `sentryIssueGet` | Get a Sentry issue by ID | `sentry` |
| `sentryIssueGetMany` | Get many Sentry issues from a project | `sentry` |
| `sentryIssueUpdate` | Update a Sentry issue | `sentry` |
| `sentryOrgCreate` | Create a new Sentry organization | `sentry` |
| `sentryOrgGet` | Get a Sentry organization by slug | `sentry` |
| `sentryOrgGetMany` | Get many Sentry organizations | `sentry` |
| `sentryOrgUpdate` | Update a Sentry organization | `sentry` |

## Secrets

- `SENTRY_CREDENTIALS` — API secrets for Sentry.io or self-hosted Sentry

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'sentry',
  package: '@pikku/addon-sentry',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
