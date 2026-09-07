---
format: md
title: Pinecone
sidebar_label: Pinecone
---

# Pinecone

```bash
npm install @pikku/addon-pinecone
```

Category: **Database** · Version: `0.2.3` · Package: `@pikku/addon-pinecone`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `ingest` | Embed text chunks (via the aiEmbedding service) and upsert them into a Pinecone index | `pinecone`, `aiEmbedding` |
| `query` | Embed a text query (via the aiEmbedding service) and search a Pinecone index in one call | `pinecone`, `aiEmbedding` |
| `search` | Search a Pinecone index by a pre-computed embedding vector | `pinecone` |
| `upsert` | Upsert embedding vectors into a Pinecone index | `pinecone` |

## Secrets

- `PINECONE_API_KEY` — API key for Pinecone

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'pinecone',
  package: '@pikku/addon-pinecone',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
