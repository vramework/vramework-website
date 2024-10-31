# Type Alias: CoreAPIPermission()\<In, Services, Session\>

```ts
type CoreAPIPermission<In, Services, Session>: (services, data, session?) => Promise<boolean>;
```

Represents a function that checks permissions for a given API operation.

## Type Parameters

• **In** = `any`

The input type.

• **Services** = [`CoreServices`](CoreServices.md)

The services type, defaults to `CoreServices`.

• **Session** = [`CoreUserSession`](../interfaces/CoreUserSession.md)

The session type, defaults to `CoreUserSession`.

## Parameters

• **services**: `Services`

• **data**: `In`

• **session?**: `Session`

## Returns

`Promise`\<`boolean`\>

## Defined in

[packages/core/src/types/routes.types.ts:41](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/routes.types.ts#L41)
