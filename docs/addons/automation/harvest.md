---
format: md
title: Harvest
description: "Harvest addon"
sidebar_label: Harvest
---

# Harvest

Harvest addon

```bash
npm install @pikku/addon-harvest
```

Category: **Automation** · Version: `0.0.8` · Package: `@pikku/addon-harvest`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `clientCreate` | Create client | `harvest` |
| `clientDelete` | Client delete | `harvest` |
| `clientGet` | Client get | `harvest` |
| `clientGetAll` | List clients | `harvest` |
| `clientUpdate` | Client update | `harvest` |
| `companyGet` | Get company | `harvest` |
| `contactCreate` | Contact create | `harvest` |
| `contactDelete` | Contact delete | `harvest` |
| `contactGet` | Contact get | `harvest` |
| `contactGetAll` | Contact get all | `harvest` |
| `contactUpdate` | Contact update | `harvest` |
| `estimateCreate` | Estimate create | `harvest` |
| `estimateDelete` | Estimate delete | `harvest` |
| `estimateGet` | Estimate get | `harvest` |
| `estimateGetAll` | Estimate get all | `harvest` |
| `estimateUpdate` | Estimate update | `harvest` |
| `expenseCreate` | Expense create | `harvest` |
| `expenseDelete` | Expense delete | `harvest` |
| `expenseGet` | Expense get | `harvest` |
| `expenseGetAll` | Expense get all | `harvest` |
| `expenseUpdate` | Expense update | `harvest` |
| `invoiceCreate` | Invoice create | `harvest` |
| `invoiceDelete` | Invoice delete | `harvest` |
| `invoiceGet` | Invoice get | `harvest` |
| `invoiceGetAll` | Invoice get all | `harvest` |
| `invoiceUpdate` | Invoice update | `harvest` |
| `projectCreate` | Project create | `harvest` |
| `projectDelete` | Project delete | `harvest` |
| `projectGet` | Project get | `harvest` |
| `projectGetAll` | Project get all | `harvest` |
| `projectUpdate` | Project update | `harvest` |
| `taskCreate` | Task create | `harvest` |
| `taskDelete` | Task delete | `harvest` |
| `taskGet` | Task get | `harvest` |
| `taskGetAll` | Task get all | `harvest` |
| `taskUpdate` | Task update | `harvest` |
| `timeEntryCreateByDuration` | Time entry create by duration | `harvest` |
| `timeEntryCreateByStartEnd` | Time entry create by start end | `harvest` |
| `timeEntryDelete` | Time entry delete | `harvest` |
| `timeEntryDeleteExternal` | Time entry delete external | `harvest` |
| `timeEntryGet` | Time entry get | `harvest` |
| `timeEntryGetAll` | Time entry get all | `harvest` |
| `timeEntryRestartTime` | Time entry restart time | `harvest` |
| `timeEntryStopTime` | Time entry stop time | `harvest` |
| `timeEntryUpdate` | Time entry update | `harvest` |
| `userCreate` | User create | `harvest` |
| `userDelete` | User delete | `harvest` |
| `userGet` | User get | `harvest` |
| `userGetAll` | User get all | `harvest` |
| `userMe` | User me | `harvest` |
| `userUpdate` | User update | `harvest` |

## Secrets

- `HARVEST_OAUTH_APP` — OAuth2 app credentials for Harvest

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'harvest',
  package: '@pikku/addon-harvest',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
