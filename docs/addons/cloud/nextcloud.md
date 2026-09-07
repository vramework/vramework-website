---
format: md
title: Nextcloud
description: "Access files, folders and users on Nextcloud"
sidebar_label: Nextcloud
---

# Nextcloud

Access files, folders and users on Nextcloud

```bash
npm install @pikku/addon-nextcloud
```

Category: **Cloud** · Version: `0.0.7` · Package: `@pikku/addon-nextcloud`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `fileCopy` | Copy a file | `nextcloud` |
| `fileDelete` | Delete a file | `nextcloud` |
| `fileDownload` | Download a file | `nextcloud` |
| `fileMove` | Move a file | `nextcloud` |
| `fileShare` | Share a file | `nextcloud` |
| `fileUpload` | Upload a file | `nextcloud` |
| `folderCopy` | Copy a folder | `nextcloud` |
| `folderCreate` | Create a folder | `nextcloud` |
| `folderDelete` | Delete a folder | `nextcloud` |
| `folderList` | List the contents of a folder | `nextcloud` |
| `folderMove` | Move a folder | `nextcloud` |
| `folderShare` | Share a folder | `nextcloud` |
| `userCreate` | Create a user | `nextcloud` |
| `userDelete` | Delete a user | `nextcloud` |
| `userGet` | Get a user | `nextcloud` |
| `userGetAll` | Get many users | `nextcloud` |
| `userUpdate` | Update a user | `nextcloud` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'nextcloud',
  package: '@pikku/addon-nextcloud',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
