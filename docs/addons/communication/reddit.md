---
format: md
title: Reddit
description: "Consume the Reddit API"
sidebar_label: Reddit
---

# Reddit

Consume the Reddit API

```bash
npm install @pikku/addon-reddit
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-reddit`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `postCommentCreate` | Create a comment on a post | `reddit` |
| `postCommentDelete` | Delete a comment | `reddit` |
| `postCommentGetAll` | Get all comments on a post | `reddit` |
| `postCommentReply` | Reply to a comment | `reddit` |
| `postCreate` | Create a post | `reddit` |
| `postDelete` | Delete a post | `reddit` |
| `postGet` | Get a post | `reddit` |
| `postGetAll` | Get all posts in a subreddit | `reddit` |
| `postSearch` | Search posts | `reddit` |
| `profileGet` | Get the authenticated user's profile | `reddit` |
| `subredditGet` | Get information about a subreddit | `reddit` |
| `subredditGetAll` | Get all subreddits | `reddit` |
| `userGet` | Get information about a user | `reddit` |

## Secrets

- `REDDIT_OAUTH_APP` — OAuth2 app credentials for Reddit

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'reddit',
  package: '@pikku/addon-reddit',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
