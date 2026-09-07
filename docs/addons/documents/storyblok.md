---
format: md
title: Storyblok
description: "Consume the Storyblok headless CMS Management API"
sidebar_label: Storyblok
---

# Storyblok

Consume the Storyblok headless CMS Management API

```bash
npm install @pikku/addon-storyblok
```

Category: **Documents** · Version: `0.0.7` · Package: `@pikku/addon-storyblok`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `storyDelete` | Delete a story | `storyblok` |
| `storyGet` | Get a story | `storyblok` |
| `storyGetAll` | Get many stories | `storyblok` |
| `storyPublish` | Publish a story | `storyblok` |
| `storyUnpublish` | Unpublish a story | `storyblok` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'storyblok',
  package: '@pikku/addon-storyblok',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
