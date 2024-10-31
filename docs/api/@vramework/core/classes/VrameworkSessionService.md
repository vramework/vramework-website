# Class: VrameworkSessionService\<UserSession\>

The `VrameworkSessionService` class provides session management capabilities, including handling JWT-based sessions,
cookie-based sessions, and API key-based sessions. It allows for retrieving and transforming user sessions based on different
authentication mechanisms.

## Type Parameters

• **UserSession**

The type representing a user session.

## Implements

- [`SessionService`](../interfaces/SessionService.md)\<`UserSession`\>

## Constructors

### new VrameworkSessionService()

```ts
new VrameworkSessionService<UserSession>(jwtService, options): VrameworkSessionService<UserSession>
```

Constructs a new instance of the `VrameworkSessionService` class.

#### Parameters

• **jwtService**: [`JWTService`](../interfaces/JWTService.md)\<`UserSession`\>

The service for handling JWT operations.

• **options**

Options for configuring the session service.

• **options.cookieNames?**: `string`[]

• **options.getSessionForAPIKey?**

• **options.getSessionForCookieValue?**

• **options.transformSession?**

#### Returns

[`VrameworkSessionService`](VrameworkSessionService.md)\<`UserSession`\>

#### Defined in

[packages/core/src/services/vramework-session-service.ts:22](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/services/vramework-session-service.ts#L22)

## Methods

### getUserSession()

```ts
getUserSession(
   credentialsRequired, 
   request, 
debugJWTDecode?): Promise<undefined | UserSession>
```

Retrieves the user session.

#### Parameters

• **credentialsRequired**: `boolean`

Whether credentials are required to proceed.

• **request**: [`VrameworkRequest`](VrameworkRequest.md)\<`any`\>

The request object containing headers and cookies.

• **debugJWTDecode?**: `boolean`

Whether to enable debugging for JWT decoding.

#### Returns

`Promise`\<`undefined` \| `UserSession`\>

A promise that resolves to the user session, or `undefined` if no session is found and credentials are not required.

#### Throws

- Throws an error if credentials are required but no session is found.

#### Implementation of

[`SessionService`](../interfaces/SessionService.md).[`getUserSession`](../interfaces/SessionService.md#getusersession)

#### Defined in

[packages/core/src/services/vramework-session-service.ts:83](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/services/vramework-session-service.ts#L83)
