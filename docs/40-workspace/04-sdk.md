---
sidebar_position: 3  
title: SDK  
---

:::note
The code in workspace repo for this section is not yet complete
:::

The SDK directory contains all types, routes, and the necessary HTTP calls to interact with the server.

Although it is not yet auto-generated (see [issue](https://github.com/vramework/vramework/issues/7)) like in [tRPC](https://trpc.io/), the current setup has the advantage of not relying on a third-party library.

Additionally, the SDK includes small helper functions such as `injectIntoUrl` to facilitate the use of routes.

```typescript
export const updateUser = async (userId: string, data: Omit<UpdateUser, 'userId'>) => {
  if (data.avatar) {
    data.avatar = await uploadObjectUrl(...)
  }
  return await patch<Omit<UpdateUser, 'userId'>>(injectIntoUrl(RoutePath.USER_CRUD, { userId }), data, false)
}
```
