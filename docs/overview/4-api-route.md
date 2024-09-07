---
sidebar_position: 3
title: API Routes
description: Mapping HTTP calls to functions
---

The objective is to achieve the following workflow:

* Listen for an HTTP call on a specified route (POST, GET, HEAD, PATCH).
* Deny the request if a session is required but missing.
* Extract the necessary information to pass to the function.
* Validate that the information meets expectations.
* Deny the request if permissions are invalid.
* Return the response if successful.
* Return an error and error code if not.

To accomplish this, `APIRoutes` are used. An API route is a configuration object that specifies the behavior when a route is triggered:

```typescript
export const routes: APIRoutes = [{
  // The type of HTTP message
  type: 'get',
  // The HTTP route (supports query and path parameters)
  route: 'v1/book',
  // The function to execute. Inline functions are also supported
  func: getBook,
  // Whether a user session is required
  requiresSession: true,
  // The JSON schema to validate input against
  input: 'JustBookId',
  // Used to generate documentation, optional
  docs: {
    query: Pick<JustBookId, 'bookId'>,
    body: Pick<JustBookId, 'bookId'>,
    path: Pick<JustBookId, 'bookId'>,
    output: 'Book',
  },
  // A set of permissions to check against; at least one must be valid
  permissions: {
    // Either a single permission
    isEmployee,
    // Or multiple permissions
    userWithinLimits: [belowLimit, isUser]
  }
}]
```

## Data Handling

The source of the data—whether from the query, path, or body—can be ambiguous. Vramework merges the data from these sources and will throw an error if conflicts arise.

For example, given the following path:

```typescript
`/v1/book/:bookId`
```

And the HTTP call:

```typescript
httpPost(`/v1/book/abc?bookId=abc`, {
    bookId: 'abc'
})
```

This will pass if the data is consistent across all sources. However, if there are discrepancies, an error will be thrown.

### Approach Comparison

The following table outlines the pros and cons of using the same variable names in APIs for different purposes. Vramework emphasizes unique variable names to avoid conflicts. If necessary, an escape hatch could be added to bypass validation on specific routes and retrieve values via the HTTP service instead.

| **Approach**                         | **Pros**                                                                 | **Cons**                                                                    |
|--------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **1. Explicit Source Selection**     | - Clear and unambiguous.                                                 | - Requires additional code to handle each data source explicitly.          |
|                                      | - Reduces chances of accidental conflicts.                               | - Can be tedious if many parameters are shared across sources.              |
|                                      | - Ideal for creating documentation.                                       |                                                                             |
| **2. Establish Priority Rules**      | - Allows flexibility without extra code for each source.                | - Implicit decisions can cause unexpected behavior if priorities are unclear. |
|                                      | - Convenient for simple, non-conflicting cases.                          | - Harder to debug when conflicts arise due to hidden logic.                 |
|                                      | - Less code to maintain for small-scale applications.                    |                                                                             |
| **3. Fail Fast for Conflicting Data**| - Enforces consistency and prevents hidden bugs.                         | - Can result in additional error-handling code.                              |
|                                      | - Ensures ambiguous situations are addressed upfront.                    | - May frustrate users if they must provide values consistently across all sources. |
|                                      | - Guarantees data integrity by flagging conflicting inputs.              | - Adds complexity when handling frequent conflicts.                         |

## Automatic API Documentation Generation

Generating API documentation without a build step remains a challenge. Generating a Swagger file, which can be transformed into various formats, is a high priority. Suggestions and contributions are welcome and can be raised [on GitHub](./).

## Scalability and Verbosity

Although this approach may seem verbose or non-scalable for some projects, it has worked effectively for the products that have adopted it. Exploring TypeScript features to streamline route definitions, similar to Express or NestJS, is a potential improvement.

The current approach provides strict TypeScript validation across all data and API layers. For example, a request without a session cannot call an `APIFunction` that requires one, resulting in a compilation error. Further enhancements could include inferring schema names and improving schema validation.
