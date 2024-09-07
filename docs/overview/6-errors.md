---
sidebar_position: 5
title: Errors
description: Associating errors with HTTP codes
---

The final part of the puzzle is handling errors.

By default, an error bubbles up to the request and is compared to the errors registered via the `addError` or `addErrors` functions. This process associates the error with a status code and a default custom message to send back if needed.

### Registering Errors

Register errors with their corresponding status codes and messages using `addErrors`:

```typescript
import { addErrors, EError } from '@vramework/core/src/errors'

export class AccessDeniedError extends EError { }
export class NotFoundError extends EError { }
export class BookLimitExceeded extends EError { }

addErrors([
  [AccessDeniedError, { status: 409, message: 'Access denied' }],
  [NotFoundError, { status: 404, message: 'Resource not found' }],
  [BookLimitExceeded, { status: 400, message: 'Book limit exceeded' }],
])
```

### Error Handling and Custom Errors

While it might seem straightforward to use the built-in `Error` function, issues with error handling across different workspaces have been observed. To address this, Vramework extends the `Error` class. Each error thrown also has an associated `errorId`, which aids in tracing and debugging.

Here is how the custom `EError` class is defined:

```typescript
export class EError extends Error {
  constructor(message?: string, private options?: { errorId?: string }) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }

  public getErrorId(): string | undefined {
    return this.options?.errorId
  }
}
```

This approach ensures consistency and provides additional context for error handling in Vramework.
