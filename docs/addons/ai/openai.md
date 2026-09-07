---
format: md
title: Openai
description: "OpenAI API for chat, images, moderation, and embeddings."
sidebar_label: Openai
---

# Openai

OpenAI API for chat, images, moderation, and embeddings.

```bash
npm install @pikku/addon-openai
```

Category: **AI** · Version: `0.2.3` · Package: `@pikku/addon-openai`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `chatComplete` | Creates a model response for the given chat conversation | `openai` |
| `imageCreate` | Creates an image given a prompt using DALL-E | `openai` |
| `textEmbedding` | Creates an embedding vector representing the input text | `openai` |
| `textModerate` | Classifies if text violates OpenAI's usage policies | `openai` |

## Secrets

- `OPENAI_API_KEY` — OpenAI API key

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'openai',
  package: '@pikku/addon-openai',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
