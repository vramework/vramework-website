# Class: JoseJWTService\<UserSession\>

Service for handling JSON Web Tokens (JWT) using the jose library.

## Type Parameters

• **UserSession** *extends* `CoreUserSession`

The type of the user session.

## Implements

- `JWTService`

## Constructors

### new JoseJWTService()

```ts
new JoseJWTService<UserSession>(getSecrets, logger?): JoseJWTService<UserSession>
```

#### Parameters

• **getSecrets**

A function that retrieves an array of secrets.

• **logger?**: `Logger`

An optional logger for logging information.

#### Returns

[`JoseJWTService`](JoseJWTService.md)\<`UserSession`\>

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:28](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L28)

## Methods

### decode()

```ts
decode<T>(token): Promise<T>
```

Decodes a JWT into its payload.

#### Type Parameters

• **T**

#### Parameters

• **token**: `string`

The JWT to decode.

#### Returns

`Promise`\<`T`\>

A promise that resolves to the decoded payload.

#### Implementation of

`JWTService.decode`

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:76](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L76)

***

### decodeSession()

```ts
decodeSession(session?): Promise<UserSession>
```

Decodes a user session from a JWT.

#### Parameters

• **session?**: `string`

The JWT representing the user session.

#### Returns

`Promise`\<`UserSession`\>

A promise that resolves to the decoded user session.

#### Throws

If the session is not provided.

#### Implementation of

`JWTService.decodeSession`

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:97](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L97)

***

### encode()

```ts
encode<T>(expiresIn, payload): Promise<string>
```

Encodes a payload into a JWT.

#### Type Parameters

• **T**

#### Parameters

• **expiresIn**: `string`

The expiration time of the token.

• **payload**: `T`

The payload to encode.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the encoded JWT.

#### Implementation of

`JWTService.encode`

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:57](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L57)

***

### init()

```ts
init(): Promise<void>
```

Initializes the service by retrieving and setting the secrets.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:36](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L36)

***

### verify()

```ts
verify(token): Promise<void>
```

Verifies the validity of a JWT.

#### Parameters

• **token**: `string`

The JWT to verify.

#### Returns

`Promise`\<`void`\>

A promise that resolves if the token is valid.

#### Defined in

[packages/services/jose/src/jose-jwt-service.ts:86](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/services/jose/src/jose-jwt-service.ts#L86)
