# Class: CoreVrameworkFetch

The `CoreVrameworkFetch` class provides a utility for making HTTP requests, including handling authorization,
transforming dates in responses, and managing server URLs. This class is designed to simplify API interactions
with configurable options and support for JWT and API key-based authentication.

## Constructors

### new CoreVrameworkFetch()

```ts
new CoreVrameworkFetch(options): CoreVrameworkFetch
```

Constructs a new instance of the `CoreVrameworkFetch` class.

#### Parameters

• **options**: [`CoreVrameworkFetchOptions`](../type-aliases/CoreVrameworkFetchOptions.md) = `{}`

Optional configuration for the fetch utility.

#### Returns

[`CoreVrameworkFetch`](CoreVrameworkFetch.md)

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:41](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L41)

## Methods

### api()

```ts
api(
   uri, 
   method, 
   data, 
options?): Promise<any>
```

Makes an API request with the specified URI, method, and data, and optionally transforms dates in the response.

#### Parameters

• **uri**: `string`

The endpoint URI for the request.

• **method**: [`HTTPMethod`](../type-aliases/HTTPMethod.md)

The HTTP method for the request.

• **data**: `any`

The data to be sent with the request.

• **options?**: `RequestInit`

Additional options for the request.

#### Returns

`Promise`\<`any`\>

- A promise that resolves to the response data.

#### Throws

- Throws the response if the status code is greater than 400.

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:99](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L99)

***

### fetch()

```ts
fetch(
   uri, 
   method, 
   data, 
options?): Promise<Response>
```

Makes a raw fetch request with the specified URI, method, and data.

#### Parameters

• **uri**: `string`

The endpoint URI for the request.

• **method**: [`HTTPMethod`](../type-aliases/HTTPMethod.md)

The HTTP method for the request.

• **data**: `any`

The data to be sent with the request.

• **options?**: `RequestInit`

Additional options for the request.

#### Returns

`Promise`\<`Response`\>

- A promise that resolves to the fetch response.

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:127](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L127)

***

### setAPIKey()

```ts
setAPIKey(apiKey?): void
```

Sets the API key for authorization.

#### Parameters

• **apiKey?**: `string`

The API key to be used for authorization.

#### Returns

`void`

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:85](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L85)

***

### setAuthorizationJWT()

```ts
setAuthorizationJWT(jwt): void
```

Sets the JWT for authorization.

#### Parameters

• **jwt**: `string`

The JWT to be used for authorization.

#### Returns

`void`

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:76](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L76)

***

### setServerUrl()

```ts
setServerUrl(serverUrl): Promise<void>
```

Sets the server URL for subsequent requests.

#### Parameters

• **serverUrl**: `string`

The server URL to be set.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/fetch/src/core-vramework-fetch.ts:67](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/fetch/src/core-vramework-fetch.ts#L67)
