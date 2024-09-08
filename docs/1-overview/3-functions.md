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
import { type Book, type UpdateBook, type Books, CreateBook, JustBookId } from "./books.types";
import { type APIRoutes, type APIRoute } from "./vramework-types";

const getBook: APIRoute<CreateBook, Book> = {
    type: 'get',
    route: '/book/:id',
    schema: 'JustBookId',
    func: async (services, data) => await services.books.createBook(data),
}

const updateBook: APIRoute<UpdateBook, Book> = {
    type: 'patch',
    route: '/book/:id',
    schema: 'UpdateBook',
    func: async (services, { id, ...book }) => await services.books.updateBook(id, book),
}

export const routes: APIRoutes = [
    getBook, 
    updateBook, 
]
```

## Errors

A detailed discussion on how errors work will follow. For now, it is important to know that the constructor of an error can be mapped to the appropriate error code in the future.

## HTTP Access

To access HTTP elements, such as the request object or setting attributes on the response, it is necessary to create (or use once available in core) an HTTP service that provides this information.

This approach helps maintain an abstraction layer to support different deployment strategies and libraries, facilitates easier stubbing, and provides clearer API names.

## Function Interfaces

We declare these inside of VrameworkTypes so that all our APIFunctions know their correct types.

```typescript title="vramework-types"
export type APIFunction<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session: UserSession) => Promise<Out>

export type APIFunctionSessionless<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session?: UserSession | undefined) => Promise<Out>
```

The next topic will cover how these functions are wired up to actual HTTP calls.
