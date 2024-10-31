# Type Alias: AssertRouteParams\<In, Route\>

```ts
type AssertRouteParams<In, Route>: ExtractRouteParams<Route> extends keyof In ? unknown : ["Error: Route parameters", ExtractRouteParams<Route>, "not in", keyof In];
```

## Type Parameters

• **In**

• **Route** *extends* `string`

## Defined in

[packages/core/src/route-runner.ts:29](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/route-runner.ts#L29)
