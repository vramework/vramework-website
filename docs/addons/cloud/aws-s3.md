---
format: md
title: AWS S3
description: "Store and retrieve objects in AWS S3"
sidebar_label: AWS S3
---

# AWS S3

Store and retrieve objects in AWS S3

```bash
npm install @pikku/addon-aws-s3
```

Category: **Cloud** · Version: `0.0.7` · Package: `@pikku/addon-aws-s3`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `bucketCreate` | Create a bucket | `awsS3` |
| `bucketDelete` | Delete a bucket | `awsS3` |
| `bucketGetAll` | List all buckets | `awsS3` |
| `bucketSearch` | Search within a bucket | `awsS3` |
| `fileCopy` | Copy a file | `awsS3` |
| `fileDelete` | Delete a file | `awsS3` |
| `fileDownload` | Download a file | `awsS3` |
| `fileGetAll` | List files in a bucket | `awsS3` |
| `fileUpload` | Upload a file | `awsS3` |
| `folderCreate` | Create a folder | `awsS3` |
| `folderDelete` | Delete a folder | `awsS3` |
| `folderGetAll` | List folders in a bucket | `awsS3` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-s3',
  package: '@pikku/addon-aws-s3',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
