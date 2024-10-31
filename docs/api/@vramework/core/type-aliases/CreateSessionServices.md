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

[packages/core/src/types/core.types.ts:106](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L106)
