# Type Alias: RequireAtLeastOne\<T\>

```ts
type RequireAtLeastOne<T>: { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T];
```

Utility type that ensures at least one key in the given type `T` is required.

## Type Parameters

• **T**

## Defined in

[packages/core/src/types/core.types.ts:31](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L31)
