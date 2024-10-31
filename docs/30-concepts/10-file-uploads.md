---
sidebar_position: 10
title: Content Uploads
description: Managing file uploads and downloads
draft: true
---

## Introduction

Handling file uploads and downloads can be challenging, particularly when dealing with offline versus online or local versus cloud storage. Vramework simplifies this process with the `ContentService`.

## File Handling Workflow

### Requesting Access

1. **Request a URL**: Request to sign a URL for accessing the content.
2. **Receive Response**: Obtain a response with a URL pointing to a CDN or file storage system.
3. **Use URL**: Use the provided URL to access the content.

### Uploading Files

1. **Request Metadata**: Request to upload a file with accompanying metadata.
2. **Obtain Signed URL**: Get a signed URL to upload the file.
3. **Upload File**: Upload the file to the signed URL.

## Implementation

### Content Service Interface

The `ContentService` interface provides methods for managing content:

```typescript
export interface ContentService {
    signContentKey: (contentKey: string) => Promise<string>;
    signURL: (url: string) => Promise<string>;
    getUploadURL: (fileKey: string, contentType: string) => Promise<{ uploadUrl: string; assetKey: string }>;

    // These are server side functions, which are useful in other scenarios
    // but don't need to be implemented or used
    deleteFile: (fileName: string) => Promise<boolean>;
    writeFile: (assetKey: string, buffer: Buffer) => Promise<boolean>;
    copyFile: (assetKey: string, fromAbsolutePath: string) => Promise<boolean>;
    readFile: (assetKey: string) => Promise<Buffer>;
}
```

### Configuring Services

To configure services for AWS and local storage, define the configuration as follows:

```typescript
export interface Config extends CoreConfig {
    ...,
    content: {
        ...depends on your content services...
        local: LocalContentConfig,
        aws: S3ContentConfig
    };
}

// Example configuration
export const config: Config = {
    ...,
    content: {
        local: {
            contentDirectory: `${__dirname}/../../../.uploads`,
        },
        aws: {
            bucketName: `assets.example-domain.com`,
            region: 'us-east-1',
        },
    },
};
```

Configure the service based on the environment:

```typescript
let content: S3Content | LocalContent;

if (process.env.NODE_ENV === 'production') {
    content = new S3Content(config.content.aws, logger, { 
        keypairId: await secrets.getSecret(config.secrets.cloudfrontContentId),
        privateKeyString: await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey),
    });
} else {
    content = new LocalContent(config.content.local.contentDirectory, logger);
}
```

### Upload Route

Define an endpoint to generate the `uploadUrl`. This setup works for both local and remote storage. It lives within the user codebase and so can be as custom as needed.

You can also have routes for each object if needed. It's mostly just a decision decision. I recommend a central place for small to medium projects since that way you can ensure the folder structure makes sense.

```typescript
import { v4 as uuid } from 'uuid';
import { APIFunction, APIFunctionSessionless, APIRoutes } from '../api';

interface SignFileUpload {
    method: string;
    name: string;
    contentType: string;
}

interface SignFileUploadResult {
    uploadUrl: string;
    assetKey: string;
}

/**
 * Generates a key and content type for file storage.
 * Centralizing file upload logic can simplify managing file paths and organization.
 */
const generateKey = async (
    userId: string,
    { type, name }: SignFileUpload
): Promise<{ key: string; contentType: string }> => {
    if (!name || name === 'uuid') {
        name = uuid();
    }

    if (type === 'image') {
        return {
            key: `user/${userId}/image/${name}.${contentType.split('/')[1]}`,
            contentType,
        };
    }

    throw `Unknown method: ${type} name: ${name}`;
};

/**
 * Retrieves the upload URL and asset key for the file.
 */
const getSignedUrl: APIFunction<SignFileUpload, SignFileUploadResult> = async ({ content }, data, session) => {
    const { key, contentType } = await generateKey(session.userId, data);
    const { uploadUrl, assetKey } = await content.getUploadURL(key, contentType);
    return {
        uploadUrl,
        assetKey,
    };
};

/**
 * Generates signed URLs for downloading multiple assets.
 */
const getSignedContentUrls: APIFunctionSessionless<SignAssetKeys, string[]> = async ({ content }, data) => {
    return Promise.all(data.assetKeys.map(
        assetKey => content.signContentKey(assetKey)
    ));
};

export const routes: APIRoutes = [
    {
        method: 'post',
        route: '/v1/file/upload-url',
        func: getSignedUrl,
        schema: 'SignFileUpload',
    },
    {
        method: 'post',
        route: '/v1/file/download-url',
        func: getSignedContentUrls,
        schema: 'SignAssetKeys',
    },
];
```

## Conclusion

Vramework’s `ContentService` makes file handling easier by providing straightforward methods for uploading, downloading, and managing files. This setup ensures that file operations are handled efficiently and securely, whether you are using local or cloud storage.