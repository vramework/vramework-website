# Class: GatewayTimeoutError

The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

## Extends

- `EError`

## Constructors

### new GatewayTimeoutError()

```ts
new GatewayTimeoutError(message, errorId?): GatewayTimeoutError
```

Creates an instance of EError.

#### Parameters

• **message**: `string` = `'An error occurred'`

The error message.

• **errorId?**: `string`

An optional error ID.

#### Returns

[`GatewayTimeoutError`](GatewayTimeoutError.md)

#### Inherited from

`EError.constructor`

#### Defined in

[packages/core/src/error-handler.ts:11](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/error-handler.ts#L11)

## Properties

### errorId?

```ts
optional errorId: string;
```

An optional error ID.

#### Inherited from

`EError.errorId`

#### Defined in

[packages/core/src/error-handler.ts:13](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/error-handler.ts#L13)
