# Type Alias: PickRequired\<T, K\>

```ts
type PickRequired<T, K>: Pick<T, K> & Partial<T>;
```

Utility type for making certain keys required and leaving the rest as optional.

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[packages/core/src/types/core.types.ts:21](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L21)
