---
format: md
title: Zammad
description: "Consume the Zammad helpdesk API"
sidebar_label: Zammad
---

# Zammad

Consume the Zammad helpdesk API

```bash
npm install @pikku/addon-zammad
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-zammad`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `groupCreate` | Create a group | `zammad` |
| `groupDelete` | Delete a group | `zammad` |
| `groupGet` | Get a group | `zammad` |
| `groupGetAll` | Get all groups | `zammad` |
| `groupUpdate` | Update a group | `zammad` |
| `organizationCreate` | Create an organization | `zammad` |
| `organizationDelete` | Delete an organization | `zammad` |
| `organizationGet` | Get an organization | `zammad` |
| `organizationGetAll` | Get all organizations | `zammad` |
| `organizationUpdate` | Update an organization | `zammad` |
| `ticketCreate` | Create a ticket | `zammad` |
| `ticketDelete` | Delete a ticket | `zammad` |
| `ticketGet` | Get a ticket | `zammad` |
| `ticketGetAll` | Get all tickets | `zammad` |
| `ticketUpdate` | Update a ticket | `zammad` |
| `userCreate` | Create a user | `zammad` |
| `userDelete` | Delete a user | `zammad` |
| `userGet` | Get a user | `zammad` |
| `userGetAll` | Get all users | `zammad` |
| `userGetSelf` | Get the current user | `zammad` |
| `userUpdate` | Update a user | `zammad` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'zammad',
  package: '@pikku/addon-zammad',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
