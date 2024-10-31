# Type Alias: RequestHeaders

```ts
type RequestHeaders: Record<string, string | string[] | undefined> | (headerName) => string | string[] | undefined;
```

Represents request headers as either a record or a function to get headers by name.

## Defined in

[packages/core/src/types/core.types.ts:69](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L69)
