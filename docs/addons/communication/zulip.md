---
format: md
title: Zulip
description: "Consume the Zulip chat API"
sidebar_label: Zulip
---

# Zulip

Consume the Zulip chat API

```bash
npm install @pikku/addon-zulip
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-zulip`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `messageDelete` | Delete a message | `zulip` |
| `messageGet` | Get a message | `zulip` |
| `messageSendPrivate` | Send a private message | `zulip` |
| `messageSendStream` | Send a stream message | `zulip` |
| `messageUpdate` | Update a message | `zulip` |
| `messageUploadFile` | Upload a file | `zulip` |
| `streamCreate` | Create a stream | `zulip` |
| `streamDelete` | Delete a stream | `zulip` |
| `streamGetAll` | Get all streams | `zulip` |
| `streamGetSubscribed` | Get subscribed streams | `zulip` |
| `streamUpdate` | Update a stream | `zulip` |
| `userCreate` | Create a user | `zulip` |
| `userDeactivate` | Deactivate a user | `zulip` |
| `userGet` | Get a user | `zulip` |
| `userGetAll` | Get all users | `zulip` |
| `userUpdate` | Update a user | `zulip` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'zulip',
  package: '@pikku/addon-zulip',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
