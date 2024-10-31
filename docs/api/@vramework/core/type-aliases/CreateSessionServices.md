# Type Alias: CreateSessionServices()\<SingletonServices, UserSession, Services\>

```ts
type CreateSessionServices<SingletonServices, UserSession, Services>: (services, interaction, session) => Promise<Omit<Services, keyof SingletonServices | keyof VrameworkInteraction>>;
```

Defines a function type for creating session-specific services, excluding certain services from the core services.

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

[packages/core/src/types/core.types.ts:106](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L106)
