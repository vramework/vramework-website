---
format: md
title: Docraptor
description: "PDF and Excel document generation via DocRaptor."
sidebar_label: Docraptor
---

# Docraptor

PDF and Excel document generation via DocRaptor.

```bash
npm install @pikku/addon-docraptor
```

Category: **Documents** · Version: `0.1.6` · Package: `@pikku/addon-docraptor`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `documentCreate` | Create a PDF, XLS, or XLSX document from HTML content or a URL | `docraptor` |
| `documentCreateAsync` | Create a document asynchronously and return a status ID for polling | `docraptor` |
| `documentGetStatus` | Check the status of an asynchronously created document | `docraptor` |

## Secrets

- `DOCRAPTOR_CREDENTIALS` — API key for DocRaptor document generation

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'docraptor',
  package: '@pikku/addon-docraptor',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
