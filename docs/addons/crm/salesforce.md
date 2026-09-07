---
format: md
title: Salesforce
description: "Salesforce CRM API"
sidebar_label: Salesforce
---

# Salesforce

Salesforce CRM API

```bash
npm install @pikku/addon-salesforce
```

Category: **CRM** · Version: `0.0.8` · Package: `@pikku/addon-salesforce`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `accountAddNote` | Add note to account | `salesforce` |
| `accountCreate` | Create Account | `salesforce` |
| `accountDelete` | Delete Account | `salesforce` |
| `accountGet` | Get Account | `salesforce` |
| `accountGetAll` | Get many Account | `salesforce` |
| `accountGetSummary` | Get Account summary | `salesforce` |
| `accountUpdate` | Update Account | `salesforce` |
| `accountUpsert` | Create or update Account | `salesforce` |
| `attachmentCreate` | Create Attachment | `salesforce` |
| `attachmentDelete` | Delete Attachment | `salesforce` |
| `attachmentGet` | Get Attachment | `salesforce` |
| `attachmentGetAll` | Get many Attachment | `salesforce` |
| `attachmentGetSummary` | Get Attachment summary | `salesforce` |
| `attachmentUpdate` | Update Attachment | `salesforce` |
| `caseAddComment` | Add comment to case | `salesforce` |
| `caseCreate` | Create Case | `salesforce` |
| `caseDelete` | Delete Case | `salesforce` |
| `caseGet` | Get Case | `salesforce` |
| `caseGetAll` | Get many Case | `salesforce` |
| `caseGetSummary` | Get Case summary | `salesforce` |
| `caseUpdate` | Update Case | `salesforce` |
| `contactAddNote` | Add note to contact | `salesforce` |
| `contactAddToCampaign` | Add contact to campaign | `salesforce` |
| `contactCreate` | Create Contact | `salesforce` |
| `contactDelete` | Delete Contact | `salesforce` |
| `contactGet` | Get Contact | `salesforce` |
| `contactGetAll` | Get many Contact | `salesforce` |
| `contactGetSummary` | Get Contact summary | `salesforce` |
| `contactUpdate` | Update Contact | `salesforce` |
| `contactUpsert` | Create or update Contact | `salesforce` |
| `customObjectCreate` | Create CustomObject | `salesforce` |
| `customObjectDelete` | Delete CustomObject | `salesforce` |
| `customObjectGet` | Get CustomObject | `salesforce` |
| `customObjectGetAll` | Get many CustomObject | `salesforce` |
| `customObjectUpdate` | Update CustomObject | `salesforce` |
| `customObjectUpsert` | Create or update CustomObject | `salesforce` |
| `documentUpload` | Upload document | `salesforce` |
| `flowGetAll` | Get many flows | `salesforce` |
| `flowInvoke` | Invoke flow | `salesforce` |
| `leadAddNote` | Add note to lead | `salesforce` |
| `leadAddToCampaign` | Add lead to campaign | `salesforce` |
| `leadCreate` | Create Lead | `salesforce` |
| `leadDelete` | Delete Lead | `salesforce` |
| `leadGet` | Get Lead | `salesforce` |
| `leadGetAll` | Get many Lead | `salesforce` |
| `leadGetSummary` | Get Lead summary | `salesforce` |
| `leadUpdate` | Update Lead | `salesforce` |
| `leadUpsert` | Create or update Lead | `salesforce` |
| `opportunityAddNote` | Add note to opportunity | `salesforce` |
| `opportunityCreate` | Create Opportunity | `salesforce` |
| `opportunityDelete` | Delete Opportunity | `salesforce` |
| `opportunityGet` | Get Opportunity | `salesforce` |
| `opportunityGetAll` | Get many Opportunity | `salesforce` |
| `opportunityGetSummary` | Get Opportunity summary | `salesforce` |
| `opportunityUpdate` | Update Opportunity | `salesforce` |
| `opportunityUpsert` | Create or update Opportunity | `salesforce` |
| `searchQuery` | Search records | `salesforce` |
| `taskCreate` | Create Task | `salesforce` |
| `taskDelete` | Delete Task | `salesforce` |
| `taskGet` | Get Task | `salesforce` |
| `taskGetAll` | Get many Task | `salesforce` |
| `taskGetSummary` | Get Task summary | `salesforce` |
| `taskUpdate` | Update Task | `salesforce` |
| `userGet` | Get user | `salesforce` |
| `userGetAll` | Get many User | `salesforce` |

## Secrets

- `SALESFORCE_OAUTH_APP` — OAuth2 app credentials for Salesforce

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'salesforce',
  package: '@pikku/addon-salesforce',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
