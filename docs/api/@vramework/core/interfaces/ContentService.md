# Interface: ContentService

Interface for handling content operations.

## Properties

### copyFile()?

```ts
optional copyFile: (assetKey, fromAbsolutePath) => Promise<boolean>;
```

This method copies the file from the specified absolute path to the location identified by the asset key and returns a boolean indicating success.

#### Parameters

• **assetKey**: `string`

The key of the asset to copy.

• **fromAbsolutePath**: `string`

The absolute path of the source file.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating success.

#### Defined in

[packages/core/src/services/content-service.ts:53](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L53)

***

### deleteFile()?

```ts
optional deleteFile: (fileName) => Promise<boolean>;
```

Deletes a file.

#### Parameters

• **fileName**: `string`

The name of the file to delete.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating success.
 This method deletes the specified file and returns a boolean indicating whether the deletion was successful.

#### Defined in

[packages/core/src/services/content-service.ts:37](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L37)

***

### getUploadURL()

```ts
getUploadURL: (fileKey, contentType) => Promise<object>;
```

Gets an upload URL for a file.

#### Parameters

• **fileKey**: `string`

The key of the file to upload.

• **contentType**: `string`

The content type of the file.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the upload URL and asset key.
 This method generates an upload URL for the specified file key and content type, allowing the file to be uploaded.

##### assetKey

```ts
assetKey: string;
```

##### uploadUrl

```ts
uploadUrl: string;
```

#### Defined in

[packages/core/src/services/content-service.ts:26](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L26)

***

### readFile()?

```ts
optional readFile: (assetKey) => Promise<Buffer>;
```

Reads a file.

#### Parameters

• **assetKey**: `string`

The key of the asset to read.

#### Returns

`Promise`\<`Buffer`\>

A promise that resolves to a buffer containing the file data.

#### Defined in

[packages/core/src/services/content-service.ts:60](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L60)

***

### signContentKey()

```ts
signContentKey: (contentKey) => Promise<string>;
```

Signs a content key to provide secure access.

#### Parameters

• **contentKey**: `string`

The key of the content to sign.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed content key URL.

#### Defined in

[packages/core/src/services/content-service.ts:10](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L10)

***

### signURL()

```ts
signURL: (url) => Promise<string>;
```

Signs a URL to provide secure access.

#### Parameters

• **url**: `string`

The URL to sign.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed URL.

#### Defined in

[packages/core/src/services/content-service.ts:17](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L17)

***

### writeFile()?

```ts
optional writeFile: (assetKey, buffer) => Promise<boolean>;
```

Writes a file.

#### Parameters

• **assetKey**: `string`

The key of the asset to write.

• **buffer**: `Buffer`

The buffer containing the file data.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating success.

#### Defined in

[packages/core/src/services/content-service.ts:45](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/content-service.ts#L45)
