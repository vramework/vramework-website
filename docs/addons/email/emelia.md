---
format: md
title: Emelia
description: "Consume the Emelia cold email API"
sidebar_label: Emelia
---

# Emelia

Consume the Emelia cold email API

```bash
npm install @pikku/addon-emelia
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-emelia`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `campaignAddContact` | Add a contact to a campaign | `emelia` |
| `campaignCreate` | Create a campaign | `emelia` |
| `campaignDuplicate` | Duplicate a campaign | `emelia` |
| `campaignGet` | Get a campaign | `emelia` |
| `campaignGetAll` | Get many campaigns | `emelia` |
| `campaignPause` | Pause a campaign | `emelia` |
| `campaignStart` | Start a campaign | `emelia` |
| `contactListAdd` | Add a contact to a contact list | `emelia` |
| `contactListGetAll` | Get many contact lists | `emelia` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'emelia',
  package: '@pikku/addon-emelia',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
