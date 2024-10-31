# Type Alias: CoreAPIFunction()\<In, Out, Services, Session\>

```ts
type CoreAPIFunction<In, Out, Services, Session>: (services, data, session) => Promise<Out>;
```

Represents a core API function that performs an operation using core services and a user session.

## Type Parameters

• **In**

The input type.

• **Out**

The output type.

• **Services** = [`CoreServices`](CoreServices.md)

The services type, defaults to `CoreServices`.

• **Session** = [`CoreUserSession`](../interfaces/CoreUserSession.md)

The session type, defaults to `CoreUserSession`.

## Parameters

• **services**: `Services`

• **data**: `In`

• **session**: `Session`

## Returns

`Promise`\<`Out`\>

## Defined in

[packages/core/src/types/routes.types.ts:12](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/routes.types.ts#L12)
