---
format: md
title: Automizy
description: "Automizy email marketing — contacts and smart lists"
sidebar_label: Automizy
---

# Automizy

Automizy email marketing — contacts and smart lists

```bash
npm install @pikku/addon-automizy
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-automizy`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactCreate` | Create a contact in a list | `automizy` |
| `contactDelete` | Delete a contact | `automizy` |
| `contactGet` | Get a contact | `automizy` |
| `contactGetAll` | Get all contacts in a list | `automizy` |
| `contactUpdate` | Update a contact in a list | `automizy` |
| `listCreate` | Create a list | `automizy` |
| `listDelete` | Delete a list | `automizy` |
| `listGet` | Get a list | `automizy` |
| `listGetAll` | Get all lists | `automizy` |
| `listUpdate` | Update a list | `automizy` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'automizy',
  package: '@pikku/addon-automizy',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
