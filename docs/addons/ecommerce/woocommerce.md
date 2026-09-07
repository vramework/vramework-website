---
format: md
title: Woocommerce
description: "Consume the WooCommerce REST API (products, orders, customers)"
sidebar_label: Woocommerce
---

# Woocommerce

Consume the WooCommerce REST API (products, orders, customers)

```bash
npm install @pikku/addon-woocommerce
```

Category: **E-commerce** · Version: `0.0.7` · Package: `@pikku/addon-woocommerce`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `customerCreate` | Create a customer | `woocommerce` |
| `customerDelete` | Delete a customer | `woocommerce` |
| `customerGet` | Get a customer | `woocommerce` |
| `customerGetAll` | Get many customers | `woocommerce` |
| `customerUpdate` | Update a customer | `woocommerce` |
| `orderCreate` | Create an order | `woocommerce` |
| `orderDelete` | Delete an order | `woocommerce` |
| `orderGet` | Get an order | `woocommerce` |
| `orderGetAll` | Get many orders | `woocommerce` |
| `orderUpdate` | Update an order | `woocommerce` |
| `productCreate` | Create a product | `woocommerce` |
| `productDelete` | Delete a product | `woocommerce` |
| `productGet` | Get a product | `woocommerce` |
| `productGetAll` | Get many products | `woocommerce` |
| `productUpdate` | Update a product | `woocommerce` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'woocommerce',
  package: '@pikku/addon-woocommerce',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
