---
sidebar_position: 3
title: SDK
---

**Note**: WIP

The SDK directory contains all the types, routes and ideally the HTTP calls needed to interact with the server.

Unfortunately this isn't auto-generated like in [tRPC](https://trpc.io/), however it does have the benefit of not requiring a third party library to work.

There are also a couple small helper functions, like injectIntoUrl to help use routes.

```typescript
export const updateUser = async (userId: string, data: Omit<UpdateUser, 'userId'>) => {
  if (data.avatar) {
    data.avatar = await uploadObjectUrl(...)
  }
  return await patch<Omit<UpdateUser, 'userId'>>(injectIntoUrl(RoutePath.USER_CRUD, { userId }), data, false)
}
```