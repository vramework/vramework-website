# Type Alias: CoreAPIFunctionSessionless()\<In, Out, Services, Session\>

```ts
type CoreAPIFunctionSessionless<In, Out, Services, Session>: (services, data, session?) => Promise<Out>;
```

## Type Parameters

• **In**

• **Out**

• **Services** = [`CoreServices`](CoreServices.md)

• **Session** = [`CoreUserSession`](../interfaces/CoreUserSession.md)

## Parameters

• **services**: `Services`

• **data**: `In`

• **session?**: `Session`

## Returns

`Promise`\<`Out`\>

## Defined in

[packages/core/src/types/routes.types.ts:11](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/types/routes.types.ts#L11)
