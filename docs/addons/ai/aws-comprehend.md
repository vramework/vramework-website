---
format: md
title: AWS Comprehend
description: "Amazon Comprehend text analysis for Pikku"
sidebar_label: AWS Comprehend
---

# AWS Comprehend

Amazon Comprehend text analysis for Pikku

```bash
npm install @pikku/addon-aws-comprehend
```

Category: **AI** · Version: `0.0.7` · Package: `@pikku/addon-aws-comprehend`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `detectDominantLanguage` | Detect the dominant language of a text | `awsComprehend` |
| `detectEntities` | Detect named entities in a text | `awsComprehend` |
| `detectSentiment` | Analyze the sentiment of a text | `awsComprehend` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-comprehend',
  package: '@pikku/addon-aws-comprehend',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
