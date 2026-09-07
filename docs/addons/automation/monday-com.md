---
format: md
title: Monday Com
description: "Consume the Monday.com GraphQL API"
sidebar_label: Monday Com
---

# Monday Com

Consume the Monday.com GraphQL API

```bash
npm install @pikku/addon-monday-com
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-monday-com`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `boardArchive` | Archive a board | `mondayCom` |
| `boardColumnCreate` | Create a board column | `mondayCom` |
| `boardColumnGetAll` | Get many board columns | `mondayCom` |
| `boardCreate` | Create a board | `mondayCom` |
| `boardGet` | Get a board | `mondayCom` |
| `boardGetAll` | Get many boards | `mondayCom` |
| `boardGroupCreate` | Create a board group | `mondayCom` |
| `boardGroupDelete` | Delete a board group | `mondayCom` |
| `boardGroupGetAll` | Get many board groups | `mondayCom` |
| `boardItemAddUpdate` | Add an update to an item | `mondayCom` |
| `boardItemChangeColumnValue` | Change a column value of an item | `mondayCom` |
| `boardItemChangeMultipleColumnValues` | Change multiple column values of an item | `mondayCom` |
| `boardItemCreate` | Create an item | `mondayCom` |
| `boardItemDelete` | Delete an item | `mondayCom` |
| `boardItemGet` | Get an item | `mondayCom` |
| `boardItemGetAll` | Get many items | `mondayCom` |
| `boardItemGetByColumnValue` | Get items by column value | `mondayCom` |
| `boardItemMove` | Move an item to a group | `mondayCom` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'monday-com',
  package: '@pikku/addon-monday-com',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
