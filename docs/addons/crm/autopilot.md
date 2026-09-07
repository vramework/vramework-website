---
format: md
title: Autopilot
description: "Consume the Autopilot marketing automation API"
sidebar_label: Autopilot
---

# Autopilot

Consume the Autopilot marketing automation API

```bash
npm install @pikku/addon-autopilot
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-autopilot`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactDelete` | Delete a contact | `autopilot` |
| `contactGet` | Get a contact | `autopilot` |
| `contactGetAll` | Get all contacts | `autopilot` |
| `contactJourneyAdd` | Add a contact to a journey | `autopilot` |
| `contactListAdd` | Add a contact to a list | `autopilot` |
| `contactListExist` | Check if a contact is in a list | `autopilot` |
| `contactListGetAll` | Get all contacts in a list | `autopilot` |
| `contactListRemove` | Remove a contact from a list | `autopilot` |
| `contactUpsert` | Create or update a contact | `autopilot` |
| `listCreate` | Create a list | `autopilot` |
| `listGetAll` | Get all lists | `autopilot` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'autopilot',
  package: '@pikku/addon-autopilot',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
