---
format: md
title: Postbin
description: "Consume the PostBin API"
sidebar_label: Postbin
---

# Postbin

Consume the PostBin API

```bash
npm install @pikku/addon-postbin
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-postbin`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `binCreate` | Create a bin | `postbin` |
| `binDelete` | Delete a bin | `postbin` |
| `binGet` | Get a bin | `postbin` |
| `requestGet` | Get a request | `postbin` |
| `requestSend` | Send a test request to the bin | `postbin` |
| `requestShift` | Remove the first request from a bin | `postbin` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'postbin',
  package: '@pikku/addon-postbin',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
