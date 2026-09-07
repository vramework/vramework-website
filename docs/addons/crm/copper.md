---
format: md
title: Copper
description: "Consume the Copper CRM API"
sidebar_label: Copper
---

# Copper

Consume the Copper CRM API

```bash
npm install @pikku/addon-copper
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-copper`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyCreate` | Create a company | `copper` |
| `companyDelete` | Delete a company | `copper` |
| `companyGet` | Get a company | `copper` |
| `companyGetAll` | List companies | `copper` |
| `companyUpdate` | Update a company | `copper` |
| `customerSourceGetAll` | List customer sources | `copper` |
| `leadCreate` | Create a lead | `copper` |
| `leadDelete` | Delete a lead | `copper` |
| `leadGet` | Get a lead | `copper` |
| `leadGetAll` | List leads | `copper` |
| `leadUpdate` | Update a lead | `copper` |
| `opportunityCreate` | Create an opportunity | `copper` |
| `opportunityDelete` | Delete an opportunity | `copper` |
| `opportunityGet` | Get an opportunity | `copper` |
| `opportunityGetAll` | List opportunities | `copper` |
| `opportunityUpdate` | Update an opportunity | `copper` |
| `personCreate` | Create a person | `copper` |
| `personDelete` | Delete a person | `copper` |
| `personGet` | Get a person | `copper` |
| `personGetAll` | List people | `copper` |
| `personUpdate` | Update a person | `copper` |
| `projectCreate` | Create a project | `copper` |
| `projectDelete` | Delete a project | `copper` |
| `projectGet` | Get a project | `copper` |
| `projectGetAll` | List projects | `copper` |
| `projectUpdate` | Update a project | `copper` |
| `taskCreate` | Create a task | `copper` |
| `taskDelete` | Delete a task | `copper` |
| `taskGet` | Get a task | `copper` |
| `taskGetAll` | List tasks | `copper` |
| `taskUpdate` | Update a task | `copper` |
| `userGetAll` | List users | `copper` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'copper',
  package: '@pikku/addon-copper',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
