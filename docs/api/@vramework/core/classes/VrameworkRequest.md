# Class: `abstract` VrameworkRequest\<In\>

Abstract class representing a vramework request.

## Type Parameters

• **In** = `any`

The type of the request body.

## Constructors

### new VrameworkRequest()

```ts
new VrameworkRequest<In>(): VrameworkRequest<In>
```

#### Returns

[`VrameworkRequest`](VrameworkRequest.md)\<`In`\>

## Methods

### getBody()

```ts
getBody(): Promise<In>
```

Retrieves the request body.

#### Returns

`Promise`\<`In`\>

A promise that resolves to the request body.

#### Defined in

[packages/core/src/vramework-request.ts:16](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L16)

***

### getCookies()

```ts
getCookies(): Partial<Record<string, string>>
```

Retrieves the cookies from the request.

#### Returns

`Partial`\<`Record`\<`string`, `string`\>\>

An object containing the cookies.

#### Defined in

[packages/core/src/vramework-request.ts:39](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L39)

***

### getData()

```ts
getData(): Promise<In>
```

Retrieves the combined data from the request, including parameters, query, and body.

#### Returns

`Promise`\<`In`\>

A promise that resolves to an object containing the combined data.

#### Defined in

[packages/core/src/vramework-request.ts:86](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L86)

***

### getHeader()

```ts
abstract getHeader(headerName): undefined | string
```

Retrieves the value of a specific header.

#### Parameters

• **headerName**: `string`

The name of the header to retrieve.

#### Returns

`undefined` \| `string`

The value of the header, or undefined if the header is not found.

#### Defined in

[packages/core/src/vramework-request.ts:33](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L33)

***

### getIP()

```ts
getIP(): string
```

Retrieves the IP address of the client making the request.

#### Returns

`string`

The IP address of the client.

#### Throws

This method is not implemented and should be overridden by subclasses.

#### Defined in

[packages/core/src/vramework-request.ts:78](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L78)

***

### getParams()

```ts
getParams(): Partial<Record<string, string | string[]>>
```

Retrieves the request parameters.

#### Returns

`Partial`\<`Record`\<`string`, `string` \| `string`[]\>\>

An object containing the request parameters.

#### Defined in

[packages/core/src/vramework-request.ts:51](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L51)

***

### getQuery()

```ts
getQuery(): VrameworkQuery
```

Retrieves the query parameters from the request.

#### Returns

[`VrameworkQuery`](../type-aliases/VrameworkQuery.md)

An object containing the query parameters.

#### Defined in

[packages/core/src/vramework-request.ts:69](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L69)

***

### getRawBody()

```ts
getRawBody(): Promise<Buffer>
```

Retrieves the raw request body as a Buffer.

#### Returns

`Promise`\<`Buffer`\>

A promise that resolves to the raw request body.

#### Defined in

[packages/core/src/vramework-request.ts:24](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L24)

***

### setParams()

```ts
setParams(params): void
```

Sets the request parameters.

#### Parameters

• **params**: `Record`\<`string`, `undefined` \| `string` \| `string`[]\>

An object containing the request parameters to set.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-request.ts:59](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-request.ts#L59)
