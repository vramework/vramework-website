---
sidebar_position: 3
title: Functions
description: How functions work
---

Functions provide a specific interface that vramework can call into.

It can take an argument, return an object, interact with services, or throw an error.

## Function Approach

I tend to think of APIFunctions as a service layer, since it is completely HTTP agnostic already, and state is often stored in a database or cache layer. So I tend to put my logic in there directly.

```typescript
export interface Book {
    bookId: string
    title: string
}

export type JustBookId = Pick<Book, 'bookId'>

/**
 * services: The Services we created
 * data: The input data, in this case JustBookId
 * returns: An object that matches the Book interface
 * throws: BookNotFoundError
 */
const getBook: APIFunction<JustBookId, Book> = (services, data) => {
  return await services.database
    .selectFrom('book')
    .selectAll()
    .where('bookId', '=', data.bookId)
    .executeTakeFirstOrThrow()
}
```

## Service Approach

You can also structure things differently and use a controller / service approach similar to nestJS if desired. The APIFunction in this case isn't really required, and can be directly put inside of the APIRoute (next page).

```typescript
export interface Book {
    bookId: string
    title: string
}

export type JustBookId = Pick<Book, 'bookId'>

export class BookService {
    public getBook (bookdId: string): Promise<Book> {
      return await services.database
        .selectFrom('book')
        .selectAll()
        .where('bookId', '=', data.bookId)
        .executeTakeFirstOrThrow()
    }
}

/**
 * services: The Services we created
 * data: The input data, in this case JustBookId
 * returns: An object that matches the Book interface
 * throws: BookNotFoundError
 */
const getBook: APIFunction<JustBookId, Book> = (services, data) => {
  return await services.books.getBook(data.bookId)
}
```

## Errors

We will discuss more in depth how errors work shortly. For now, we just need to know that as long as we can what the constructor of an error is we can map it to the correct error code in the future.

## HTTP Access

In order to access HTTP elements, such as the request object, or setting anything on the response, you would need to create (or use once one lands in core) a HTTP service that provides you extra information.

A few of the reasons behind this is so that we can keep the abstraction layer (to support different deployment strategies and libraries), easily stub them out, have clearer API names.

## Function interfaces

```typescript
export type APIFunction<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session: UserSession) => Promise<Out>

export type APIFunctionSessionless<In, Out, RequiredServices = Services> = (services: RequiredServices, data: In, session?: UserSession | undefined) => Promise<Out>
```

Next up, how we do actually wire this up to an actual HTTP call.
