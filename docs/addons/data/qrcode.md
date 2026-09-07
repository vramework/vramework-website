---
format: md
title: Qrcode
description: "Generate and read QR codes."
sidebar_label: Qrcode
---

# Qrcode

Generate and read QR codes.

```bash
npm install @pikku/addon-qrcode
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-qrcode`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `qrCodeGenerate` | Generate a QR code image from text or URL | `content` |
| `qrCodeRead` | Read and decode a QR code from an image | `content` |
| `qrCodeToDataUrl` | Generate a QR code as a base64 data URL for embedding in HTML | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'qrcode',
  package: '@pikku/addon-qrcode',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
