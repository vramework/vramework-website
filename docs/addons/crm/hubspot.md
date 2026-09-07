---
format: md
title: Hubspot
description: "HubSpot CRM for contacts, companies, deals, tickets, and engagements."
sidebar_label: Hubspot
---

# Hubspot

HubSpot CRM for contacts, companies, deals, tickets, and engagements.

```bash
npm install @pikku/addon-hubspot
```

Category: **CRM** · Version: `0.1.6` · Package: `@pikku/addon-hubspot`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyCreate` | Creates a new HubSpot company | `hubspot` |
| `companyDelete` | Deletes (archives) a HubSpot company | `hubspot` |
| `companyGet` | Gets a HubSpot company by ID | `hubspot` |
| `companyList` | Lists all HubSpot companies | `hubspot` |
| `companySearchByDomain` | Searches HubSpot companies by domain | `hubspot` |
| `companyUpdate` | Updates a HubSpot company | `hubspot` |
| `contactDelete` | Deletes (archives) a HubSpot contact | `hubspot` |
| `contactGet` | Gets a HubSpot contact by ID | `hubspot` |
| `contactList` | Lists all HubSpot contacts | `hubspot` |
| `contactListAdd` | Adds contacts to a HubSpot contact list | `hubspot` |
| `contactListRemove` | Removes contacts from a HubSpot contact list | `hubspot` |
| `contactSearch` | Searches HubSpot contacts | `hubspot` |
| `contactUpsert` | Creates or updates a HubSpot contact by email | `hubspot` |
| `dealCreate` | Creates a new HubSpot deal | `hubspot` |
| `dealDelete` | Deletes (archives) a HubSpot deal | `hubspot` |
| `dealGet` | Gets a HubSpot deal by ID | `hubspot` |
| `dealList` | Lists all HubSpot deals | `hubspot` |
| `dealSearch` | Searches HubSpot deals | `hubspot` |
| `dealUpdate` | Updates a HubSpot deal | `hubspot` |
| `engagementCreate` | Creates a HubSpot engagement (call, email, meeting, or task) | `hubspot` |
| `engagementDelete` | Deletes a HubSpot engagement | `hubspot` |
| `engagementGet` | Gets a HubSpot engagement by ID | `hubspot` |
| `engagementList` | Lists all HubSpot engagements | `hubspot` |
| `formGetFields` | Gets the fields of a HubSpot form | `hubspot` |
| `formSubmit` | Submits data to a HubSpot form | `hubspot` |
| `ticketCreate` | Creates a new HubSpot ticket | `hubspot` |
| `ticketDelete` | Deletes (archives) a HubSpot ticket | `hubspot` |
| `ticketGet` | Gets a HubSpot ticket by ID | `hubspot` |
| `ticketList` | Lists all HubSpot tickets | `hubspot` |
| `ticketUpdate` | Updates a HubSpot ticket | `hubspot` |

## Secrets

- `HUBSPOT_API_KEY` — HubSpot Private App Access Token

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'hubspot',
  package: '@pikku/addon-hubspot',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
