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

[packages/fetch/src/core-vramework-fetch.ts:22](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/fetch/src/core-vramework-fetch.ts#L22)
