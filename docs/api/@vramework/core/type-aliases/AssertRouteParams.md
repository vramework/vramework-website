# Type Alias: AssertRouteParams\<In, Route\>

```ts
type AssertRouteParams<In, Route>: ExtractRouteParams<Route> extends keyof In ? unknown : ["Error: Route parameters", ExtractRouteParams<Route>, "not in", keyof In];
```

## Type Parameters

• **In**

• **Route** *extends* `string`

## Defined in

[packages/core/src/route-runner.ts:30](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/route-runner.ts#L30)
