---
format: md
title: Google Books
description: "Google Books addon"
sidebar_label: Google Books
---

# Google Books

Google Books addon

```bash
npm install @pikku/addon-google-books
```

Category: **Media** · Version: `0.0.8` · Package: `@pikku/addon-google-books`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `bookshelfGet` | Get a bookshelf resource for a user | `googleBooks` |
| `bookshelfGetAll` | Get many public bookshelves for a user | `googleBooks` |
| `bookshelfVolumeAdd` | Add a volume to a bookshelf | `googleBooks` |
| `bookshelfVolumeClear` | Clear all volumes from a bookshelf | `googleBooks` |
| `bookshelfVolumeGetAll` | Get many volumes in a bookshelf for a user | `googleBooks` |
| `bookshelfVolumeMove` | Move a volume within a bookshelf | `googleBooks` |
| `bookshelfVolumeRemove` | Remove a volume from a bookshelf | `googleBooks` |
| `volumeGet` | Get a volume resource based on ID | `googleBooks` |
| `volumeGetAll` | Get many volumes filtered by query | `googleBooks` |

## Secrets

- `GOOGLE_BOOKS_OAUTH_APP` — OAuth2 app credentials for Google Books

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-books',
  package: '@pikku/addon-google-books',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
