---
format: md
title: Compression
description: "Compress and decompress data using gzip, deflate, and zip."
sidebar_label: Compression
---

# Compression

Compress and decompress data using gzip, deflate, and zip.

```bash
npm install @pikku/addon-compression
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-compression`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `deflateCompress` | Compress a file using deflate | `content` |
| `deflateDecompress` | Decompress a deflate file | `content` |
| `gzipCompress` | Compress a file using gzip | `content` |
| `gzipDecompress` | Decompress a gzip file | `content` |
| `zipCompress` | Compress one or more files into a zip archive | `content` |
| `zipDecompress` | Decompress a zip archive into individual files | `content` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'compression',
  package: '@pikku/addon-compression',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
