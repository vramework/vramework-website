---
format: md
title: AWS SNS
description: "awssns addon"
sidebar_label: AWS SNS
---

# AWS SNS

awssns addon

```bash
npm install @pikku/addon-aws-sns
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-aws-sns`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `publish` | Publish | `awsSns` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-sns',
  package: '@pikku/addon-aws-sns',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
