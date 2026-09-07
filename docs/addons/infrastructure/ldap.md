---
format: md
title: Ldap
description: "LDAP directory operations."
sidebar_label: Ldap
---

# Ldap

LDAP directory operations.

```bash
npm install @pikku/addon-ldap
```

Category: **Infrastructure** · Version: `0.1.6` · Package: `@pikku/addon-ldap`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `ldapCompare` | Compare an attribute value in an LDAP entry | `ldapClient` |
| `ldapCreate` | Create a new entry in an LDAP directory | `ldapClient` |
| `ldapDelete` | Delete an entry from an LDAP directory | `ldapClient` |
| `ldapSearch` | Search for entries in an LDAP directory | `ldapClient` |
| `ldapUpdate` | Modify an existing entry in an LDAP directory | `ldapClient` |

## Secrets

- `LDAP_CREDENTIALS` — LDAP server connection credentials

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'ldap',
  package: '@pikku/addon-ldap',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
