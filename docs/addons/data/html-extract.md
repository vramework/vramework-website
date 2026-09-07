---
format: md
title: Html Extract
description: "Extract structured data from HTML using CSS selectors."
sidebar_label: Html Extract
---

# Html Extract

Extract structured data from HTML using CSS selectors.

```bash
npm install @pikku/addon-html-extract
```

Category: **Data** · Version: `0.1.6` · Package: `@pikku/addon-html-extract`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `htmlExtract` | Extract data from HTML using CSS selectors | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'html-extract',
  package: '@pikku/addon-html-extract',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
