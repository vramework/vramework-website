---
sidebar_position: 50
title: NextJS App
description: Using Vramework with NextJS App Router
---

# Using Vramework with NextJS App Router

Deploying Vramework with NextJS allows for code separation benefits without running a separate server, while also leveraging NextJS Server-Side Rendering (SSR) capabilities.

:::warning
The App Router is still in development, with some APIs having an `_unstable` prefix. As a result, certain features like caching may not function as intended yet.
:::

## Key Aspects

### 1. Setting up Vramework

Similar to other deployments, create a `VrameworkNextJS` adapter. Initialize it once and reuse it for the server's lifetime, as NextJS tends to handle things globally.

```typescript
'server-only'
import '@todos/functions/generated/schemas'
import { VrameworkNextJS } from '@vramework/deploy-next'
import { config } from '@todos/functions/src/config'
import { getRoutes } from '@todos/functions/generated/routes'
import { createSingletonServices, createSessionServices } from '@todos/functions/src/services'
import { APIRoutes } from '@todos/functions/src/vramework-types'

let _vramework: VrameworkNextJS<APIRoutes> | undefined

export const vramework = () => {
  if (_vramework) {
    return _vramework
  }
  const routes = getRoutes()
  _vramework = new VrameworkNextJS<APIRoutes>(
    config,
    routes,
    createSingletonServices as any,
    createSessionServices
  )
  return _vramework
}
```

### 2. Server-side Actions

Invoke server-side actions by calling the Vramework action request with the method, route, and data.

```typescript
async function addTodo(text: string) {
  'use server'
  await vramework().actionRequest(
    {
      method: 'post',
      route: '/todo',
    },
    { text }
  )
}
```

### 3. SSR Loading

Load data directly via the API within pages by referencing it in the function:

```typescript
export default async function TodoPage() {
  const todos: Todos = await vramework().actionRequest(
    {
      method: 'get',
      route: '/todos',
    },
    {}
  )
  return <TodosCard todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
}
```

For additional functionality or feature requests, please submit an issue on the [Vramework repository](https://github.com/vramework/vramework).