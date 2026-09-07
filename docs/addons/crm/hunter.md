---
format: md
title: Hunter
description: "Consume the Hunter email finder API"
sidebar_label: Hunter
---

# Hunter

Consume the Hunter email finder API

```bash
npm install @pikku/addon-hunter
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-hunter`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `domainSearch` | Get every email address found on the internet using a given domain name | `hunter` |
| `emailFinder` | Find the most likely email address from a domain, a first name and a last name | `hunter` |
| `emailVerifier` | Verify the deliverability of an email address | `hunter` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'hunter',
  package: '@pikku/addon-hunter',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
