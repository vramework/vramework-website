# Type Alias: RequestHeaders

```ts
type RequestHeaders: Record<string, string | string[] | undefined> | (headerName) => string | string[] | undefined;
```

Represents request headers as either a record or a function to get headers by name.

## Defined in

[packages/core/src/types/core.types.ts:69](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L69)
