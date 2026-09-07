---
format: md
title: Iterable
description: "Consume the Iterable marketing API"
sidebar_label: Iterable
---

# Iterable

Consume the Iterable marketing API

```bash
npm install @pikku/addon-iterable
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-iterable`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `eventTrack` | Track events in bulk | `iterable` |
| `userDelete` | Delete a user by email | `iterable` |
| `userGet` | Get a user by email | `iterable` |
| `userListAdd` | Add subscribers to a list | `iterable` |
| `userListRemove` | Remove subscribers from a list | `iterable` |
| `userUpsert` | Create or update a user | `iterable` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'iterable',
  package: '@pikku/addon-iterable',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
