---
format: md
title: Formstack
description: "Formstack forms and submissions."
sidebar_label: Formstack
---

# Formstack

Formstack forms and submissions.

```bash
npm install @pikku/addon-formstack
```

Category: **Forms** · Version: `0.1.6` · Package: `@pikku/addon-formstack`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `formsGet` | Get details of a specific form | `formstack` |
| `formsList` | List all Formstack forms | `formstack` |
| `submissionsList` | List submissions for a form | `formstack` |

## Secrets

- `FORMSTACK_CREDENTIALS` — Form builder

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'formstack',
  package: '@pikku/addon-formstack',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
