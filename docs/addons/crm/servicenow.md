---
format: md
title: Servicenow
description: "Consume the ServiceNow ITSM API"
sidebar_label: Servicenow
---

# Servicenow

Consume the ServiceNow ITSM API

```bash
npm install @pikku/addon-servicenow
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-servicenow`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `attachmentDelete` | Delete an attachment | `servicenow` |
| `attachmentGet` | Get an attachment record | `servicenow` |
| `attachmentGetAll` | Get all attachments | `servicenow` |
| `attachmentUpload` | Upload an attachment | `servicenow` |
| `businessServiceGetAll` | Get all business services | `servicenow` |
| `configurationItemGetAll` | Get all configuration items | `servicenow` |
| `departmentGetAll` | Get all departments | `servicenow` |
| `dictionaryGetAll` | Get all dictionary records | `servicenow` |
| `incidentCreate` | Create an incident | `servicenow` |
| `incidentDelete` | Delete an incident | `servicenow` |
| `incidentGet` | Get an incident | `servicenow` |
| `incidentGetAll` | Get all incidents | `servicenow` |
| `incidentUpdate` | Update an incident | `servicenow` |
| `tableRecordCreate` | Create a table record | `servicenow` |
| `tableRecordDelete` | Delete a table record | `servicenow` |
| `tableRecordGet` | Get a table record | `servicenow` |
| `tableRecordGetAll` | Get all table records | `servicenow` |
| `tableRecordUpdate` | Update a table record | `servicenow` |
| `userCreate` | Create a user | `servicenow` |
| `userDelete` | Delete a user | `servicenow` |
| `userGet` | Get a user | `servicenow` |
| `userGetAll` | Get all users | `servicenow` |
| `userGroupGetAll` | Get all user groups | `servicenow` |
| `userRoleGetAll` | Get all user roles | `servicenow` |
| `userUpdate` | Update a user | `servicenow` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'servicenow',
  package: '@pikku/addon-servicenow',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
