---
format: md
title: Microsoft One Drive
description: "Consume the Microsoft OneDrive API"
sidebar_label: Microsoft One Drive
---

# Microsoft One Drive

Consume the Microsoft OneDrive API

```bash
npm install @pikku/addon-microsoft-one-drive
```

Category: **Cloud** · Version: `0.0.8` · Package: `@pikku/addon-microsoft-one-drive`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `fileCopy` | Copy a file | `microsoftOneDrive` |
| `fileDelete` | Delete a file | `microsoftOneDrive` |
| `fileDownload` | Download a file | `microsoftOneDrive` |
| `fileGet` | Get a file | `microsoftOneDrive` |
| `fileMove` | Move a file | `microsoftOneDrive` |
| `fileRename` | Rename a file | `microsoftOneDrive` |
| `fileSearch` | Search files | `microsoftOneDrive` |
| `fileShare` | Create a sharing link for a file | `microsoftOneDrive` |
| `fileUpload` | Upload a file | `microsoftOneDrive` |
| `folderCreate` | Create a folder | `microsoftOneDrive` |
| `folderDelete` | Delete a folder | `microsoftOneDrive` |
| `folderGetChildren` | Get folder children | `microsoftOneDrive` |
| `folderMove` | Move a folder | `microsoftOneDrive` |
| `folderRename` | Rename a folder | `microsoftOneDrive` |
| `folderSearch` | Search folders | `microsoftOneDrive` |
| `folderShare` | Create a sharing link for a folder | `microsoftOneDrive` |

## Secrets

- `MICROSOFT_ONE_DRIVE_OAUTH_APP` — OAuth2 app credentials for Microsoft OneDrive

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'microsoft-one-drive',
  package: '@pikku/addon-microsoft-one-drive',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
