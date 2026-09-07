---
format: md
title: Google Contacts
description: "Consume the Google Contacts (People) API"
sidebar_label: Google Contacts
---

# Google Contacts

Consume the Google Contacts (People) API

```bash
npm install @pikku/addon-google-contacts
```

Category: **CRM** · Version: `0.0.8` · Package: `@pikku/addon-google-contacts`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactCreate` | Create a contact | `googleContacts` |
| `contactDelete` | Delete a contact | `googleContacts` |
| `contactGet` | Get a contact | `googleContacts` |
| `contactGetAll` | Get many contacts | `googleContacts` |
| `contactUpdate` | Update a contact | `googleContacts` |

## Secrets

- `GOOGLE_CONTACTS_OAUTH_APP` — OAuth2 app credentials for Google Contacts

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-contacts',
  package: '@pikku/addon-google-contacts',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
