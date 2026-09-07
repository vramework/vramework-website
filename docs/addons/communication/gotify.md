---
format: md
title: Gotify
description: "Gotify addon"
sidebar_label: Gotify
---

# Gotify

Gotify addon

```bash
npm install @pikku/addon-gotify
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-gotify`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `messageCreate` | Create a message | `gotify` |
| `messageDelete` | Delete a message | `gotify` |
| `messageGetAll` | Get many messages | `gotify` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'gotify',
  package: '@pikku/addon-gotify',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
