# Interface: PermissionService

Interface for handling permission verification.

## Methods

### verifyRouteAccess()

```ts
verifyRouteAccess(route, session?): Promise<void>
```

Verifies access to a route.

#### Parameters

• **route**: [`CoreAPIRoute`](../type-aliases/CoreAPIRoute.md)\<`unknown`, `unknown`, `any`\>

The route to verify access for.

• **session?**: [`CoreUserSession`](CoreUserSession.md)

The user session.

#### Returns

`Promise`\<`void`\>

A promise that resolves if access is granted.

#### Defined in

[packages/core/src/services/permission-service.ts:14](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/permission-service.ts#L14)
