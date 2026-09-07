---
format: md
title: AWS Lambda
description: "awslambda addon"
sidebar_label: AWS Lambda
---

# AWS Lambda

awslambda addon

```bash
npm install @pikku/addon-aws-lambda
```

Category: **Cloud** · Version: `0.0.7` · Package: `@pikku/addon-aws-lambda`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `invoke` | Invoke | `awsLambda` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-lambda',
  package: '@pikku/addon-aws-lambda',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
