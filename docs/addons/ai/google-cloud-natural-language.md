---
format: md
title: Google Cloud Natural Language
description: "Consume the Google Cloud Natural Language API"
sidebar_label: Google Cloud Natural Language
---

# Google Cloud Natural Language

Consume the Google Cloud Natural Language API

```bash
npm install @pikku/addon-google-cloud-natural-language
```

Category: **AI** · Version: `0.0.8` · Package: `@pikku/addon-google-cloud-natural-language`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `analyzeSentiment` | Analyze the sentiment of a document | `googleCloudNaturalLanguage` |

## Secrets

- `GOOGLE_CLOUD_NATURAL_LANGUAGE_OAUTH_APP` — OAuth2 app credentials for Google Cloud Natural Language

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-cloud-natural-language',
  package: '@pikku/addon-google-cloud-natural-language',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
