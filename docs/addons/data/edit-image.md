---
format: md
title: Edit Image
description: "Image manipulation: resize, crop, rotate, blur, flip, composite, and convert."
sidebar_label: Edit Image
---

# Edit Image

Image manipulation: resize, crop, rotate, blur, flip, composite, and convert.

```bash
npm install @pikku/addon-edit-image
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-edit-image`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `imageBlur` | Apply Gaussian blur to an image | `content` |
| `imageComposite` | Composite (overlay) one image on top of another | `content` |
| `imageConvert` | Convert an image to a different format | `content` |
| `imageCrop` | Crop a region from an image | `content` |
| `imageFlip` | Flip an image horizontally or vertically | `content` |
| `imageMetadata` | Get image metadata (dimensions, format, etc.) | `content` |
| `imageResize` | Resize an image | `content` |
| `imageRotate` | Rotate an image by a given angle | `content` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'edit-image',
  package: '@pikku/addon-edit-image',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
