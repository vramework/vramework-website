---
sidebar_position: 4
title: Permissions
description: Creating permission guards
---

Permissions are evaluated before each function execution and are conceptually similar to guards in NestJS.

A permission function operates similarly to an `APIFunction`, but it is expected to return a boolean indicating success or failure. An error can also be thrown, which results in an error code other than 403.

**Note**: Since permissions are checked in parallel, the first error thrown will be used.

### Basic Permission Check

A simple permission check involves verifying the session:

```typescript
const isUser: APIPermission<unknown> = (_, _, session) => {
  return session.isUser;
}

const isAdmin: APIPermission<unknown> = (_, _, session) => {
  return session.isAdmin;
}
```

### Advanced Permission Check

More complex permissions can be implemented as follows:

```typescript
const belowLimit: APIPermission<unknown> = async (services, _, session) => {
  const booksTaken = await services.kysely
    .selectFrom('user')
    .join('books')
    // Additional query logic
    ...
  return booksTaken < someLimit;
}
```

**Note**: The data input determines whether a specific permission rule can be applied.
