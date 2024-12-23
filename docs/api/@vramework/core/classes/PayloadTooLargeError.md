# Class: PayloadTooLargeError

The request is larger than the server is willing or able to process.

## Extends

- `EError`

## Constructors

### new PayloadTooLargeError()

```ts
new PayloadTooLargeError(message, errorId?): PayloadTooLargeError
```

Creates an instance of EError.

#### Parameters

• **message**: `string` = `'An error occurred'`

The error message.

• **errorId?**: `string`

An optional error ID.

#### Returns

[`PayloadTooLargeError`](PayloadTooLargeError.md)

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
