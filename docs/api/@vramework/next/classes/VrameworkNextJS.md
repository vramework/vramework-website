# Class: VrameworkNextJS

The `VrameworkNextJS` class provides methods to interact with the Vramework framework in a Next.js environment,
including support for SSR requests, API requests, and action requests.

## Constructors

### new VrameworkNextJS()

```ts
new VrameworkNextJS(
   config, 
   createSingletonServices, 
   createSessionServices): VrameworkNextJS
```

Constructs a new instance of the `VrameworkNextJS` class.

#### Parameters

• **config**: `CoreConfig`

The core configuration for the application.

• **createSingletonServices**

A function that creates singleton services for the application.

• **createSessionServices**: `CreateSessionServices`\<`any`, `any`, `any`\>

A function that creates session-specific services for each request.

#### Returns

[`VrameworkNextJS`](VrameworkNextJS.md)

#### Defined in

[packages/servers/next/src/vramework-next.ts:42](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next.ts#L42)

## Methods

### actionRequest()

```ts
actionRequest<In, Out>(
   route, 
   method, 
data): Promise<Out>
```

Handles an action request, routing it to the appropriate handler.

#### Type Parameters

• **In** *extends* `Record`\<`string`, `any`\>

• **Out**

#### Parameters

• **route**: `unknown`

The route to handle.

• **method**: `unknown`

The HTTP method for the request.

• **data**: `In`

The data to be sent with the request.

#### Returns

`Promise`\<`Out`\>

A promise that resolves to the response data.

#### Defined in

[packages/servers/next/src/vramework-next.ts:58](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next.ts#L58)

***

### apiRequest()

```ts
apiRequest<In, Out>(
   request, 
   response, 
   route, 
method): Promise<void>
```

Handles an API request, routing it to the appropriate handler.

#### Type Parameters

• **In** *extends* `Record`\<`string`, `any`\>

• **Out**

#### Parameters

• **request**: `NextApiRequest`

The Next.js API request object.

• **response**: `NextApiResponse`

The Next.js API response object.

• **route**: `string`

The route to handle.

• **method**: `APIRouteMethod`

The HTTP method for the request.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/next/src/vramework-next.ts:143](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next.ts#L143)

***

### ssrRequest()

```ts
ssrRequest<In, Out>(
   request, 
   response, 
   route, 
   method, 
data): Promise<Out>
```

Handles an SSR request, routing it to the appropriate handler.

#### Type Parameters

• **In** *extends* `Record`\<`string`, `any`\>

• **Out**

#### Parameters

• **request**: `IncomingMessage` & `object`

The incoming message request object.

• **response**: `ServerResponse`\<`IncomingMessage`\>

The server response object.

• **route**: `string`

The route to handle.

• **method**: `APIRouteMethod`

The HTTP method for the request.

• **data**: `In`

The data to be sent with the request.

#### Returns

`Promise`\<`Out`\>

A promise that resolves to the response data.

#### Defined in

[packages/servers/next/src/vramework-next.ts:113](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next.ts#L113)

***

### staticActionRequest()

```ts
staticActionRequest<In, Out>(
   route, 
   method, 
data): Promise<Out>
```

Handles a static action request, routing it to the appropriate handler with user session skipping.

#### Type Parameters

• **In** *extends* `Record`\<`string`, `any`\>

• **Out**

#### Parameters

• **route**: `unknown`

The route to handle.

• **method**: `unknown`

The HTTP method for the request.

• **data**: `In`

The data to be sent with the request.

#### Returns

`Promise`\<`Out`\>

A promise that resolves to the response data.

#### Defined in

[packages/servers/next/src/vramework-next.ts:84](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/next/src/vramework-next.ts#L84)
