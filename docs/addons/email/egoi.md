---
format: md
title: Egoi
description: "Consume the E-goi marketing API (contacts)"
sidebar_label: Egoi
---

# Egoi

Consume the E-goi marketing API (contacts)

```bash
npm install @pikku/addon-egoi
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-egoi`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactCreate` | Create a contact | `egoi` |
| `contactGet` | Get a contact | `egoi` |
| `contactGetAll` | Get many contacts | `egoi` |
| `contactUpdate` | Update a contact | `egoi` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'egoi',
  package: '@pikku/addon-egoi',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
