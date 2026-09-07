---
format: md
title: Google Firebase Cloud Firestore
description: "Interact with Google Firebase Cloud Firestore"
sidebar_label: Google Firebase Cloud Firestore
---

# Google Firebase Cloud Firestore

Interact with Google Firebase Cloud Firestore

```bash
npm install @pikku/addon-google-firebase-cloud-firestore
```

Category: **Cloud** · Version: `0.0.8` · Package: `@pikku/addon-google-firebase-cloud-firestore`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `collectionGetAll` | List collection ids | `googleFirebaseCloudFirestore` |
| `documentCreate` | Create a document | `googleFirebaseCloudFirestore` |
| `documentDelete` | Delete a document | `googleFirebaseCloudFirestore` |
| `documentGet` | Get documents | `googleFirebaseCloudFirestore` |
| `documentGetAll` | Get all documents | `googleFirebaseCloudFirestore` |
| `documentQuery` | Query documents | `googleFirebaseCloudFirestore` |
| `documentUpsert` | Upsert documents | `googleFirebaseCloudFirestore` |

## Secrets

- `GOOGLE_FIREBASE_CLOUD_FIRESTORE_OAUTH_APP` — OAuth2 app credentials for Google Cloud Firestore

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-firebase-cloud-firestore',
  package: '@pikku/addon-google-firebase-cloud-firestore',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
