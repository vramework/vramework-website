# Type Alias: AssertRouteParams\<In, Route\>

```ts
type AssertRouteParams<In, Route>: ExtractRouteParams<Route> extends keyof In ? unknown : ["Error: Route parameters", ExtractRouteParams<Route>, "not in", keyof In];
```

## Type Parameters

• **In**

• **Route** *extends* `string`

## Defined in

[packages/core/src/route-runner.ts:29](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/route-runner.ts#L29)
