---
format: md
title: Tapfiliate
description: "Consume the Tapfiliate affiliate marketing API"
sidebar_label: Tapfiliate
---

# Tapfiliate

Consume the Tapfiliate affiliate marketing API

```bash
npm install @pikku/addon-tapfiliate
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-tapfiliate`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `affiliateCreate` | Create an affiliate | `tapfiliate` |
| `affiliateDelete` | Delete an affiliate | `tapfiliate` |
| `affiliateGet` | Get an affiliate | `tapfiliate` |
| `affiliateGetAll` | List affiliates | `tapfiliate` |
| `affiliateMetadataAdd` | Add affiliate metadata | `tapfiliate` |
| `affiliateMetadataRemove` | Remove affiliate metadata | `tapfiliate` |
| `affiliateMetadataUpdate` | Update affiliate metadata | `tapfiliate` |
| `programAffiliateAdd` | Add an affiliate to a program | `tapfiliate` |
| `programAffiliateApprove` | Approve an affiliate for a program | `tapfiliate` |
| `programAffiliateDisapprove` | Disapprove an affiliate for a program | `tapfiliate` |
| `programAffiliateGet` | Get an affiliate in a program | `tapfiliate` |
| `programAffiliateGetAll` | List affiliates in a program | `tapfiliate` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'tapfiliate',
  package: '@pikku/addon-tapfiliate',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
