---
format: md
title: Sendy
description: "Consume the Sendy email newsletter API"
sidebar_label: Sendy
---

# Sendy

Consume the Sendy email newsletter API

```bash
npm install @pikku/addon-sendy
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-sendy`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `campaignCreate` | Create a campaign | `sendy` |
| `subscriberAdd` | Add a subscriber to a list | `sendy` |
| `subscriberCount` | Count subscribers in a list | `sendy` |
| `subscriberDelete` | Delete a subscriber from a list | `sendy` |
| `subscriberRemove` | Unsubscribe a user from a list | `sendy` |
| `subscriberStatus` | Get the status of a subscriber | `sendy` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'sendy',
  package: '@pikku/addon-sendy',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
