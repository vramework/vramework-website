---
format: md
title: Binary
description: "Convert between binary file data (base64) and JSON, without any heavy parser"
sidebar_label: Binary
---

# Binary

Convert between binary file data (base64) and JSON, without any heavy parser

```bash
npm install @pikku/addon-binary
```

Category: **Data** · Version: `0.2.4` · Package: `@pikku/addon-binary`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `extractJson` | Parse base64 file bytes as JSON | — |
| `extractText` | Decode base64 file bytes into a text string | — |
| `moveBinaryData` | Move data between the JSON and binary channels in either direction | — |
| `toJsonFile` | Serialize a JSON value into base64 file bytes | — |
| `toTextFile` | Encode a text string into base64 file bytes | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'binary',
  package: '@pikku/addon-binary',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
