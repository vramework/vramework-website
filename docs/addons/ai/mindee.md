---
format: md
title: Mindee
description: "Mindee OCR document prediction API"
sidebar_label: Mindee
---

# Mindee

Mindee OCR document prediction API

```bash
npm install @pikku/addon-mindee
```

Category: **AI** · Version: `0.0.7` · Package: `@pikku/addon-mindee`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `invoicePredict` | Predict invoice data via OCR | `mindee` |
| `receiptPredict` | Predict receipt data via OCR | `mindee` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mindee',
  package: '@pikku/addon-mindee',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
