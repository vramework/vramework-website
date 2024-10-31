# Type Alias: CreateSingletonServices()\<Config, SingletonServices\>

```ts
type CreateSingletonServices<Config, SingletonServices>: (config, ...args) => Promise<SingletonServices>;
```

Defines a function type for creating singleton services from the given configuration.

## Type Parameters

• **Config** *extends* [`CoreConfig`](../interfaces/CoreConfig.md)

• **SingletonServices** *extends* [`CoreSingletonServices`](../interfaces/CoreSingletonServices.md)

## Parameters

• **config**: `Config`

• ...**args**: `any`[]

## Returns

`Promise`\<`SingletonServices`\>

## Defined in

[packages/core/src/types/core.types.ts:101](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L101)
