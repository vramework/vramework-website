# Class: VrameworkSSRNextResponse

The `VrameworkSSRNextResponse` class is an extension of the `VrameworkResponse` class,
specifically for handling server-side rendering (SSR) responses in a Next.js environment.

## Extends

- `VrameworkResponse`

## Constructors

### new VrameworkSSRNextResponse()

```ts
new VrameworkSSRNextResponse(response): VrameworkSSRNextResponse
```

Constructs a new instance of the `VrameworkSSRNextResponse` class.

#### Parameters

• **response**: `ServerResponse`\<`IncomingMessage`\>

The HTTP response object to be wrapped.

#### Returns

[`VrameworkSSRNextResponse`](VrameworkSSRNextResponse.md)

#### Overrides

`VrameworkResponse.constructor`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-response.ts:14](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-response.ts#L14)

## Properties

### response

```ts
protected response: ServerResponse<IncomingMessage>;
```

The HTTP response object to be wrapped.

#### Defined in

[packages/servers/next/src/vramework-ssr-next-response.ts:14](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-response.ts#L14)

## Methods

### setJson()

```ts
setJson(): void
```

Sets the JSON body of the response.

#### Returns

`void`

#### Remarks

This method is currently a placeholder and should be implemented as needed.

#### Overrides

`VrameworkResponse.setJson`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-response.ts:32](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-response.ts#L32)

***

### setResponse()

```ts
setResponse(): void
```

Sets the final response to be sent to the client.

#### Returns

`void`

#### Remarks

This method is currently a placeholder and should be implemented as needed.

#### Overrides

`VrameworkResponse.setResponse`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-response.ts:40](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-response.ts#L40)

***

### setStatus()

```ts
setStatus(): void
```

Sets the status of the response.

#### Returns

`void`

#### Remarks

This method is currently a placeholder and should be implemented as needed.

#### Overrides

`VrameworkResponse.setStatus`

#### Defined in

[packages/servers/next/src/vramework-ssr-next-response.ts:24](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-ssr-next-response.ts#L24)
