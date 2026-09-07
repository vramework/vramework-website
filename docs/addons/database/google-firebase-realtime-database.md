---
format: md
title: Google Firebase Realtime Database
description: "firebase addon"
sidebar_label: Google Firebase Realtime Database
---

# Google Firebase Realtime Database

firebase addon

```bash
npm install @pikku/addon-google-firebase-realtime-database
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-google-firebase-realtime-database`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `create` | Create | `googleFirebaseRealtimeDatabase` |
| `deleteRecord` | Delete record | `googleFirebaseRealtimeDatabase` |
| `get` | Get | `googleFirebaseRealtimeDatabase` |
| `push` | Push | `googleFirebaseRealtimeDatabase` |
| `update` | Update | `googleFirebaseRealtimeDatabase` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-firebase-realtime-database',
  package: '@pikku/addon-google-firebase-realtime-database',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
