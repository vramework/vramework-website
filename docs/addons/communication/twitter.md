---
format: md
title: Twitter
description: "Post, like, search tweets, send DMs, manage lists and users via the X API"
sidebar_label: Twitter
---

# Twitter

Post, like, search tweets, send DMs, manage lists and users via the X API

```bash
npm install @pikku/addon-twitter
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-twitter`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `directMessageCreate` | Send a direct message | `twitter` |
| `listAdd` | Add a member to a list | `twitter` |
| `tweetCreate` | Create a tweet | `twitter` |
| `tweetDelete` | Delete a tweet | `twitter` |
| `tweetLike` | Like a tweet | `twitter` |
| `tweetRetweet` | Retweet a tweet | `twitter` |
| `tweetSearch` | Search recent tweets | `twitter` |
| `userSearch` | Search a user by username | `twitter` |

## Secrets

- `TWITTER_OAUTH_APP` — OAuth2 app credentials for X (Twitter)

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'twitter',
  package: '@pikku/addon-twitter',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
