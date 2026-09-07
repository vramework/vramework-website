---
format: md
title: Xml
description: "Parse and generate XML."
sidebar_label: Xml
---

# Xml

Parse and generate XML.

```bash
npm install @pikku/addon-xml
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-xml`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `jsonToXml` | Convert a JSON object into an XML string | — |
| `xmlToJson` | Parse an XML string into a JSON object | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'xml',
  package: '@pikku/addon-xml',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
