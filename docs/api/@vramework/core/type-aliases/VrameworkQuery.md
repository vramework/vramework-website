# Type Alias: VrameworkQuery\<T\>

```ts
type VrameworkQuery<T>: Record<string, string | T | null | (T | null)[]>;
```

Represents a query object for Vramework, where each key can be a string, a value, or an array of values.

## Type Parameters

• **T** = `unknown`

## Defined in

[packages/core/src/types/core.types.ts:111](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L111)
