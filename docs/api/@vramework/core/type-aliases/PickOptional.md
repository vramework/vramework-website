# Type Alias: PickOptional\<T, K\>

```ts
type PickOptional<T, K>: Omit<T, K> & Partial<T>;
```

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[packages/core/src/types/core.types.ts:16](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/types/core.types.ts#L16)
