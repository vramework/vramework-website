---
format: md
title: Read Pdf
description: "Extract text content from PDF files."
sidebar_label: Read Pdf
---

# Read Pdf

Extract text content from PDF files.

```bash
npm install @pikku/addon-read-pdf
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-read-pdf`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `readPdf` | Extract text and metadata from a PDF file | `content` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'read-pdf',
  package: '@pikku/addon-read-pdf',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
