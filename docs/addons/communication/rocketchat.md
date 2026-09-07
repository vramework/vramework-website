---
format: md
title: Rocketchat
description: "RocketChat integration for Pikku"
sidebar_label: Rocketchat
---

# Rocketchat

RocketChat integration for Pikku

```bash
npm install @pikku/addon-rocketchat
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-rocketchat`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `chatPostMessage` | Post a message to a channel or direct message | `rocketchat` |
| `dmMessages` | Retrieve a list of direct messages | `rocketchat` |
| `subscriptionsGet` | Retrieve a list of subscriptions | `rocketchat` |
| `subscriptionsRead` | Mark a subscription as read | `rocketchat` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'rocketchat',
  package: '@pikku/addon-rocketchat',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
