---
format: md
title: Html
description: "Convert HTML to text, markdown, or structured tables."
sidebar_label: Html
---

# Html

Convert HTML to text, markdown, or structured tables.

```bash
npm install @pikku/addon-html
```

Category: **Data** · Version: `0.1.6` · Package: `@pikku/addon-html`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `htmlToMarkdown` | Convert HTML to Markdown | — |
| `htmlToTable` | Convert JSON data to an HTML table | — |
| `htmlToText` | Convert HTML to plain text | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'html',
  package: '@pikku/addon-html',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
