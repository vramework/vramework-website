# Function: vrameworkHandler()

```ts
function vrameworkHandler(options): (res, req) => Promise<void>
```

Creates a uWebSockets handler for handling requests using the `@vramework/core` framework.

## Parameters

• **options**: [`VrameworkuWSHandlerOptions`](../type-aliases/VrameworkuWSHandlerOptions.md)

The options to configure the handler.

## Returns

`Function`

- The request handler function.

### Parameters

• **res**: `HttpResponse`

• **req**: `HttpRequest`

### Returns

`Promise`\<`void`\>

## Defined in

[packages/servers/uws/uws-handler/src/vramework-uws-handler.ts:37](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/uws/uws-handler/src/vramework-uws-handler.ts#L37)
