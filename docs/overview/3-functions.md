---
sidebar_position: 3
title: Functions
description: How functions work
---

Functions provide a specific interface that Vramework can call into.

Functions can take arguments, return objects, interact with services, or throw errors.

## Function Approach

In Vramework, functions are often considered as a service layer, as they are HTTP-agnostic and typically interact with a database or cache layer. Logic is commonly placed directly within these functions.

```typescript
export interface Book {
  bookId: string
  title: string
}

export type JustBookId = Pick<Book, 'bookId'>

/**
 * services: The Services created
 * data: The input data, in this case JustBookId
 * returns: An object that matches the Book interface
 * throws: BookNotFoundError
 */
const getBook: APIFunction<JustBookId, Book> = async (services, data) => {
  return await services.database
    .selectFrom('book')
    .selectAll()
    .where('bookId', '=', data.bookId)
    .executeTakeFirstOrThrow()
}
```

## Service Approach

An alternative approach involves using a controller/service pattern similar to NestJS. In this case, the `APIFunction` is not strictly required and the logic can be directly placed within the `APIRoute` (discussed in the next section).

```typescript
export interface Book {
  bookId: string
  title: string
}

export type JustBookId = Pick<Book, 'bookId'>

export class BookService {
  public async getBook(bookId: string): Promise<Book> {
    return await services.database
      .selectFrom('book')
      .selectAll()
      .where('bookId', '=', bookId)
      .executeTakeFirstOrThrow()
  }
}

/**
 * services: The Services created
 * data: The input data, in this case JustBookId
 * returns: An object that matches the Book interface
 * throws: BookNotFoundError
 */
const getBook: APIFunction<JustBookId, Book> = async (services, data) => {
  return await services.books.getBook(data.bookId)
}
```

## Errors

A detailed discussion on how errors work will follow. For now, it is important to know that the constructor of an error can be mapped to the appropriate error code in the future.

## HTTP Access

To access HTTP elements, such as the request object or setting attributes on the response, it is necessary to create (or use once available in core) an HTTP service that provides this information.

This approach helps maintain an abstraction layer to support different deployment strategies and libraries, facilitates easier stubbing, and provides clearer API names.

## Function Interfaces

```typescript
export type APIFunction<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session: UserSession) => Promise<Out>

export type APIFunctionSessionless<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session?: UserSession) => Promise<Out>
```

The next topic will cover how these functions are wired up to actual HTTP calls.
