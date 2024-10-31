# Type Alias: CoreAPIPermission()\<In, Services, Session\>

```ts
type CoreAPIPermission<In, Services, Session>: (services, data, session?) => Promise<boolean>;
```

## Type Parameters

• **In** = `any`

• **Services** = [`CoreServices`](CoreServices.md)

• **Session** = [`CoreUserSession`](../interfaces/CoreUserSession.md)

## Parameters

• **services**: `Services`

• **data**: `In`

• **session?**: `Session`

## Returns

`Promise`\<`boolean`\>

## Defined in

[packages/core/src/types/routes.types.ts:18](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/types/routes.types.ts#L18)
