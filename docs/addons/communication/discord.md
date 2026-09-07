---
format: md
title: Discord
description: "Discord bot messaging and server management."
sidebar_label: Discord
---

# Discord

Discord bot messaging and server management.

```bash
npm install @pikku/addon-discord
```

Category: **Communication** · Version: `0.1.6` · Package: `@pikku/addon-discord`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `channelCreate` | Creates a new channel in a guild | `discord` |
| `channelDelete` | Deletes a channel | `discord` |
| `channelGet` | Gets a channel by ID | `discord` |
| `memberList` | Lists members in a guild | `discord` |
| `memberRoleAdd` | Adds a role to a guild member | `discord` |
| `memberRoleRemove` | Removes a role from a guild member | `discord` |
| `messageDelete` | Deletes a message from a channel | `discord` |
| `messageGet` | Gets a specific message from a channel | `discord` |
| `messageReact` | Adds a reaction to a message | `discord` |
| `messageSend` | Sends a message to a channel | `discord` |

## Secrets

- `DISCORD_BOT_TOKEN` — Discord bot token

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'discord',
  package: '@pikku/addon-discord',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
