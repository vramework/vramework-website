---
sidebar_position: 5
title: Errors
description: Associating errors with HTTP codes
---

The final part of the puzzle is how we handle errors.

By default, an error is handled by bubbling up to the request itself and then being compared to the errors we register via the `addError` or `addErrors` function. This associates it with a status code and a default custom message to send back if needed.

```typescript
import { addErrors, EError } from '@vramework/core/src/errors'

export class AccessDeniedError extends EError { }
export class NotFoundError extends EError { }
export class BookLimitExceeded extends EError { }

addErrors([
  [AccessDeniedError, { status: 409, message: '' }],
  [NotFoundError, { status: 404, message: '' }],
  [BookLimitExceeded, { status: 404, message: '' }],
])
```

Ideally, we could just compare this to the built-in `Error` function. However, I have encountered issues where they are not the same in workspaces (I would love to figure that out someday).

Instead, we have decided to extend the `Error` method in Vramework. Vramework also associates an `errorId` with each error thrown, which is returned to the user and helps with tracing and debugging.

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
