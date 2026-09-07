---
format: md
title: Airtable
description: "Airtable CRUD operations on records."
sidebar_label: Airtable
---

# Airtable

Airtable CRUD operations on records.

```bash
npm install @pikku/addon-airtable
```

Category: **Database** · Version: `0.1.6` · Package: `@pikku/addon-airtable`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `createRecord` | Creates a new record in an Airtable table | `airtable` |
| `deleteRecord` | Deletes a record from an Airtable table | `airtable` |
| `getRecord` | Gets a single record from an Airtable table | `airtable` |
| `listRecordItems` | Lists records and returns one flattened object per record (id + createdTime + fields at the top level), ready to iterate over. | `airtable` |
| `listRecords` | Lists records from an Airtable table | `airtable` |
| `updateRecord` | Updates a record in an Airtable table | `airtable` |

## Secrets

- `AIRTABLE_API_KEY` — Airtable Personal Access Token

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'airtable',
  package: '@pikku/addon-airtable',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
