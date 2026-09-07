---
format: md
title: Convertkit
description: "Consume the ConvertKit API"
sidebar_label: Convertkit
---

# Convertkit

Consume the ConvertKit API

```bash
npm install @pikku/addon-convertkit
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-convertkit`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `customFieldCreate` | CustomFieldCreate | `convertkit` |
| `customFieldDelete` | CustomFieldDelete | `convertkit` |
| `customFieldGet` | CustomFieldGet | `convertkit` |
| `customFieldGetAll` | CustomFieldGetAll | `convertkit` |
| `customFieldUpdate` | CustomFieldUpdate | `convertkit` |
| `formAddSubscriber` | FormAddSubscriber | `convertkit` |
| `formGetAll` | FormGetAll | `convertkit` |
| `formGetSubscriptions` | FormGetSubscriptions | `convertkit` |
| `sequenceAddSubscriber` | SequenceAddSubscriber | `convertkit` |
| `sequenceGetAll` | SequenceGetAll | `convertkit` |
| `sequenceGetSubscriptions` | SequenceGetSubscriptions | `convertkit` |
| `tagCreate` | TagCreate | `convertkit` |
| `tagGetAll` | TagGetAll | `convertkit` |
| `tagSubscriberAdd` | TagSubscriberAdd | `convertkit` |
| `tagSubscriberDelete` | TagSubscriberDelete | `convertkit` |
| `tagSubscriberGetAll` | TagSubscriberGetAll | `convertkit` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'convertkit',
  package: '@pikku/addon-convertkit',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
