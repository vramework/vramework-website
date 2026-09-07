---
format: md
title: Google Docs
description: "Google Docs integration for Pikku"
sidebar_label: Google Docs
---

# Google Docs

Google Docs integration for Pikku

```bash
npm install @pikku/addon-google-docs
```

Category: **Data** · Version: `0.0.8` · Package: `@pikku/addon-google-docs`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `docsDocumentsBatchUpdate` | Applies one or more updates to the document. | `googleDocs` |
| `docsDocumentsCreate` | Creates a blank document using the title given in the request. | `googleDocs` |
| `docsDocumentsGet` | Gets the latest version of the specified document. | `googleDocs` |

## Secrets

- `GOOGLE_DOCS_OAUTH_APP` — OAuth2 app credentials for Google Docs

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-docs',
  package: '@pikku/addon-google-docs',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
