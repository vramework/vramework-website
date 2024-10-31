# Class: VrameworkActionNextResponse

The `VrameworkActionNextResponse` class is an extension of the `VrameworkResponse` class,
specifically designed for handling action responses in a Next.js environment.

## Extends

- `VrameworkResponse`

## Constructors

### new VrameworkActionNextResponse()

```ts
new VrameworkActionNextResponse(): VrameworkActionNextResponse
```

Constructs a new instance of the `VrameworkActionNextResponse` class.

#### Returns

[`VrameworkActionNextResponse`](VrameworkActionNextResponse.md)

#### Overrides

`VrameworkResponse.constructor`

#### Defined in

[packages/servers/next/src/vramework-action-next-response.ts:13](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L13)

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

[packages/servers/next/src/vramework-action-next-response.ts:62](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L62)

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

• **options**: `SerializeOptions`

Options for setting the cookie.

#### Returns

`void`

#### Overrides

`VrameworkResponse.setCookie`

#### Defined in

[packages/servers/next/src/vramework-action-next-response.ts:48](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L48)

***

### setJson()

```ts
setJson(): void
```

Sets the response body as JSON.

#### Returns

`void`

#### Remarks

This method is currently a placeholder and should be implemented as needed.

#### Overrides

`VrameworkResponse.setJson`

#### Defined in

[packages/servers/next/src/vramework-action-next-response.ts:31](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L31)

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

[packages/servers/next/src/vramework-action-next-response.ts:39](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L39)

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

[packages/servers/next/src/vramework-action-next-response.ts:23](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/next/src/vramework-action-next-response.ts#L23)
