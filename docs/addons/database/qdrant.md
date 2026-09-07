---
format: md
title: Qdrant
sidebar_label: Qdrant
---

# Qdrant

```bash
npm install @pikku/addon-qdrant
```

Category: **Database** · Version: `0.2.3` · Package: `@pikku/addon-qdrant`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `ingest` | Embed text chunks (via the aiEmbedding service) and upsert them into a Qdrant collection | `qdrant`, `aiEmbedding` |
| `query` | Embed a text query (via the aiEmbedding service) and search a Qdrant collection in one call | `qdrant`, `aiEmbedding` |
| `search` | Search a Qdrant collection by a pre-computed embedding vector | `qdrant` |
| `upsert` | Upsert embedding points into a Qdrant collection | `qdrant` |

## Secrets

- `QDRANT_API_KEY` — API key for Qdrant Cloud

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'qdrant',
  package: '@pikku/addon-qdrant',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
