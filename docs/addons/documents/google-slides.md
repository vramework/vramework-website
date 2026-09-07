---
format: md
title: Google Slides
description: "Consume the Google Slides API"
sidebar_label: Google Slides
---

# Google Slides

Consume the Google Slides API

```bash
npm install @pikku/addon-google-slides
```

Category: **Documents** · Version: `0.0.8` · Package: `@pikku/addon-google-slides`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `pageGet` | Get a page | `googleSlides` |
| `pageGetThumbnail` | Get the thumbnail for a page | `googleSlides` |
| `presentationCreate` | Create a presentation | `googleSlides` |
| `presentationGet` | Get a presentation | `googleSlides` |
| `presentationGetSlides` | Get presentation slides | `googleSlides` |
| `presentationReplaceText` | Replace text in a presentation | `googleSlides` |

## Secrets

- `GOOGLE_SLIDES_OAUTH_APP` — OAuth2 app credentials for Google Slides

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-slides',
  package: '@pikku/addon-google-slides',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
