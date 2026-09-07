---
format: md
title: Coingecko
description: "Cryptocurrency prices and market data via CoinGecko."
sidebar_label: Coingecko
---

# Coingecko

Cryptocurrency prices and market data via CoinGecko.

```bash
npm install @pikku/addon-coingecko
```

Category: **Crypto** · Version: `0.1.6` · Package: `@pikku/addon-coingecko`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `getCoinList` | Get list of all supported coins with id, name and symbol | — |
| `getCoinPrice` | Get current price of cryptocurrencies | — |
| `getMarketChart` | Get historical market data (price, market cap, volume) for a coin | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'coingecko',
  package: '@pikku/addon-coingecko',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
