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

[packages/servers/uws/uws-handler/src/vramework-uws-handler.ts:37](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-handler/src/vramework-uws-handler.ts#L37)
