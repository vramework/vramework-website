# Type Alias: VrameworkQuery\<T\>

```ts
type VrameworkQuery<T>: Record<string, string | T | null | (T | null)[]>;
```

Represents a query object for Vramework, where each key can be a string, a value, or an array of values.

## Type Parameters

• **T** = `unknown`

## Defined in

[packages/core/src/types/core.types.ts:111](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L111)
