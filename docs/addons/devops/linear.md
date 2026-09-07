---
format: md
title: Linear
description: "Consume the Linear issue tracking GraphQL API"
sidebar_label: Linear
---

# Linear

Consume the Linear issue tracking GraphQL API

```bash
npm install @pikku/addon-linear
```

Category: **DevOps** · Version: `0.0.7` · Package: `@pikku/addon-linear`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `commentAddComment` | Add a comment to an issue | `linear` |
| `issueAddLink` | Add a link to an issue | `linear` |
| `issueCreate` | Create an issue | `linear` |
| `issueDelete` | Delete an issue | `linear` |
| `issueGet` | Get an issue | `linear` |
| `issueGetAll` | Get many issues | `linear` |
| `issueUpdate` | Update an issue | `linear` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'linear',
  package: '@pikku/addon-linear',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
