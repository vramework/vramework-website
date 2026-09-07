---
format: md
title: Elasticsearch
description: "Consume the Elasticsearch API"
sidebar_label: Elasticsearch
---

# Elasticsearch

Consume the Elasticsearch API

```bash
npm install @pikku/addon-elasticsearch
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-elasticsearch`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `documentCreate` | Create a document | `elasticsearch` |
| `documentDelete` | Delete a document by id | `elasticsearch` |
| `documentGet` | Get a document by id | `elasticsearch` |
| `documentGetAll` | Search documents in an index | `elasticsearch` |
| `documentUpdate` | Update a document by id | `elasticsearch` |
| `indexCreate` | Create an index | `elasticsearch` |
| `indexDelete` | Delete an index | `elasticsearch` |
| `indexGet` | Get an index | `elasticsearch` |
| `indexGetAll` | List all indices | `elasticsearch` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'elasticsearch',
  package: '@pikku/addon-elasticsearch',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
