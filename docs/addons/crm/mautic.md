---
format: md
title: Mautic
description: "Consume the Mautic marketing automation API"
sidebar_label: Mautic
---

# Mautic

Consume the Mautic marketing automation API

```bash
npm install @pikku/addon-mautic
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-mautic`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `campaignContactAdd` | Add a contact to a campaign | `mautic` |
| `campaignContactRemove` | Remove a contact from a campaign | `mautic` |
| `companyContactAdd` | Add a contact to a company | `mautic` |
| `companyContactRemove` | Remove a contact from a company | `mautic` |
| `companyCreate` | Create a company | `mautic` |
| `companyDelete` | Delete a company | `mautic` |
| `companyGet` | Get a company | `mautic` |
| `companyGetAll` | List companies | `mautic` |
| `companyUpdate` | Update a company | `mautic` |
| `contactCreate` | Create a contact | `mautic` |
| `contactDelete` | Delete a contact | `mautic` |
| `contactEditContactPoint` | Add or subtract points for a contact | `mautic` |
| `contactEditDoNotContactList` | Edit the do-not-contact list for a contact | `mautic` |
| `contactGet` | Get a contact | `mautic` |
| `contactGetAll` | List contacts | `mautic` |
| `contactSegmentAdd` | Add a contact to a segment | `mautic` |
| `contactSegmentRemove` | Remove a contact from a segment | `mautic` |
| `contactSendEmail` | Send an email to a contact | `mautic` |
| `contactUpdate` | Update a contact | `mautic` |
| `segmentEmailSend` | Send an email to a segment | `mautic` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mautic',
  package: '@pikku/addon-mautic',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
