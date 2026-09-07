---
format: md
title: Linkedin
description: "Consume LinkedIn API"
sidebar_label: Linkedin
---

# Linkedin

Consume LinkedIn API

```bash
npm install @pikku/addon-linkedin
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-linkedin`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `postCreate` | Create a new post | `linkedin` |

## Secrets

- `LINKEDIN_OAUTH_APP` — OAuth2 app credentials for LinkedIn

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'linkedin',
  package: '@pikku/addon-linkedin',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
