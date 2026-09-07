---
format: md
title: FTP
description: "Transfer files via FTP or SFTP"
sidebar_label: FTP
---

# FTP

Transfer files via FTP or SFTP

```bash
npm install @pikku/addon-ftp
```

Category: **Infrastructure** · Version: `0.0.7` · Package: `@pikku/addon-ftp`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `fileDelete` | Delete a file or folder | `ftp` |
| `fileDownload` | Download a file | `ftp` |
| `fileList` | List folder content | `ftp` |
| `fileRename` | Rename or move a file or folder | `ftp` |
| `fileUpload` | Upload a file | `ftp` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'ftp',
  package: '@pikku/addon-ftp',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
