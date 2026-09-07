---
format: md
title: Wise
description: "Consume the Wise (TransferWise) payments API"
sidebar_label: Wise
---

# Wise

Consume the Wise (TransferWise) payments API

```bash
npm install @pikku/addon-wise
```

Category: **Payments** · Version: `0.0.7` · Package: `@pikku/addon-wise`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `accountGetBalances` | Get account balances | `wise` |
| `accountGetCurrencies` | Get available currencies | `wise` |
| `accountGetStatement` | Get account statement | `wise` |
| `exchangeRateGet` | Get exchange rates | `wise` |
| `profileGet` | Get profile by id | `wise` |
| `profileGetAll` | List profiles | `wise` |
| `quoteCreate` | Create a quote | `wise` |
| `quoteGet` | Get quote by id | `wise` |
| `recipientGetAll` | List recipient accounts | `wise` |
| `transferCreate` | Create a transfer | `wise` |
| `transferDelete` | Cancel a transfer | `wise` |
| `transferExecute` | Fund a transfer | `wise` |
| `transferGet` | Get transfer by id | `wise` |
| `transferGetAll` | List transfers | `wise` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'wise',
  package: '@pikku/addon-wise',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
