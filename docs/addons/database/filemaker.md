---
format: md
title: Filemaker
description: "Retrieve and manage data via the FileMaker Data API"
sidebar_label: Filemaker
---

# Filemaker

Retrieve and manage data via the FileMaker Data API

```bash
npm install @pikku/addon-filemaker
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-filemaker`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `recordCreate` | Create a record | `filemaker` |
| `recordDelete` | Delete a record | `filemaker` |
| `recordDuplicate` | Duplicate a record | `filemaker` |
| `recordEdit` | Edit a record | `filemaker` |
| `recordFind` | Find records | `filemaker` |
| `recordGet` | Get a record by ID | `filemaker` |
| `recordList` | Get records from a layout | `filemaker` |
| `recordPerformScript` | Perform a script | `filemaker` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'filemaker',
  package: '@pikku/addon-filemaker',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
