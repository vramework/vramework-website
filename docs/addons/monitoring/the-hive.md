---
format: md
title: The Hive
description: "Consume TheHive security incident response API"
sidebar_label: The Hive
---

# The Hive

Consume TheHive security incident response API

```bash
npm install @pikku/addon-the-hive
```

Category: **Monitoring** · Version: `0.0.7` · Package: `@pikku/addon-the-hive`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `alertCount` | Count alerts | `theHive` |
| `alertCreate` | Create an alert | `theHive` |
| `alertExecuteResponder` | Execute a responder on an alert | `theHive` |
| `alertGet` | Get an alert | `theHive` |
| `alertGetAll` | Get many alerts | `theHive` |
| `alertMarkAsRead` | Mark an alert as read | `theHive` |
| `alertMarkAsUnread` | Mark an alert as unread | `theHive` |
| `alertMerge` | Merge an alert into an existing case | `theHive` |
| `alertPromote` | Promote an alert into a case | `theHive` |
| `alertUpdate` | Update an alert | `theHive` |
| `caseCount` | Count cases | `theHive` |
| `caseCreate` | Create a case | `theHive` |
| `caseExecuteResponder` | Execute a responder on a case | `theHive` |
| `caseGet` | Get a case | `theHive` |
| `caseGetAll` | Get many cases | `theHive` |
| `caseUpdate` | Update a case | `theHive` |
| `logCreate` | Create a log | `theHive` |
| `logExecuteResponder` | Execute a responder on a log | `theHive` |
| `logGet` | Get a log | `theHive` |
| `logGetAll` | Get many logs | `theHive` |
| `observableCount` | Count observables | `theHive` |
| `observableCreate` | Create an observable | `theHive` |
| `observableExecuteAnalyzer` | Execute an analyzer on an observable | `theHive` |
| `observableExecuteResponder` | Execute a responder on an observable | `theHive` |
| `observableGet` | Get an observable | `theHive` |
| `observableGetAll` | Get many observables | `theHive` |
| `observableSearch` | Search observables | `theHive` |
| `observableUpdate` | Update an observable | `theHive` |
| `taskCount` | Count tasks | `theHive` |
| `taskCreate` | Create a task | `theHive` |
| `taskExecuteResponder` | Execute a responder on a task | `theHive` |
| `taskGet` | Get a task | `theHive` |
| `taskGetAll` | Get many tasks | `theHive` |
| `taskSearch` | Search tasks | `theHive` |
| `taskUpdate` | Update a task | `theHive` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'the-hive',
  package: '@pikku/addon-the-hive',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
