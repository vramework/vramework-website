# Type Alias: CreateSessionServices()\<SingletonServices, UserSession, Services\>

```ts
type CreateSessionServices<SingletonServices, UserSession, Services>: (services, interaction, session) => Promise<Omit<Services, keyof SingletonServices | keyof VrameworkInteraction>>;
```

## Type Parameters

• **SingletonServices** *extends* [`CoreSingletonServices`](../interfaces/CoreSingletonServices.md)

• **UserSession** *extends* [`CoreUserSession`](../interfaces/CoreUserSession.md)

• **Services** *extends* [`CoreServices`](CoreServices.md)\<`SingletonServices`\>

## Parameters

• **services**: `SingletonServices`

• **interaction**: [`VrameworkInteraction`](../interfaces/VrameworkInteraction.md)

• **session**: `UserSession` \| `undefined`

## Returns

`Promise`\<`Omit`\<`Services`, keyof `SingletonServices` \| keyof [`VrameworkInteraction`](../interfaces/VrameworkInteraction.md)\>\>

## Defined in

[packages/core/src/types/core.types.ts:60](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/types/core.types.ts#L60)
