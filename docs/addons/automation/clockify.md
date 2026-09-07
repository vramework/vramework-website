---
format: md
title: Clockify
description: "Consume the Clockify time-tracking REST API"
sidebar_label: Clockify
---

# Clockify

Consume the Clockify time-tracking REST API

```bash
npm install @pikku/addon-clockify
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-clockify`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `clientCreate` | Create a client | `clockify` |
| `clientDelete` | Delete a client | `clockify` |
| `clientGet` | Get a client | `clockify` |
| `clientGetAll` | Get all clients | `clockify` |
| `clientUpdate` | Update a client | `clockify` |
| `projectCreate` | Create a project | `clockify` |
| `projectDelete` | Delete a project | `clockify` |
| `projectGet` | Get a project | `clockify` |
| `projectGetAll` | Get all projects | `clockify` |
| `projectUpdate` | Update a project | `clockify` |
| `tagCreate` | Create a tag | `clockify` |
| `tagDelete` | Delete a tag | `clockify` |
| `tagGetAll` | Get all tags | `clockify` |
| `tagUpdate` | Update a tag | `clockify` |
| `taskCreate` | Create a task | `clockify` |
| `taskDelete` | Delete a task | `clockify` |
| `taskGet` | Get a task | `clockify` |
| `taskGetAll` | Get all tasks | `clockify` |
| `taskUpdate` | Update a task | `clockify` |
| `timeEntryCreate` | Create a time entry | `clockify` |
| `timeEntryDelete` | Delete a time entry | `clockify` |
| `timeEntryGet` | Get a time entry | `clockify` |
| `timeEntryUpdate` | Update a time entry | `clockify` |
| `userGetAll` | Get all users | `clockify` |
| `workspaceGetAll` | Get all workspaces | `clockify` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'clockify',
  package: '@pikku/addon-clockify',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
