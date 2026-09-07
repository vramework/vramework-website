---
format: md
title: Quickbase
description: "Integrate with the Quick Base RESTful API"
sidebar_label: Quickbase
---

# Quickbase

Integrate with the Quick Base RESTful API

```bash
npm install @pikku/addon-quickbase
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-quickbase`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `fieldGetAll` | Get all fields for a table | `quickbase` |
| `fileDelete` | Delete a file | `quickbase` |
| `fileDownload` | Download a file | `quickbase` |
| `recordCreate` | Create records | `quickbase` |
| `recordDelete` | Delete records | `quickbase` |
| `recordGetAll` | Query records | `quickbase` |
| `recordUpdate` | Update records | `quickbase` |
| `recordUpsert` | Upsert records | `quickbase` |
| `reportGet` | Get a report | `quickbase` |
| `reportRun` | Run a report | `quickbase` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'quickbase',
  package: '@pikku/addon-quickbase',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
