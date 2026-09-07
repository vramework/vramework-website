---
format: md
title: Barcode
description: "Generate barcodes (Code128, EAN, QR, DataMatrix, and more)."
sidebar_label: Barcode
---

# Barcode

Generate barcodes (Code128, EAN, QR, DataMatrix, and more).

```bash
npm install @pikku/addon-barcode
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-barcode`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `barcodeGenerate` | Generate a barcode image from text | `content` |
| `barcodeToDataUrl` | Generate a barcode as a base64 data URL for embedding in HTML | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'barcode',
  package: '@pikku/addon-barcode',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
