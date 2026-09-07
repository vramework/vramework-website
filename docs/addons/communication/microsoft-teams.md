---
format: md
title: Microsoft Teams
description: "Consume the Microsoft Teams (Graph) API"
sidebar_label: Microsoft Teams
---

# Microsoft Teams

Consume the Microsoft Teams (Graph) API

```bash
npm install @pikku/addon-microsoft-teams
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-microsoft-teams`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `channelCreate` | Create a channel | `microsoftTeams` |
| `channelDelete` | Delete a channel | `microsoftTeams` |
| `channelGet` | Get a channel | `microsoftTeams` |
| `channelGetAll` | Get many channels | `microsoftTeams` |
| `channelMessageCreate` | Create a channel message | `microsoftTeams` |
| `channelMessageGetAll` | Get many channel messages | `microsoftTeams` |
| `channelUpdate` | Update a channel | `microsoftTeams` |
| `chatMessageCreate` | Create a chat message | `microsoftTeams` |
| `chatMessageGet` | Get a chat message | `microsoftTeams` |
| `chatMessageGetAll` | Get many chat messages | `microsoftTeams` |
| `chatMessageSendAndWait` | Send a chat message and wait for response | `microsoftTeams` |
| `taskCreate` | Create a task | `microsoftTeams` |
| `taskDelete` | Delete a task | `microsoftTeams` |
| `taskGet` | Get a task | `microsoftTeams` |
| `taskGetAll` | Get many tasks | `microsoftTeams` |
| `taskUpdate` | Update a task | `microsoftTeams` |

## Secrets

- `MICROSOFT_TEAMS_OAUTH_APP` — OAuth2 app credentials for Microsoft Teams

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'microsoft-teams',
  package: '@pikku/addon-microsoft-teams',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
