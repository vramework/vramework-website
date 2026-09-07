---
format: md
title: Ollama
description: "Local LLM inference via Ollama."
sidebar_label: Ollama
---

# Ollama

Local LLM inference via Ollama.

```bash
npm install @pikku/addon-ollama
```

Category: **AI** · Version: `0.1.6` · Package: `@pikku/addon-ollama`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `ollamaEmbed` | Create an embedding vector from text using an Ollama model | `ollama` |
| `ollamaEmbedMany` | Create embedding vectors from multiple texts using an Ollama model | `ollama` |
| `ollamaGenerateObject` | Generate a structured JSON object using an Ollama model | `ollama` |
| `ollamaGenerateText` | Generate text using an Ollama model | `ollama` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'ollama',
  package: '@pikku/addon-ollama',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
