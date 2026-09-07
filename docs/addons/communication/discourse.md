---
format: md
title: Discourse
description: "Consume the Discourse forum API"
sidebar_label: Discourse
---

# Discourse

Consume the Discourse forum API

```bash
npm install @pikku/addon-discourse
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-discourse`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `categoryCreate` | Create a category | `discourse` |
| `categoryGetAll` | Get all categories | `discourse` |
| `categoryUpdate` | Update a category | `discourse` |
| `groupCreate` | Create a group | `discourse` |
| `groupGet` | Get a group by name | `discourse` |
| `groupGetAll` | Get all groups | `discourse` |
| `groupUpdate` | Update a group | `discourse` |
| `postCreate` | Create a post | `discourse` |
| `postGet` | Get a post | `discourse` |
| `postGetAll` | Get all posts | `discourse` |
| `postUpdate` | Update a post | `discourse` |
| `userCreate` | Create a user | `discourse` |
| `userGet` | Get a user by username | `discourse` |
| `userGetAll` | Get all users | `discourse` |
| `userGroupAdd` | Add users to a group | `discourse` |
| `userGroupRemove` | Remove users from a group | `discourse` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'discourse',
  package: '@pikku/addon-discourse',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
