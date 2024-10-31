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

[packages/fetch/src/core-vramework-fetch.ts:22](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L22)
