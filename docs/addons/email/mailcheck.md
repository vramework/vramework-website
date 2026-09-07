---
format: md
title: Mailcheck
description: "Mailcheck addon"
sidebar_label: Mailcheck
---

# Mailcheck

Mailcheck addon

```bash
npm install @pikku/addon-mailcheck
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-mailcheck`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `emailCheck` | Email check | `mailcheck` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mailcheck',
  package: '@pikku/addon-mailcheck',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
