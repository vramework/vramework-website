---
format: md
title: Stripe
description: "Stripe payments and subscriptions: charges, refunds, customers, products, prices,"
sidebar_label: Stripe
---

# Stripe

Stripe payments and subscriptions: charges, refunds, customers, products, prices,

```bash
npm install @pikku/addon-stripe
```

Category: **Payments** · Version: `0.1.8` · Package: `@pikku/addon-stripe`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `accountCreate` | Create a Stripe Connect account for a marketplace seller/vendor. | `stripe` |
| `accountGet` | Retrieve a Connect account to check onboarding status (chargesEnabled, payoutsEnabled, detailsSubmitted) | `stripe` |
| `accountLinkCreate` | Create a single-use, Stripe-hosted onboarding link for a Connect account. | `stripe` |
| `balanceGet` | Retrieve the current balance on your Stripe account | `stripe` |
| `billingPortalSessionCreate` | Create a Stripe billing portal session so a customer can self-manage their subscription and payment methods | `stripe` |
| `chargeCreate` | Create a charge to move money into your Stripe account | `stripe` |
| `chargeGet` | Retrieve details of a previously created charge | `stripe` |
| `chargeList` | Returns a list of charges you have previously created | `stripe` |
| `chargeUpdate` | Updates the specified charge by setting the values of the parameters passed | `stripe` |
| `checkoutSessionCreate` | Create a Stripe Checkout session for a subscription plan, a one-off payment, or to save a card, returning a hosted payment URL | `stripe` |
| `couponCreate` | Create a coupon that can be used to discount invoices or subscriptions | `stripe` |
| `couponList` | Returns a list of your coupons | `stripe` |
| `customerCardAdd` | Add a card to a customer using a token | `stripe` |
| `customerCardGet` | Retrieve a card or source belonging to a customer | `stripe` |
| `customerCardRemove` | Remove a card from a customer | `stripe` |
| `customerCreate` | Create a customer to track recurring charges and save payment information | `stripe` |
| `customerDelete` | Permanently deletes a customer. | `stripe` |
| `customerGet` | Retrieves a Customer object | `stripe` |
| `customerList` | Returns a list of your customers sorted by creation date, most recent first | `stripe` |
| `customerUpdate` | Updates the specified customer by setting the values of the parameters passed | `stripe` |
| `invoiceCreate` | Create a draft invoice for a customer. | `stripe` |
| `invoiceFinalize` | Finalize a draft invoice, turning it into an issued invoice with a number, hosted URL and PDF | `stripe` |
| `invoiceGet` | Retrieve details of an invoice, including its hosted URL and PDF link once finalized | `stripe` |
| `invoiceItemCreate` | Add a line item (a charge) to a customer's invoice or their next upcoming invoice | `stripe` |
| `invoiceList` | Returns a list of invoices, optionally filtered by customer, subscription or status | `stripe` |
| `invoicePay` | Attempt to pay an open invoice immediately using a saved payment method | `stripe` |
| `invoiceSend` | Email an invoice to the customer, containing a link to pay it | `stripe` |
| `invoiceVoid` | Void a finalized invoice, marking it uncollectible without deleting it. | `stripe` |
| `meterEventCreate` | Create a meter event to report usage for a customer on a specific meter | `stripe` |
| `paymentIntentCancel` | Cancel a payment intent, releasing any uncaptured authorization hold on the customer's card | `stripe` |
| `paymentIntentCapture` | Capture the funds of a payment intent that was authorized with capture_method=manual (auth-then-capture) | `stripe` |
| `paymentIntentConfirm` | Confirm a payment intent to run the charge. | `stripe` |
| `paymentIntentCreate` | Create a payment intent. | `stripe` |
| `paymentIntentGet` | Retrieve a payment intent to check its current status (e.g. | `stripe` |
| `payoutCreate` | Send funds from a Stripe balance to the bank account or debit card on file. | `stripe` |
| `priceCreate` | Create a price for a product, one-time or recurring | `stripe` |
| `priceGet` | Retrieve details of an existing price | `stripe` |
| `priceList` | Returns a list of your prices, optionally filtered by product | `stripe` |
| `priceUpdate` | Update an existing price. | `stripe` |
| `productCreate` | Create a product to sell, optionally with a default price attached inline | `stripe` |
| `productGet` | Retrieve details of an existing product | `stripe` |
| `productList` | Returns a list of your products | `stripe` |
| `productUpdate` | Update an existing product, for example to archive it or change its default price | `stripe` |
| `refundCreate` | Refund a charge or payment intent, in full or in part. | `stripe` |
| `refundGet` | Retrieve details of a previously created refund | `stripe` |
| `refundList` | Returns a list of refunds you have previously created | `stripe` |
| `setupIntentCreate` | Create a SetupIntent to securely save a card for future off-session charges without charging now. | `stripe` |
| `setupIntentGet` | Retrieve a SetupIntent to check its status and read the saved payment method after client-side setup | `stripe` |
| `sourceCreate` | Creates a new source object | `stripe` |
| `sourceDelete` | Detach a source from a customer, removing it as a payment method | `stripe` |
| `sourceGet` | Retrieves an existing source object | `stripe` |
| `stripeWebhookHandler` | Verify a Stripe webhook signature against the raw body and enqueue the verified event onto the stripe-webhook-event queue for the consuming app to process. | `stripeWebhookVerifier`, `queueService`, `logger` |
| `subscriptionCancel` | Cancel a subscription, either immediately or at the end of the current billing period | `stripe` |
| `subscriptionCreate` | Create a subscription for a customer against one or more prices. | `stripe` |
| `subscriptionGet` | Retrieve a subscription by its identifier | `stripe` |
| `subscriptionUpdate` | Switch a subscription to a different price (plan change). | `stripe` |
| `tokenCreate` | Creates a single-use token that represents a credit card, bank account, or other payment source | `stripe` |
| `transferCreate` | Transfer funds from your platform balance to a connected account (marketplace payout to a seller) | `stripe` |

## Secrets

- `STRIPE_SECRET_KEY` — Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` — Signing secret used to verify inbound Stripe webhook signatures

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'stripe',
  package: '@pikku/addon-stripe',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
