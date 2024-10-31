# Interface: JWTService\<UserSession\>

Interface for handling JSON Web Tokens (JWT).

## Type Parameters

• **UserSession** = [`CoreUserSession`](CoreUserSession.md)

The type of the user session.

## Properties

### decode()

```ts
decode: <T>(hash, invalidHashError?, debug?) => Promise<T>;
```

Decodes a JWT into its payload.

#### Type Parameters

• **T**

#### Parameters

• **hash**: `string`

The JWT to decode.

• **invalidHashError?**: `Error`

An optional error to throw if the hash is invalid.

• **debug?**: `boolean`

An optional flag for debugging.

#### Returns

`Promise`\<`T`\>

A promise that resolves to the decoded payload.

#### Defined in

[packages/core/src/services/jwt-service.ts:23](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/services/jwt-service.ts#L23)

***

### decodeSession()

```ts
decodeSession: (jwtToken, debug?) => Promise<UserSession>;
```

Decodes a user session from a JWT.

#### Parameters

• **jwtToken**: `string`

The JWT representing the user session.

• **debug?**: `any`

An optional flag for debugging.

#### Returns

`Promise`\<`UserSession`\>

A promise that resolves to the decoded user session.

#### Defined in

[packages/core/src/services/jwt-service.ts:35](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/services/jwt-service.ts#L35)

***

### encode()

```ts
encode: <T>(expiresIn, payload) => Promise<string>;
```

Encodes a payload into a JWT.

#### Type Parameters

• **T** *extends* `unknown`

#### Parameters

• **expiresIn**: `string`

The expiration time of the token.

• **payload**: `T`

The payload to encode.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the encoded JWT.

#### Defined in

[packages/core/src/services/jwt-service.ts:14](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/services/jwt-service.ts#L14)
