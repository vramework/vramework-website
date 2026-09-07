---
format: md
title: Shopify
description: "Shopify Admin API for products, orders, customers, and inventory."
sidebar_label: Shopify
---

# Shopify

Shopify Admin API for products, orders, customers, and inventory.

```bash
npm install @pikku/addon-shopify
```

Category: **E-commerce** · Version: `0.1.6` · Package: `@pikku/addon-shopify`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `adjustInventory` | Adjust inventory levels for a product | `shopify` |
| `cancelOrder` | Cancel an order | `shopify` |
| `createCustomer` | Create a new customer | `shopify` |
| `createOrder` | Create a new order | `shopify` |
| `createProduct` | Create a new product | `shopify` |
| `deleteCustomer` | Delete a customer | `shopify` |
| `deleteOrder` | Delete an order | `shopify` |
| `deleteProduct` | Delete a product | `shopify` |
| `getCustomer` | Get a customer by ID | `shopify` |
| `getOrder` | Get an order by ID | `shopify` |
| `getProduct` | Get a product by ID | `shopify` |
| `listCustomers` | List all customers | `shopify` |
| `listOrders` | List all orders | `shopify` |
| `listProducts` | List all products | `shopify` |
| `updateCustomer` | Update an existing customer | `shopify` |
| `updateOrder` | Update an existing order | `shopify` |
| `updateProduct` | Update an existing product | `shopify` |

## Secrets

- `SHOPIFY_CREDENTIALS` — Shopify Admin API secrets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'shopify',
  package: '@pikku/addon-shopify',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
