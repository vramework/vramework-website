---
sidebar_position: 4
title: Permissions
description: Creating permission guards
---

Permissions are run before each function, and are similar to the idea of guards in nestJS.

A permission function is identical to the APIFunction, except it is expected to return a boolean to indicate whether it succeeded or not.

You can also throw an error instead, which will result in an error code other than a 403

**Note**: Since permissions are checked in parralel, the first error thrown will be used

Looking at the examples we have in the example project:

Simplest check is against session:

```typescript
const const isUser: APIPermission<unknown> = (_, _, session) => {
  return session.isUser
}

const const isAdmin: APIPermission<unknown> = (_, _, session) => {
  return session.isUser
}
```

But you can also do more advanced permissions:

```typescript
const const belowLimit: APIPermission<unknown> = (services, _, session) => {
  const booksTaken = await services.kysely
    .selectFrom('user')
    .join('books')
    ...
}
```

***Note that the data input here determines if the permission rulecan be used***
