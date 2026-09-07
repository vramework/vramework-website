---
format: md
title: Markdown
description: "Convert between Markdown and HTML."
sidebar_label: Markdown
---

# Markdown

Convert between Markdown and HTML.

```bash
npm install @pikku/addon-markdown
```

Category: **Data** · Version: `0.1.6` · Package: `@pikku/addon-markdown`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `htmlToMarkdown` | Convert HTML to Markdown | — |
| `markdownToHtml` | Convert Markdown to HTML | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'markdown',
  package: '@pikku/addon-markdown',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
