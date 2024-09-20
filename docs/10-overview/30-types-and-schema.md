---
sidebar_position: 30
title: Types and Schemas
description: A brief overview of Vramework's capabilities
---

## Introduction to Types and Schemas

Vramework is almost driven entirely by **Types**. This ensures type safety across the application, reducing errors and improving maintainability.

In this example project, without a database connection, all types are defined from scratch. Here's an example:

```typescript
import { RequireAtLeastOne } from "@vramework/core/types"

export interface Book {
    id: number
    title: string
    author: string
    year: number
}

export type Books = Book[]
export type JustBookId = Pick<Book, 'id'>
export type CreateBook = Omit<Book, 'id'>
export type UpdateBook = JustBookId & RequireAtLeastOne<CreateBook>
```

By referencing these types in the APIs, it’s clear what data to expect. This ensures consistency and reduces the risk of runtime errors.

## JSON Schema Validation

One of the key benefits of using types is that JSON schemas can be automatically generated to validate incoming data. This means that API endpoints can validate data before processing, ensuring that invalid data doesn't cause unexpected behavior.

To generate these schemas, use the CLI tool:

```bash
npx @vramework/cli schema
```

## Advanced Approach: Database-Driven Types

While defining schemas manually works for small projects, maintaining them alongside a database can become cumbersome. If a field is removed or modified in the database, types defined manually in TypeScript may not reflect those changes until runtime.

To address this, the recommended approach is to generate types directly from the database. This provides a more dynamic and error-proof system by ensuring the types always align with the current state of the database.

Here’s a quick example:

```typescript
import DB from 'kysely';

export type Books = DB.Book[];
export type JustBookId = Pick<DB.Book, 'id'>;
export type CreateBook = Omit<DB.Book, 'id'>;
export type UpdateBook = JustBookId & RequireAtLeastOne<CreateBook>;
```

This method reduces manual overhead and ensures that both the database and application types are always in sync.

For more details, refer to the advanced [database and types](../concepts/database-and-types/) documentation.