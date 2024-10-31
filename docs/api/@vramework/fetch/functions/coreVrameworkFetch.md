# Function: coreVrameworkFetch()

```ts
function coreVrameworkFetch(
   uri, 
   data, 
options?): Promise<Response>
```

The `coreVrameworkFetch` function is a utility for making HTTP requests with dynamic URI and data handling.
It can automatically replace URI parameters, append query strings for GET requests, and set the request body for POST, PATCH, or PUT requests.

## Parameters

• **uri**: `string`

The endpoint URI for the request. URI parameters can be specified using `:param` syntax.

• **data**: `any`

The data to be included in the request, either as query parameters or as the request body.

• **options?**: `Omit`\<`RequestInit`, `"body"`\>

Optional configuration options for the fetch request, excluding the body.

## Returns

`Promise`\<`Response`\>

- A promise that resolves to the response of the fetch request.

## Defined in

[packages/fetch/src/vramework-fetch.ts:10](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/fetch/src/vramework-fetch.ts#L10)
