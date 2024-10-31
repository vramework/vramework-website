---
sidebar_position: 20
title: NextJS App
description: Using Vramework with NextJS App Router
---

# Using Vramework with NextJS App Router

:::info
The nextJS app router currently supports nextJS version 14, as version 15 has breaking changes when it comes to headers.
:::

:::warning
The App Router is still in development, with some APIs having an `_unstable` prefix. As a result, certain features like caching may not function as intended yet.
:::

### Server-side Actions

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

### SSR Loading

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

### Static SSR Loading

For when your server side rendering isn't based on the user session (for example during build-time), you can use `staticActionRequest`.

```typescript
export default async function TodoPage() {
  const todos: Todos = await vramework().staticActionRequest(
    {
      method: 'get',
      route: '/todos',
    },
    {}
  )
  return <TodosCard todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
}
```