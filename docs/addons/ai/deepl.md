---
format: md
title: Deepl
description: "Text translation via DeepL."
sidebar_label: Deepl
---

# Deepl

Text translation via DeepL.

```bash
npm install @pikku/addon-deepl
```

Category: **AI** · Version: `0.1.6` · Package: `@pikku/addon-deepl`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `languagesList` | List supported languages in DeepL | `deepl` |
| `translateText` | Translate text to another language using DeepL | `deepl` |

## Secrets

- `DEEPL_CREDENTIALS` — AI translation service

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'deepl',
  package: '@pikku/addon-deepl',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
