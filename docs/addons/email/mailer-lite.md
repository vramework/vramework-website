---
format: md
title: Mailer Lite
description: "Consume the MailerLite email marketing API"
sidebar_label: Mailer Lite
---

# Mailer Lite

Consume the MailerLite email marketing API

```bash
npm install @pikku/addon-mailer-lite
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-mailer-lite`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `groupCreate` | Create a group | `mailerLite` |
| `groupGetAll` | List groups | `mailerLite` |
| `subscriberCreate` | Create or upsert a subscriber | `mailerLite` |
| `subscriberGet` | Get a single subscriber | `mailerLite` |
| `subscriberGetAll` | List subscribers | `mailerLite` |
| `subscriberUpdate` | Update a subscriber | `mailerLite` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mailer-lite',
  package: '@pikku/addon-mailer-lite',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
