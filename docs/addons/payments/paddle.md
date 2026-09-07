---
format: md
title: Paddle
description: "Paddle billing: products, subscriptions, and transactions."
sidebar_label: Paddle
---

# Paddle

Paddle billing: products, subscriptions, and transactions.

```bash
npm install @pikku/addon-paddle
```

Category: **Payments** · Version: `0.1.7` · Package: `@pikku/addon-paddle`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `productsList` | List Paddle products | `paddle` |
| `subscriptionsList` | List Paddle subscriptions | `paddle` |
| `transactionsList` | List Paddle transactions | `paddle` |

## Secrets

- `PADDLE_CREDENTIALS` — Payments and subscriptions

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'paddle',
  package: '@pikku/addon-paddle',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
