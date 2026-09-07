---
format: md
title: Plentymarkets
description: "Plentymarkets e-commerce: orders, items, stock, warehouses, payments, and contacts."
sidebar_label: Plentymarkets
---

# Plentymarkets

Plentymarkets e-commerce: orders, items, stock, warehouses, payments, and contacts.

```bash
npm install @pikku/addon-plentymarkets
```

Category: **E-commerce** · Version: `0.2.3` · Package: `@pikku/addon-plentymarkets`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `correctStock` | Apply stock corrections for a warehouse | `plentymarkets` |
| `createCategory` | Create a new category | `plentymarkets` |
| `createContact` | Create a new contact | `plentymarkets` |
| `createItem` | Create a new item | `plentymarkets` |
| `createOrder` | Create a new order | `plentymarkets` |
| `createPayment` | Create a new payment | `plentymarkets` |
| `createVariation` | Create a new variation for an item | `plentymarkets` |
| `deleteCategory` | Delete a category | `plentymarkets` |
| `getCategory` | Get a category by ID | `plentymarkets` |
| `getContact` | Get a contact by ID | `plentymarkets` |
| `getItem` | Get an item by ID | `plentymarkets` |
| `getOrder` | Get an order by ID | `plentymarkets` |
| `getPayment` | Get a payment by ID | `plentymarkets` |
| `getVariation` | Get a variation by ID | `plentymarkets` |
| `getVariationSyncData` | Resolve a variation's per-currency gross prices and availability id — the data a catalog resync writes (GET /items/variations/&#123;id&#125; with sales prices). | `plentymarkets` |
| `getWarehouse` | Get a warehouse by ID | `plentymarkets` |
| `listAvailabilities` | List the PlentyMarkets availabilities (the "ships in N days" catalog dimension) — GET /availabilities. | `plentymarkets` |
| `listCategories` | List categories with filters | `plentymarkets` |
| `listContacts` | List contacts with filters | `plentymarkets` |
| `listItems` | List items with filters | `plentymarkets` |
| `listOrders` | List orders with optional filters | `plentymarkets` |
| `listPayments` | List payments | `plentymarkets` |
| `listStock` | List stock entries with filters | `plentymarkets` |
| `listVariations` | List variations for an item | `plentymarkets` |
| `listWarehouses` | List all warehouses | `plentymarkets` |
| `listWarehouseStock` | List stock for a specific warehouse | `plentymarkets` |
| `plentymarketsWebhookHandler` | Receive a PlentyMarkets webhook and enqueue it onto the plentymarkets-webhook-event queue for the consuming app to resync. | `queueService`, `logger` |
| `searchOrderPayments` | List the payments booked against one order (POST /payments/search) | `plentymarkets` |
| `updateCategory` | Update an existing category | `plentymarkets` |
| `updateContact` | Update an existing contact | `plentymarkets` |
| `updateItem` | Update an existing item | `plentymarkets` |
| `updateOrder` | Update an existing order | `plentymarkets` |
| `updateVariation` | Update an existing variation | `plentymarkets` |

## Secrets

- `PLENTYMARKETS_CREDENTIALS` — PlentyMarkets REST API secrets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'plentymarkets',
  package: '@pikku/addon-plentymarkets',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
