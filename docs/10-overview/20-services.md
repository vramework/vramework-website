---
sidebar_position: 20
title: Services  
description: How services work  
---

## Introduction to Services in Vramework

Services in Vramework are a fundamental way for functions to interact with any form of external state.

Most services are simple in nature, only requiring optional initialization and cleanup steps. Let's look at an example.

### Example: Book Management Service

Here's an example service that manages a collection of books. Notice that it doesn't depend on any Vramework-specific features or libraries, making it straightforward and easy to use.

It also demonstrates how to handle errors using `NotFoundError`. This error type is recognized by Vramework and automatically mapped to an appropriate message.

```typescript
import { Book, Books, CreateBook } from "./books.types";
import { NotFoundError } from "@vramework/core/errors"

/**
 * Service for managing books with basic CRUD operations.
 */
export class BookService {
    private books: Book[] = [];
    private nextId: number = 1;

    /**
     * Creates a new book and adds it to the collection.
     */
    createBook(book: CreateBook): Book {
        const newBook: Book = { id: this.nextId++, ...book };
        this.books.push(newBook);
        return newBook;
    }

    /**
     * Retrieves a book by its unique ID.
     * Throws a `NotFoundError` if the book isn't found.
     */
    getBook(id: number): Book {
      const book = this.books.find(book => book.id === id);
      if (!book) {
        throw new NotFoundError(`Book with ID ${id} not found`);
      }
      return book;
    }

    /**
     * Retrieves the list of all books.
     */
    getBooks(): Books {
      return this.books;
    }

    /**
     * Updates a book's details.
     */
    updateBook(id: number, updatedInfo: Partial<Omit<Book, 'id'>>): Book {
      const book = this.getBook(id);
      Object.assign(book, updatedInfo);
      return book;
    }

    /**
     * Deletes a book by its ID.
     */
    deleteBook(id: number): boolean {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
          this.books.splice(index, 1);
          return true;
      }
      return false;
    }
}
```

## Types of Services

Vramework offers two main types of services:

### Singleton Services

These services are created once when the server starts and remain active until the server shuts down. Singleton services are ideal for managing global resources, like:

- **Session Management**: Validates user sessions
- **Database Connection**: Manages database connections
- **Email Provider**: Sends emails (like verification emails or notifications)

### Session Services

These are created for each API call and exist only for the duration of that call. They can interact with user sessions, request and response objects, and more.

The core services are:

- **VrameworkRequest**: Access request data (like headers)
- **VrameworkResponse**: Modify the response (like setting cookies)

Custom examples include:

- **Database Client**: Handles database transactions
- **TemporaryFileService**: Manages temporary files that are automatically deleted when the session ends

## How to Create Services

Creating services in Vramework is a straightforward process, relying on basic functions to return services, along with a factory to generate session services.

Here’s an example of how to set up custom types and services:

```typescript
import { CoreConfig, CoreSingletonServices, CoreUserSession } from '@vramework/core/types';
import { BookService } from './book.service';

/**
 * Custom config for services.
 */
export interface Config extends CoreConfig {}

/**
 * All custom singleton services.
 */
export type SingletonServices = CoreSingletonServices & {
  books: BookService;
};

/**
 * Custom session services.
 */
export interface Services extends CoreHTTPServices {}

/**
 * Custom user session definition.
 */
export interface UserSession extends CoreUserSession {}
```

Now, let's create the services:

```typescript
import { ConsoleLogger } from '@vramework/core/services/logger';
import { Config, SingletonServices } from './api';
import { BookService } from './book.service';

export const createSingletonServices = async (config: Config): Promise<SingletonServices> => {
  const logger = new ConsoleLogger();

  if (config.logLevel) {
    logger.setLevel(config.logLevel);
  }

  return {
    config,
    logger,
    books: new BookService(),
  };
};

export const createSessionServices = (services: Services, session: UserSession) => {
  return {
    ...services
  }
}
```

## Dependency Lookup vs. Dependency Injection

Vramework supports both **dependency lookup** and **dependency injection** for service management.

| **Aspect**               | **Dependency Lookup**                                             | **Dependency Injection**                                         |
|--------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Dependency Acquisition**| Object retrieves dependencies as needed.                        | Dependencies are provided when the object is created.            |
| **Responsibility**        | The object manages its own dependencies.                        | The system provides dependencies.                                |
| **Flexibility**           | Flexible, since dependencies are acquired on demand.            | Less flexible but reduces runtime decision-making.               |
| **Coupling**              | Tighter coupling, as the object knows how to get its dependencies. | Looser coupling, making the system more modular.                 |
| **Testability**           | Requires mocking during testing.                                | Easily testable since dependencies are injected.                 |
| **Best Use Case**         | When runtime flexibility is important.                          | When system decoupling and easy testing are priorities.          |

## Advanced Use: Switching Between Local and Cloud Services

Vramework allows you to switch between local and cloud services easily, which is especially helpful for development environments. Here's an example:

```typescript
const isProduction = process.env.NODE_ENV === 'production';
let content: S3Content | LocalContent;
if (isProduction) {
  const keypairId = await secrets.getSecret(config.secrets.cloudfrontContentId);
  const privateKeyString = await secrets.getSecret(config.secrets.cloudfrontContentPrivateKey);
  content = new S3Content(config.content, logger, { keypairId, privateKeyString });
} else {
  content = new LocalContent(config, logger);
}
```

For unit tests, you can use a `createServicesStubs` file to mock services using tools like SinonJS or Jest.

By understanding and mastering how services work in Vramework, you'll be able to efficiently manage both session-based and global resources, making your applications more scalable and maintainable.