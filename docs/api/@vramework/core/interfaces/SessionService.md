# Interface: SessionService\<UserSession\>

Interface for handling user sessions.

## Type Parameters

• **UserSession** = [`CoreUserSession`](CoreUserSession.md)

The type of the user session.

## Properties

### getUserSession()

```ts
getUserSession: (credentialsRequired, vrameworkRequest) => Promise<undefined | UserSession>;
```

Retrieves the user session.

#### Parameters

• **credentialsRequired**: `boolean`

A flag indicating whether credentials are required.

• **vrameworkRequest**: [`VrameworkRequest`](../classes/VrameworkRequest.md)\<`any`\>

The request object.

#### Returns

`Promise`\<`undefined` \| `UserSession`\>

A promise that resolves to the user session or undefined.

#### Defined in

[packages/core/src/services/session-service.ts:15](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/session-service.ts#L15)
