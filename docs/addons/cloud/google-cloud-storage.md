---
format: md
title: Google Cloud Storage
description: "Google Cloud Storage bucket and object management."
sidebar_label: Google Cloud Storage
---

# Google Cloud Storage

Google Cloud Storage bucket and object management.

```bash
npm install @pikku/addon-google-cloud-storage
```

Category: **Cloud** · Version: `0.1.6` · Package: `@pikku/addon-google-cloud-storage`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `bucketCreate` | Create a new Google Cloud Storage bucket | `googleCloudStorage` |
| `bucketDelete` | Delete an empty Google Cloud Storage bucket | `googleCloudStorage` |
| `bucketGet` | Get metadata for a Google Cloud Storage bucket | `googleCloudStorage` |
| `bucketList` | List Google Cloud Storage buckets in the project | `googleCloudStorage` |
| `bucketUpdate` | Update metadata for a Google Cloud Storage bucket | `googleCloudStorage` |
| `objectDelete` | Delete an object from a Google Cloud Storage bucket | `googleCloudStorage` |
| `objectDownload` | Download an object from Google Cloud Storage as base64 | `googleCloudStorage` |
| `objectGet` | Get metadata for an object in Google Cloud Storage | `googleCloudStorage` |
| `objectList` | List objects in a Google Cloud Storage bucket | `googleCloudStorage` |
| `objectUpdateMetadata` | Update custom metadata on a Google Cloud Storage object | `googleCloudStorage` |
| `objectUpload` | Upload an object to a Google Cloud Storage bucket | `googleCloudStorage` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-cloud-storage',
  package: '@pikku/addon-google-cloud-storage',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
