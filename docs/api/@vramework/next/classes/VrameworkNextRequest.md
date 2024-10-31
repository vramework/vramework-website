# Class: VrameworkNextRequest

The `VrameworkNextRequest` class is an extension of the `VrameworkRequest` class,
specifically designed for handling requests in a Next.js server environment.

## Extends

- `VrameworkRequest`

## Constructors

### new VrameworkNextRequest()

```ts
new VrameworkNextRequest(request): VrameworkNextRequest
```

Constructs a new instance of the `VrameworkNextRequest` class.

#### Parameters

• **request**: `NextRequest`

The Next.js request object to be wrapped.

#### Returns

[`VrameworkNextRequest`](VrameworkNextRequest.md)

#### Overrides

`VrameworkRequest.constructor`

#### Defined in

[packages/servers/next/src/vramework-next-request.ts:14](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next-request.ts#L14)

## Methods

### getBody()

```ts
getBody(): Promise<void>
```

Throws an error because the Next.js request does not have a body.

#### Returns

`Promise`\<`void`\>

#### Throws

An error indicating that the body is not available.

#### Overrides

`VrameworkRequest.getBody`

#### Defined in

[packages/servers/next/src/vramework-next-request.ts:47](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next-request.ts#L47)

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

[packages/servers/next/src/vramework-next-request.ts:23](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next-request.ts#L23)

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

[packages/servers/next/src/vramework-next-request.ts:38](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next-request.ts#L38)
