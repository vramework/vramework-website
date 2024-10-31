# Type Alias: CoreAPIRoute\<In, Out, R, APIFunction, APIFunctionSessionless, APIPermission\>

```ts
type CoreAPIRoute<In, Out, R, APIFunction, APIFunctionSessionless, APIPermission>: CoreFunctionlessAPIRoute & object | CoreFunctionlessAPIRoute & object | CoreFunctionlessAPIRoute & object | CoreFunctionlessAPIRoute & object;
```

Represents a core API route, which can have different configurations depending on whether it requires authentication and permissions.

## Type Parameters

• **In**

The input type.

• **Out**

The output type.

• **R** *extends* `string`

The route string type.

• **APIFunction** = [`CoreAPIFunction`](CoreAPIFunction.md)\<`In`, `Out`\>

The API function type, defaults to `CoreAPIFunction`.

• **APIFunctionSessionless** = [`CoreAPIFunctionSessionless`](CoreAPIFunctionSessionless.md)\<`In`, `Out`\>

The sessionless API function type, defaults to `CoreAPIFunctionSessionless`.

• **APIPermission** = [`CoreAPIPermission`](CoreAPIPermission.md)\<`In`\>

The permission function type, defaults to `CoreAPIPermission`.

## Defined in

[packages/core/src/types/routes.types.ts:79](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/routes.types.ts#L79)
