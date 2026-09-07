---
format: md
title: Odoo
description: "Odoo ERP via JSON-RPC"
sidebar_label: Odoo
---

# Odoo

Odoo ERP via JSON-RPC

```bash
npm install @pikku/addon-odoo
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-odoo`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `activityCreate` | Create activity | `odoo` |
| `activityDelete` | Delete activity | `odoo` |
| `activityGet` | Get activity | `odoo` |
| `activityGetAll` | GetAll activity | `odoo` |
| `activityUpdate` | Update activity | `odoo` |
| `contactCreate` | Create contact | `odoo` |
| `contactDelete` | Delete contact | `odoo` |
| `contactGet` | Get contact | `odoo` |
| `contactGetAll` | GetAll contact | `odoo` |
| `contactUpdate` | Update contact | `odoo` |
| `customCreate` | Create custom | `odoo` |
| `customDelete` | Delete custom | `odoo` |
| `customGet` | Get custom | `odoo` |
| `customGetAll` | GetAll custom | `odoo` |
| `customUpdate` | Update custom | `odoo` |
| `noteCreate` | Create note | `odoo` |
| `noteDelete` | Delete note | `odoo` |
| `noteGet` | Get note | `odoo` |
| `noteGetAll` | GetAll note | `odoo` |
| `noteUpdate` | Update note | `odoo` |
| `opportunityCreate` | Create opportunity | `odoo` |
| `opportunityDelete` | Delete opportunity | `odoo` |
| `opportunityGet` | Get opportunity | `odoo` |
| `opportunityGetAll` | GetAll opportunity | `odoo` |
| `opportunityUpdate` | Update opportunity | `odoo` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'odoo',
  package: '@pikku/addon-odoo',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
