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

[packages/servers/uws/uws-handler/src/vramework-uws-handler.ts:37](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/servers/uws/uws-handler/src/vramework-uws-handler.ts#L37)
