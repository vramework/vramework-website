---
format: md
title: Jotform
description: "JotForm forms and submissions."
sidebar_label: Jotform
---

# Jotform

JotForm forms and submissions.

```bash
npm install @pikku/addon-jotform
```

Category: **Forms** · Version: `0.1.6` · Package: `@pikku/addon-jotform`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `formsGet` | Get details of a specific form | `jotform` |
| `formsList` | List all forms for the user | `jotform` |
| `submissionsGet` | Get details of a specific submission | `jotform` |
| `submissionsList` | List submissions for a form | `jotform` |

## Secrets

- `JOTFORM_CREDENTIALS` — Online forms

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'jotform',
  package: '@pikku/addon-jotform',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
