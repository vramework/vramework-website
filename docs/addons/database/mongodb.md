---
format: md
title: Mongodb
description: "MongoDB database operations."
sidebar_label: Mongodb
---

# Mongodb

MongoDB database operations.

```bash
npm install @pikku/addon-mongodb
```

Category: **Database** · Version: `0.1.6` · Package: `@pikku/addon-mongodb`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `mongoAggregate` | Run an aggregation pipeline on a MongoDB collection | `mongodb` |
| `mongoCount` | Count documents in a MongoDB collection | `mongodb` |
| `mongoDeleteMany` | Delete multiple documents from a MongoDB collection | `mongodb` |
| `mongoDeleteOne` | Delete a single document from a MongoDB collection | `mongodb` |
| `mongoFind` | Find documents in a MongoDB collection | `mongodb` |
| `mongoFindOneAndUpdate` | Atomically find and update a document | `mongodb` |
| `mongoInsertMany` | Insert multiple documents into a MongoDB collection | `mongodb` |
| `mongoInsertOne` | Insert a document into a MongoDB collection | `mongodb` |
| `mongoListCollections` | List collections in the MongoDB database | `mongodb` |
| `mongoUpdateMany` | Update multiple documents in a MongoDB collection | `mongodb` |
| `mongoUpdateOne` | Update a single document in a MongoDB collection | `mongodb` |

## Secrets

- `MONGODB_CREDENTIALS` — MongoDB connection secrets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mongodb',
  package: '@pikku/addon-mongodb',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
