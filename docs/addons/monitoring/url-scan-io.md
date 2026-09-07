---
format: md
title: Url Scan Io
description: "urlscanio addon"
sidebar_label: Url Scan Io
---

# Url Scan Io

urlscanio addon

```bash
npm install @pikku/addon-url-scan-io
```

Category: **Monitoring** · Version: `0.0.7` · Package: `@pikku/addon-url-scan-io`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `scanGet` | Scan get | `urlScanIo` |
| `scanGetAll` | Scan get all | `urlScanIo` |
| `scanPerform` | Scan perform | `urlScanIo` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'url-scan-io',
  package: '@pikku/addon-url-scan-io',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
