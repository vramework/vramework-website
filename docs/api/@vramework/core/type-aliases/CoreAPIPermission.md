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

[packages/core/src/types/routes.types.ts:41](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/routes.types.ts#L41)
