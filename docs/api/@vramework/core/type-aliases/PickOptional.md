# Type Alias: PickOptional\<T, K\>

```ts
type PickOptional<T, K>: Omit<T, K> & Partial<T>;
```

Utility type for making certain keys optional while keeping the rest required.

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[packages/core/src/types/core.types.ts:26](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L26)
