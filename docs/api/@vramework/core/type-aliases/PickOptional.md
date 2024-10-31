# Type Alias: PickOptional\<T, K\>

```ts
type PickOptional<T, K>: Omit<T, K> & Partial<T>;
```

Utility type for making certain keys optional while keeping the rest required.

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[packages/core/src/types/core.types.ts:26](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L26)
