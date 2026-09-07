---
format: md
title: Keap
description: "Consume the Keap (Infusionsoft) CRM API"
sidebar_label: Keap
---

# Keap

Consume the Keap (Infusionsoft) CRM API

```bash
npm install @pikku/addon-keap
```

Category: **CRM** · Version: `0.0.8` · Package: `@pikku/addon-keap`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyCreate` | Create a company | `keap` |
| `companyGetAll` | List companies | `keap` |
| `contactDelete` | Delete a contact | `keap` |
| `contactGet` | Get a contact | `keap` |
| `contactGetAll` | List contacts | `keap` |
| `contactTagCreate` | Apply tags to a contact | `keap` |
| `contactTagDelete` | Remove tags from a contact | `keap` |
| `contactTagGetAll` | List tags applied to a contact | `keap` |
| `contactUpsert` | Create or update a contact | `keap` |
| `emailCreateRecord` | Create an email record | `keap` |
| `emailDeleteRecord` | Delete an email record | `keap` |
| `emailGetAll` | List emails | `keap` |
| `emailSend` | Send an email | `keap` |
| `fileDelete` | Delete a file | `keap` |
| `fileGetAll` | List files | `keap` |
| `fileUpload` | Upload a file | `keap` |
| `noteCreate` | Create a note | `keap` |
| `noteDelete` | Delete a note | `keap` |
| `noteGet` | Get a note | `keap` |
| `noteGetAll` | List notes | `keap` |
| `noteUpdate` | Update a note | `keap` |
| `orderCreate` | Create an order | `keap` |
| `orderDelete` | Delete an order | `keap` |
| `orderGet` | Get an order | `keap` |
| `orderGetAll` | List orders | `keap` |
| `productCreate` | Create a product | `keap` |
| `productDelete` | Delete a product | `keap` |
| `productGet` | Get a product | `keap` |
| `productGetAll` | List products | `keap` |

## Secrets

- `KEAP_OAUTH_APP` — OAuth2 app credentials for Keap

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'keap',
  package: '@pikku/addon-keap',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
