---
format: md
title: Onfleet
description: "Onfleet addon"
sidebar_label: Onfleet
---

# Onfleet

Onfleet addon

```bash
npm install @pikku/addon-onfleet
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-onfleet`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `adminCreate` | Create an admin | `onfleet` |
| `adminDelete` | Delete an admin | `onfleet` |
| `adminGetAll` | Get many admins | `onfleet` |
| `adminUpdate` | Update an admin | `onfleet` |
| `containerAddTask` | Add tasks to a container | `onfleet` |
| `containerGet` | Get a container | `onfleet` |
| `containerUpdateTask` | Update tasks on a container | `onfleet` |
| `destinationCreate` | Create a destination | `onfleet` |
| `destinationGet` | Get a destination | `onfleet` |
| `hubCreate` | Create a hub | `onfleet` |
| `hubGetAll` | Get many hubs | `onfleet` |
| `hubUpdate` | Update a hub | `onfleet` |
| `organizationGet` | Get my organization | `onfleet` |
| `organizationGetDelegatee` | Get a delegatee organization | `onfleet` |
| `recipientCreate` | Create a recipient | `onfleet` |
| `recipientGet` | Get a recipient | `onfleet` |
| `recipientUpdate` | Update a recipient | `onfleet` |
| `taskClone` | Clone a task | `onfleet` |
| `taskComplete` | Complete a task | `onfleet` |
| `taskCreate` | Create a task | `onfleet` |
| `taskDelete` | Delete a task | `onfleet` |
| `taskGet` | Get a task | `onfleet` |
| `taskGetAll` | Get many tasks | `onfleet` |
| `taskUpdate` | Update a task | `onfleet` |
| `teamAutoDispatch` | Auto-dispatch a team | `onfleet` |
| `teamCreate` | Create a team | `onfleet` |
| `teamDelete` | Delete a team | `onfleet` |
| `teamGet` | Get a team | `onfleet` |
| `teamGetAll` | Get many teams | `onfleet` |
| `teamGetTimeEstimates` | Get time estimates for a team | `onfleet` |
| `teamUpdate` | Update a team | `onfleet` |
| `workerCreate` | Create a worker | `onfleet` |
| `workerDelete` | Delete a worker | `onfleet` |
| `workerGet` | Get a worker | `onfleet` |
| `workerGetAll` | Get many workers | `onfleet` |
| `workerGetSchedule` | Get the schedule for a worker | `onfleet` |
| `workerUpdate` | Update a worker | `onfleet` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'onfleet',
  package: '@pikku/addon-onfleet',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
