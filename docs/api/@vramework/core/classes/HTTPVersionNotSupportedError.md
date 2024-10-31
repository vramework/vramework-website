# Class: HTTPVersionNotSupportedError

The server does not support the HTTP protocol version used in the request.

## Extends

- `EError`

## Constructors

### new HTTPVersionNotSupportedError()

```ts
new HTTPVersionNotSupportedError(message, errorId?): HTTPVersionNotSupportedError
```

Creates an instance of EError.

#### Parameters

• **message**: `string` = `'An error occurred'`

The error message.

• **errorId?**: `string`

An optional error ID.

#### Returns

[`HTTPVersionNotSupportedError`](HTTPVersionNotSupportedError.md)

#### Inherited from

`EError.constructor`

#### Defined in

[packages/core/src/error-handler.ts:11](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/error-handler.ts#L11)

## Properties

### errorId?

```ts
optional errorId: string;
```

An optional error ID.

#### Inherited from

`EError.errorId`

#### Defined in

[packages/core/src/error-handler.ts:13](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/error-handler.ts#L13)
