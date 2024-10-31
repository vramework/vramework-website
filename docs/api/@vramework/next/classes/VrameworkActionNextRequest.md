# Class: VrameworkActionNextRequest

The `VrameworkActionNextRequest` class is an extension of the `VrameworkRequest` class,
specifically designed for handling action requests in a Next.js environment.

## Extends

- `VrameworkRequest`

## Constructors

### new VrameworkActionNextRequest()

```ts
new VrameworkActionNextRequest(body): VrameworkActionNextRequest
```

Constructs a new instance of the `VrameworkActionNextRequest` class.

#### Parameters

• **body**: `any`

The request body to be wrapped and converted to a plain object.

#### Returns

[`VrameworkActionNextRequest`](VrameworkActionNextRequest.md)

#### Overrides

`VrameworkRequest.constructor`

#### Defined in

[packages/servers/next/src/vramework-action-next-request.ts:16](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-request.ts#L16)

## Methods

### getBody()

```ts
getBody(): any
```

Retrieves the body of the request.

#### Returns

`any`

The body of the request.

#### Overrides

`VrameworkRequest.getBody`

#### Defined in

[packages/servers/next/src/vramework-action-next-request.ts:53](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-request.ts#L53)

***

### getCookies()

```ts
getCookies(): Record<string, string>
```

Retrieves the cookies from the request.

#### Returns

`Record`\<`string`, `string`\>

An object containing the cookies.

#### Overrides

`VrameworkRequest.getCookies`

#### Defined in

[packages/servers/next/src/vramework-action-next-request.ts:27](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-request.ts#L27)

***

### getHeader()

```ts
getHeader(headerName): undefined | string
```

Retrieves the value of a specific header from the request.

#### Parameters

• **headerName**: `string`

The name of the header to retrieve.

#### Returns

`undefined` \| `string`

The value of the specified header, or `undefined` if not found.

#### Overrides

`VrameworkRequest.getHeader`

#### Defined in

[packages/servers/next/src/vramework-action-next-request.ts:44](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-request.ts#L44)
