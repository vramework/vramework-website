---
format: md
title: Telegram
description: "Telegram Bot API for messaging and chat management."
sidebar_label: Telegram
---

# Telegram

Telegram Bot API for messaging and chat management.

```bash
npm install @pikku/addon-telegram
```

Category: **Communication** · Version: `0.1.6` · Package: `@pikku/addon-telegram`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `callbackAnswerInlineQuery` | Send answers to an inline query from an inline bot | `telegram` |
| `callbackAnswerQuery` | Send an answer to a callback query sent from an inline keyboard | `telegram` |
| `chatGet` | Get up to date information about a chat | `telegram` |
| `chatGetAdministrators` | Get a list of administrators in a chat | `telegram` |
| `chatGetMember` | Get information about a member of a chat | `telegram` |
| `chatLeave` | Leave a group, supergroup or channel | `telegram` |
| `chatSetDescription` | Change the description of a group, supergroup or channel | `telegram` |
| `chatSetTitle` | Change the title of a group, supergroup or channel | `telegram` |
| `fileGet` | Get basic information about a file and prepare it for downloading | `telegram` |
| `messageDelete` | Deletes a message from a chat | `telegram` |
| `messageEdit` | Edits a text message | `telegram` |
| `messagePin` | Pins a message in a chat | `telegram` |
| `messageSend` | Sends a text message to a chat | `telegram` |
| `messageSendAnimation` | Sends an animation (GIF or H.264/MPEG-4 AVC video without sound) to a chat | `telegram` |
| `messageSendAudio` | Sends an audio file to a chat | `telegram` |
| `messageSendChatAction` | Sends a chat action (typing indicator, uploading, etc.) to show bot activity | `telegram` |
| `messageSendDocument` | Sends a document to a chat | `telegram` |
| `messageSendLocation` | Sends a location to a chat | `telegram` |
| `messageSendMediaGroup` | Sends a group of photos or videos as an album | `telegram` |
| `messageSendPhoto` | Sends a photo to a chat | `telegram` |
| `messageSendSticker` | Sends a sticker to a chat | `telegram` |
| `messageSendVideo` | Sends a video file to a chat | `telegram` |
| `messageUnpin` | Unpins a message in a chat | `telegram` |
| `onUpdate` | Triggers when a Telegram update is received (message, callback query, inline query, etc.) | `telegram` |

## Secrets

- `TELEGRAM_BOT_TOKEN` — Telegram bot token from @BotFather

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'telegram',
  package: '@pikku/addon-telegram',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
