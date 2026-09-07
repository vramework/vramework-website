---
format: md
title: Stripe Commerce
description: "A ready-made Stripe storefront: catalogue, cart, checkout, orders, fulfilment"
sidebar_label: Stripe Commerce
---

# Stripe Commerce

A ready-made Stripe storefront: catalogue, cart, checkout, orders, fulfilment

```bash
npm install @pikku/addon-stripe-commerce
```

Category: **Payments** · Version: `0.1.0` · Package: `@pikku/addon-stripe-commerce`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `archiveProduct` | Archive a product and its variants, hiding them from the storefront without breaking past orders | `stripeApi`, `kysely`, `logger` |
| `captureOrder` | Capture a manually-authorised order, in full or for less than was authorised | `stripeApi`, `kysely` |
| `createCartCheckout` | Create a Stripe Checkout session from a cart, recording a pending order with its line items | `stripeApi`, `kysely`, `paymentOwner` |
| `createCheckout` | Create a Stripe Checkout session for a one-off payment, recording a pending order the webhook later settles | `stripeApi`, `kysely`, `paymentOwner` |
| `fulfillOrder` | Mark a paid order as shipped, recording tracking details | `kysely` |
| `getCart` | Fetch a cart by token, opening a new one if the token is missing or already checked out | `kysely`, `paymentOwner` |
| `getOrder` | Fetch one order with its line items and shipping address | `kysely`, `paymentOwner` |
| `handleStripeWebhook` | Verify a Stripe webhook against the raw body and apply it to the payment tables, ignoring events already processed | `stripeSignature`, `kysely`, `logger` |
| `listOrders` | List recorded payment orders, most recent first | `kysely`, `paymentOwner` |
| `listProducts` | List catalogue products with their variants and stock state | `kysely` |
| `listShippingRates` | List the shipping rates offered at checkout | `kysely` |
| `refundOrder` | Refund an order in full or in part through Stripe, optionally restocking the items | `stripeApi`, `kysely` |
| `saveProduct` | Create or update a product and its variants, writing through to Stripe | `stripeApi`, `kysely`, `logger` |
| `saveShippingRate` | Create or replace a shipping rate offered at checkout, writing through to Stripe | `stripeApi`, `kysely`, `logger` |
| `setCartItem` | Set the quantity of one variant in a cart, removing the line when the quantity is zero | `kysely`, `paymentOwner` |

## Secrets

- `STRIPE_SECRET_KEY` — Stripe API secret key used for every call this addon makes
- `STRIPE_WEBHOOK_SECRET` — Signing secret for the registered webhook endpoint.

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'stripe-commerce',
  package: '@pikku/addon-stripe-commerce',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
