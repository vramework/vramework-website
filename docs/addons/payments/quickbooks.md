---
format: md
title: Quickbooks
description: "Consume the QuickBooks Online accounting API"
sidebar_label: Quickbooks
---

# Quickbooks

Consume the QuickBooks Online accounting API

```bash
npm install @pikku/addon-quickbooks
```

Category: **Payments** · Version: `0.0.8` · Package: `@pikku/addon-quickbooks`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `billCreate` | Bill create | `quickbooks` |
| `billGet` | Bill get | `quickbooks` |
| `billGetAll` | Bill get all | `quickbooks` |
| `billUpdate` | Bill update | `quickbooks` |
| `customerCreate` | Customer create | `quickbooks` |
| `customerGet` | Customer get | `quickbooks` |
| `customerGetAll` | Customer get all | `quickbooks` |
| `customerUpdate` | Customer update | `quickbooks` |
| `employeeCreate` | Employee create | `quickbooks` |
| `employeeGet` | Employee get | `quickbooks` |
| `employeeGetAll` | Employee get all | `quickbooks` |
| `employeeUpdate` | Employee update | `quickbooks` |
| `estimateCreate` | Estimate create | `quickbooks` |
| `estimateGet` | Estimate get | `quickbooks` |
| `estimateGetAll` | Estimate get all | `quickbooks` |
| `estimateUpdate` | Estimate update | `quickbooks` |
| `invoiceCreate` | Invoice create | `quickbooks` |
| `invoiceGet` | Invoice get | `quickbooks` |
| `invoiceGetAll` | Invoice get all | `quickbooks` |
| `invoiceUpdate` | Invoice update | `quickbooks` |
| `itemGet` | Item get | `quickbooks` |
| `itemGetAll` | Item get all | `quickbooks` |
| `paymentCreate` | Payment create | `quickbooks` |
| `paymentGet` | Payment get | `quickbooks` |
| `paymentGetAll` | Payment get all | `quickbooks` |
| `paymentUpdate` | Payment update | `quickbooks` |
| `transactionGetReport` | Transaction get report | `quickbooks` |
| `vendorCreate` | Vendor create | `quickbooks` |
| `vendorGet` | Vendor get | `quickbooks` |
| `vendorGetAll` | Vendor get all | `quickbooks` |
| `vendorUpdate` | Vendor update | `quickbooks` |

## Secrets

- `QUICKBOOKS_OAUTH_APP` — OAuth2 app credentials for QuickBooks Online

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'quickbooks',
  package: '@pikku/addon-quickbooks',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
