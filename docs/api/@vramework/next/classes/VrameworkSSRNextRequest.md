# Class: VrameworkSSRNextRequest

The `VrameworkSSRNextRequest` class is an extension of the `VrameworkRequest` class,
specifically designed for handling server-side rendering (SSR) requests in a Next.js environment.

## Extends

- `VrameworkRequest`

## Constructors

### new VrameworkSSRNextRequest()

```ts
new VrameworkSSRNextRequest(request, body): VrameworkSSRNextRequest
```

Constructs a new instance of the `VrameworkSSRNextRequest` class.

#### Parameters

• **request**: `IncomingMessage` & `object`

The HTTP request object, including cookies.

• **body**: `any`

The request body.

#### Returns

[`VrameworkSSRNextRequest`](VrameworkSSRNextRequest.md)

#### Overrides

`VrameworkRequest.constructor`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-request.ts:15](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-request.ts#L15)

## Methods

### getBody()

```ts
getBody(): any
```

Retrieves the body of the request.

#### Returns

`any`

The request body.

#### Overrides

`VrameworkRequest.getBody`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-request.ts:53](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-request.ts#L53)

***

### getCookies()

```ts
getCookies(): Partial<object>
```

Retrieves the cookies from the request.

#### Returns

`Partial`\<`object`\>

An object containing the cookies.

#### Overrides

`VrameworkRequest.getCookies`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-request.ts:29](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-request.ts#L29)

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

#### Throws

An error if the header value is an array, as array values are not yet supported.

#### Overrides

`VrameworkRequest.getHeader`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-request.ts:40](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-request.ts#L40)
