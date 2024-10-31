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

[packages/core/src/types/core.types.ts:101](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L101)
