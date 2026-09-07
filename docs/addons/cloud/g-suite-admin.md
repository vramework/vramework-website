---
format: md
title: G Suite Admin
description: "Manage Google Workspace users and groups via the Admin SDK Directory API"
sidebar_label: G Suite Admin
---

# G Suite Admin

Manage Google Workspace users and groups via the Admin SDK Directory API

```bash
npm install @pikku/addon-g-suite-admin
```

Category: **Cloud** · Version: `0.0.8` · Package: `@pikku/addon-g-suite-admin`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `groupCreate` | Create a group | `gSuiteAdmin` |
| `groupDelete` | Delete a group | `gSuiteAdmin` |
| `groupGet` | Get a group | `gSuiteAdmin` |
| `groupGetAll` | List groups | `gSuiteAdmin` |
| `groupUpdate` | Update a group | `gSuiteAdmin` |
| `userAddToGroup` | Add a user to a group | `gSuiteAdmin` |
| `userCreate` | Create a user | `gSuiteAdmin` |
| `userDelete` | Delete a user | `gSuiteAdmin` |
| `userGet` | Get a user | `gSuiteAdmin` |
| `userGetAll` | List users | `gSuiteAdmin` |
| `userRemoveFromGroup` | Remove a user from a group | `gSuiteAdmin` |
| `userUpdate` | Update a user | `gSuiteAdmin` |

## Secrets

- `G_SUITE_ADMIN_OAUTH_APP` — OAuth2 app credentials for Google Workspace Admin

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'g-suite-admin',
  package: '@pikku/addon-g-suite-admin',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
