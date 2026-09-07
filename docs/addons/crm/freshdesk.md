---
format: md
title: Freshdesk
description: "Freshdesk addon"
sidebar_label: Freshdesk
---

# Freshdesk

Freshdesk addon

```bash
npm install @pikku/addon-freshdesk
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-freshdesk`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `contactCreate` | ContactCreate | `freshdesk` |
| `contactDelete` | ContactDelete | `freshdesk` |
| `contactGet` | ContactGet | `freshdesk` |
| `contactGetAll` | ContactGetAll | `freshdesk` |
| `contactUpdate` | ContactUpdate | `freshdesk` |
| `ticketCreate` | TicketCreate | `freshdesk` |
| `ticketDelete` | TicketDelete | `freshdesk` |
| `ticketGet` | TicketGet | `freshdesk` |
| `ticketGetAll` | TicketGetAll | `freshdesk` |
| `ticketUpdate` | TicketUpdate | `freshdesk` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'freshdesk',
  package: '@pikku/addon-freshdesk',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
