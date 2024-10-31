---
sidebar_position: 30
title: NextJS Pages
description: Using Vramework with NextJS Pages API
---

# Using Vramework with NextJS Pages

Using NextJS Pages with Vramework is more straightforward than the App Router, as it's a stable API and keeps API and SSR aspects separate.

### API Functions

When handling API requests for NextJS, call `apiRequest` directly. The data is contained within the request itself, so it doesn't need to be referenced separately.

```typescript reference
https://raw.githubusercontent.com/vramework/workspace-starter/blob/master/apps/next-pages/src/pages/api/todo.ts
```

### SSR Loading

For server-side rendering, load the data within the `getServerSideProps` method, which expects the data to be passed in directly.

```typescript
import { vramework } from '@/vramework-nextjs'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const todos = await vramework().ssrRequest(
    req,
    res,
    '/todos',
    'get',
    null
  )

  return {
    props: {
      todos,
    },
  }
}
```