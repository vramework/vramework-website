---
sidebar_position: 50
title: NextJS Pages
description: Using Vramework with NextJS Pages API
---

# Using Vramework with NextJS Pages API

Using NextJS Pages with Vramework is more straightforward than the App Router, as it keeps API and SSR aspects separate.

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

### 2. API Functions

When handling API requests for NextJS, call `apiRequest` directly. The data is contained within the request itself, so it doesn't need to be referenced separately.

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'
import { vramework } from '../../../vramework'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method?.toLowerCase()
  let route = method == 'post' ? '/todo' : '/todo/:todoId'
  await vramework().apiRequest(req, res, {
    method: method as any,
    route,
  })
}
```

### 3. SSR Loading

For server-side rendering, load the data within the `getServerSideProps` method, which expects the data to be passed in directly.

```typescript
import { vramework } from '../../vramework'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const todos: Todos = await vramework().ssrRequest(
    req,
    res,
    {
      method: 'get',
      route: '/todos',
    },
    {}
  )

  return {
    props: {
      todos,
    },
  }
}
```

This setup allows for efficient integration of Vramework with NextJS Pages, maintaining a clear separation between API and SSR functionalities.