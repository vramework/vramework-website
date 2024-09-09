---
sidebar_position: 2
title: Permissions
description: Creating permission guards
---

## Introduction to Permissions

Permissions in Vramework are evaluated before each function execution, similar to guards in NestJS. These permissions ensure that only authorized users can access certain functionality within the system.

A permission function operates much like an `APIFunction`, but it returns a boolean to indicate whether the user has access. If an error is thrown, the process results in an error code other than 403. 

### Note:
Since permissions are checked in parallel, only the first error thrown will be used to block access.

## Basic Permission Check

A simple permission check might involve verifying the user’s session to determine their role:

```typescript
const isUser: APIPermission<unknown> = (_, _, session) => {
  return session.isUser;
}

const isAdmin: APIPermission<unknown> = (_, _, session) => {
  return session.isAdmin;
}
```

In this case, the `isUser` permission checks if the session belongs to a user, while `isAdmin` checks if the session belongs to an admin.

## Advanced Permission Check

For more complex permissions, asynchronous logic involving external services can be introduced. For example, permission checks may require querying a database:

```typescript
const belowLimit: APIPermission<unknown> = async (services, _, session) => {
  const booksTaken = await services.kysely
    .selectFrom('user')
    .join('books')
    // Add query logic
    ...
  return booksTaken < someLimit;
}
```

In this case, the permission is based on the number of books a user has checked out. This check requires interaction with a database, making it more dynamic.

## Permission Service

Vramework also offers a **Permission Service** for application-wide permission checks. This is useful for enforcing higher-order permission rules, similar to route guards in NestJS or Express.

```typescript
export interface PermissionService {
    verifyRouteAccess(apiRoute: CoreAPIRoute<unknown, unknown>, session?: CoreUserSession): Promise<void>;
}
```

### Example Implementation

The following example demonstrates a permission service that restricts access to all routes containing `/admin` to users with admin privileges:

```typescript
class CustomPermissionService implements PermissionService {
  public verifyRouteAccess(apiRoute, session) {
    if (apiRoute.route.includes('/admin')) {
      if (session.isAdmin !== true) {
        throw new AccessDeniedError();
      }
    }
  }
}
```

In this implementation, any route that includes `/admin` requires the session to indicate the user is an admin. If not, an `AccessDeniedError` is thrown, preventing access to the route.

## Conclusion

Vramework's permission system provides flexibility, allowing permissions to be checked at both the function and route levels. By combining simple and advanced checks, it ensures that only authorized users can access sensitive parts of an application.