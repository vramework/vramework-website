# Function: vrameworkMiddleware()

```ts
function vrameworkMiddleware(
   singletonServices, 
   createSessionServices, 
options): RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
```

Creates Express middleware for handling requests using the Vramework framework.

## Parameters

• **singletonServices**: `CoreSingletonServices`

The singleton services used by the middleware.

• **createSessionServices**: `CreateSessionServices`\<`any`, `any`, `any`\>

A function to create session services for each request.

• **options**: `VrameworkMiddlewareArgs`

The configuration options for the middleware.

## Returns

`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

- The Express middleware function.

## Defined in

[packages/servers/express/express-middleware/src/vramework-express-middleware.ts:35](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/express/express-middleware/src/vramework-express-middleware.ts#L35)
