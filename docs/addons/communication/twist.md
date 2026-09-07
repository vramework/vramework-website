---
format: md
title: Twist
description: "Consume the Twist team messaging API"
sidebar_label: Twist
---

# Twist

Consume the Twist team messaging API

```bash
npm install @pikku/addon-twist
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-twist`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `channelArchive` | Archive a channel | `twist` |
| `channelCreate` | Add a channel | `twist` |
| `channelDelete` | Remove a channel | `twist` |
| `channelGet` | Get a channel | `twist` |
| `channelGetAll` | Get all channels | `twist` |
| `channelUnarchive` | Unarchive a channel | `twist` |
| `channelUpdate` | Update a channel | `twist` |
| `commentCreate` | Add a comment | `twist` |
| `commentDelete` | Remove a comment | `twist` |
| `commentGet` | Get a comment | `twist` |
| `commentGetAll` | Get all comments | `twist` |
| `commentUpdate` | Update a comment | `twist` |
| `messageCreate` | Add a message to a conversation | `twist` |
| `messageDelete` | Remove a message from a conversation | `twist` |
| `messageGet` | Get a conversation message | `twist` |
| `messageGetAll` | Get all conversation messages | `twist` |
| `messageUpdate` | Update a message in a conversation | `twist` |
| `threadCreate` | Add a thread | `twist` |
| `threadDelete` | Remove a thread | `twist` |
| `threadGet` | Get a thread | `twist` |
| `threadGetAll` | Get all threads | `twist` |
| `threadUpdate` | Update a thread | `twist` |

## Secrets

- `TWIST_OAUTH_APP` — OAuth2 app credentials for Twist

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'twist',
  package: '@pikku/addon-twist',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
