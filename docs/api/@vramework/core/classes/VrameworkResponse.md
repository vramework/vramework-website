# Class: `abstract` VrameworkResponse

Abstract class representing a vramework response.

## Constructors

### new VrameworkResponse()

```ts
new VrameworkResponse(): VrameworkResponse
```

#### Returns

[`VrameworkResponse`](VrameworkResponse.md)

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

#### Defined in

[packages/core/src/vramework-response.ts:60](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L60)

***

### end()

```ts
end(): void
```

Informs the response that it has ended, useful for when setting
a status without a body or response.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:77](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L77)

***

### setCookie()

```ts
setCookie(
   name, 
   value, 
   options): void
```

Sets a cookie for the response.

#### Parameters

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

• **options**: `SerializeOptions`

Options for cookie serialization.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:52](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L52)

***

### setHeader()

```ts
setHeader(name, value): void
```

Sets a header for the response.

#### Parameters

• **name**: `string`

The name of the header.

• **value**: `string` \| `boolean` \| `string`[]

The value of the header, which can be a string, boolean, or an array of strings.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:32](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L32)

***

### setHeaders()

```ts
setHeaders(headers): void
```

Sets multiple headers for the response.

#### Parameters

• **headers**: `Record`\<`string`, `string`\>

An object containing header names and values.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:40](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L40)

***

### setJson()

```ts
abstract setJson(body): void
```

Sets the JSON body for the response.

#### Parameters

• **body**: [`JSONValue`](../type-aliases/JSONValue.md)

The JSON body to set.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:19](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L19)

***

### setRedirect()

```ts
setRedirect(path, status): void
```

Sets a redirect for the response.

#### Parameters

• **path**: `string`

The path to redirect to.

• **status**: `number`

The HTTP status code for the redirect.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:69](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L69)

***

### setResponse()

```ts
abstract setResponse(response): void
```

Sets the response content.

#### Parameters

• **response**: `string` \| `Buffer`

The response content, which can be a string or a Buffer.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:25](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L25)

***

### setStatus()

```ts
abstract setStatus(status): void
```

Sets the HTTP status code for the response.

#### Parameters

• **status**: `number`

The HTTP status code to set.

#### Returns

`void`

#### Defined in

[packages/core/src/vramework-response.ts:13](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/vramework-response.ts#L13)
