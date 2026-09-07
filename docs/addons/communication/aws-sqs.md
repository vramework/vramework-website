---
format: md
title: AWS Sqs
description: "awssqs addon"
sidebar_label: AWS Sqs
---

# AWS Sqs

awssqs addon

```bash
npm install @pikku/addon-aws-sqs
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-aws-sqs`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `sendMessage` | Send message | `awsSqs` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-sqs',
  package: '@pikku/addon-aws-sqs',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
