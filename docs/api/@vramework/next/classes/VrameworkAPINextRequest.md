# Class: VrameworkAPINextRequest

The `VrameworkAPINextRequest` class is an extension of the `VrameworkRequest` class,
specifically designed for handling API requests in a Next.js environment.

## Extends

- `VrameworkRequest`

## Constructors

### new VrameworkAPINextRequest()

```ts
new VrameworkAPINextRequest(request): VrameworkAPINextRequest
```

Constructs a new instance of the `VrameworkAPINextRequest` class.

#### Parameters

• **request**: `NextApiRequest`

The Next.js API request object to be wrapped.

#### Returns

[`VrameworkAPINextRequest`](VrameworkAPINextRequest.md)

#### Overrides

`VrameworkRequest.constructor`

#### Defined in

[packages/servers/next/src/vramework-api-next-request.ts:14](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-request.ts#L14)

## Methods

### getBody()

```ts
getBody(): any
```

Retrieves the body of the request.

#### Returns

`any`

The parsed body of the request if it is JSON, or the raw body otherwise.

#### Overrides

`VrameworkRequest.getBody`

#### Defined in

[packages/servers/next/src/vramework-api-next-request.ts:23](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-request.ts#L23)

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

[packages/servers/next/src/vramework-api-next-request.ts:37](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-request.ts#L37)

***

### getHeaders()

```ts
getHeaders(): IncomingHttpHeaders
```

Retrieves all headers from the request.

#### Returns

`IncomingHttpHeaders`

An object containing all headers.

#### Defined in

[packages/servers/next/src/vramework-api-next-request.ts:55](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-request.ts#L55)

***

### getQuery()

```ts
getQuery(): Partial<object>
```

Retrieves the query parameters from the request.

#### Returns

`Partial`\<`object`\>

An object containing the query parameters.

#### Overrides

`VrameworkRequest.getQuery`

#### Defined in

[packages/servers/next/src/vramework-api-next-request.ts:46](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-request.ts#L46)
