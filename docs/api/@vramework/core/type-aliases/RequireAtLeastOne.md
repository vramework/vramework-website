# Type Alias: RequireAtLeastOne\<T\>

```ts
type RequireAtLeastOne<T>: { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T];
```

## Type Parameters

• **T**

## Defined in

[packages/core/src/types/core.types.ts:17](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/types/core.types.ts#L17)
