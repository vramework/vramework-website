# Type Alias: CoreVrameworkFetchOptions

```ts
type CoreVrameworkFetchOptions: object & Pick<RequestInit, "cache" | "credentials" | "mode">;
```

Options for configuring the `CoreVrameworkFetch` utility.

## Type declaration

### authHeaders?

```ts
optional authHeaders: AuthHeaders;
```

### serverUrl?

```ts
optional serverUrl: string;
```

### transformDate?

```ts
optional transformDate: boolean;
```

## Defined in

[packages/fetch/src/core-vramework-fetch.ts:22](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/fetch/src/core-vramework-fetch.ts#L22)
