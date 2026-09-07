---
format: md
title: Agile CRM
description: "Consume the Agile CRM API (contacts, companies, deals)"
sidebar_label: Agile CRM
---

# Agile CRM

Consume the Agile CRM API (contacts, companies, deals)

```bash
npm install @pikku/addon-agile-crm
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-agile-crm`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyCreate` | Create a company | `agileCrm` |
| `companyDelete` | Delete a company | `agileCrm` |
| `companyGet` | Get a company | `agileCrm` |
| `companyGetAll` | Get many companies | `agileCrm` |
| `companyUpdate` | Update a company | `agileCrm` |
| `contactCreate` | Create a contact | `agileCrm` |
| `contactDelete` | Delete a contact | `agileCrm` |
| `contactGet` | Get a contact | `agileCrm` |
| `contactGetAll` | Get many contacts | `agileCrm` |
| `contactUpdate` | Update a contact | `agileCrm` |
| `dealCreate` | Create a deal | `agileCrm` |
| `dealDelete` | Delete a deal | `agileCrm` |
| `dealGet` | Get a deal | `agileCrm` |
| `dealGetAll` | Get many deals | `agileCrm` |
| `dealUpdate` | Update a deal | `agileCrm` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'agile-crm',
  package: '@pikku/addon-agile-crm',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
