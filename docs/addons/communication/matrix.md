---
format: md
title: Matrix
description: "Consume the Matrix chat API"
sidebar_label: Matrix
---

# Matrix

Consume the Matrix chat API

```bash
npm install @pikku/addon-matrix
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-matrix`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `accountWhoami` | Get the current user account | `matrix` |
| `eventGet` | Get a single event | `matrix` |
| `mediaUpload` | Upload media | `matrix` |
| `messageGetAll` | Get messages from a room | `matrix` |
| `messageSend` | Send a message to a room | `matrix` |
| `roomCreate` | Create a room | `matrix` |
| `roomInvite` | Invite a user to a room | `matrix` |
| `roomJoin` | Join a room | `matrix` |
| `roomKick` | Kick a user from a room | `matrix` |
| `roomLeave` | Leave a room | `matrix` |
| `roomMemberGetAll` | Get members of a room | `matrix` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'matrix',
  package: '@pikku/addon-matrix',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
