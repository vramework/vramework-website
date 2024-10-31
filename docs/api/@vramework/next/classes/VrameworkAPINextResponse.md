# Class: VrameworkAPINextResponse

The `VrameworkAPINextResponse` class is an extension of the `VrameworkResponse` class,
specifically designed for handling API responses in a Next.js environment.

## Extends

- `VrameworkResponse`

## Constructors

### new VrameworkAPINextResponse()

```ts
new VrameworkAPINextResponse(response): VrameworkAPINextResponse
```

Constructs a new instance of the `VrameworkAPINextResponse` class.

#### Parameters

• **response**: `NextApiResponse`

The Next.js API response object to be wrapped.

#### Returns

[`VrameworkAPINextResponse`](VrameworkAPINextResponse.md)

#### Overrides

`VrameworkResponse.constructor`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:16](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L16)

## Properties

### response

```ts
protected response: NextApiResponse;
```

The Next.js API response object to be wrapped.

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:16](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L16)

## Methods

### clearCookie()

```ts
clearCookie(name): void
```

Clears a cookie from the response.

#### Parameters

• **name**: `string`

The name of the cookie to clear.

#### Returns

`void`

#### Overrides

`VrameworkResponse.clearCookie`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:55](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L55)

***

### setCookie()

```ts
setCookie(
   name, 
   value, 
   options): void
```

Sets a cookie in the response.

#### Parameters

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

• **options**: `any`

Options for setting the cookie.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setCookie`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:46](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L46)

***

### setHeader()

```ts
setHeader(name, value): void
```

Sets a header in the response.

#### Parameters

• **name**: `string`

The name of the header to set.

• **value**: `string`

The value of the header.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setHeader`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:35](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L35)

***

### setJson()

```ts
setJson(body): void
```

Sets the response body as JSON.

#### Parameters

• **body**: `JSONValue`

The JSON body to set.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setJson`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:77](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L77)

***

### setRedirect()

```ts
setRedirect(path, status): void
```

Sets a redirect response.

#### Parameters

• **path**: `string`

The path to redirect to.

• **status**: `undefined` \| `number` = `307`

The HTTP status code for the redirect. Defaults to 307.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setRedirect`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:68](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L68)

***

### setResponse()

```ts
setResponse(body): void
```

Sets the response body.

#### Parameters

• **body**: `Buffer` \| `JSONValue`

The body to set, which can be JSON, a string, or a buffer.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setResponse`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:86](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L86)

***

### setStatus()

```ts
setStatus(status): void
```

Sets the status of the response.

#### Parameters

• **status**: `number`

The HTTP status code to set.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setStatus`

#### Defined in

[packages/servers/next/src/vramework-api-next-response.ts:25](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/next/src/vramework-api-next-response.ts#L25)
