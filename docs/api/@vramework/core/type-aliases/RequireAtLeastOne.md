# Type Alias: RequireAtLeastOne\<T\>

```ts
type RequireAtLeastOne<T>: { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T];
```

Utility type that ensures at least one key in the given type `T` is required.

## Type Parameters

• **T**

## Defined in

[packages/core/src/types/core.types.ts:31](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L31)
