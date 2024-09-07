---
sidebar_position: 3
title: API Routes
description: Mapping HTTP calls to functions
---

Ultimately, our end goal is for the following workflow to occur:

* listen to a HTTP call on a certain route (post | get | head | patch)
* deny if a session is missing but required
* get the information desired to pass to the function
* validate the information is what's expected
* deny if permissions are invalid
* return the response if succesful
* return an error and error code if not

For that, we use APIRoutes. An API route is an config object that provides the instructions for what should occur when a route is triggered:

```typescript
export const routes: APIRoutes = [{
    // The TYPE of HTTP Message
    type: 'get',
    // The HTTP Route (supports query and path params)
    route: 'v1/book',
    // The function to execute. You can also inline it if you want
    func: getBook,
    // Whether a user session is required
    requiresSession: true,
    // The JSON schema to generate from typescript and validate against
    input: 'JustBookId',
    // Used to generate docs, optional
    docs: {
        query: Pick<JustBookId, 'id'>,
        body: Pick<JustBookId, 'id'>,
        path: Pick<JustBookId, 'id'>,
        output: 'Book',
    },
    // A set of permissions to check against, at least one has to be valid
    permissions: {
        // Either a single permission
        isEmployee,
        // Or multiple
        userWithinLimits: [belowLimit, isUser]
    }
}]
```

## Data

The big question is usually how we know where the data is coming from. Whether it's from the query / path or body.

And the answer to that is, we don't really.

Vramework merges the three together, and will throw an error if the data is present in more than one place but conflicts.

So for example, if this is our path:

```typescript
`/v1/book/:bookId`
```

and this is our http call:

```typescript
httpPost(`/v1/book/abc?bookId=abc`, {
    bookId: abc
})
```

It will pass. However if any of the three are not the same, it will throw an error.

### Approach comparion

This table shows some pros and cons of using the same names variables in API for different purposes.

Vramework takes the stance that all variables should be unique. If the need arises, we could add an escape hatch to skip validation on specific routes and retrieve the values via the httpService instead.

| **Approach**                         | **Pros**                                                                 | **Cons**                                                                    |
|--------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **1. Explicit Source Selection**     | - Clear and unambiguous.                                                 | - Requires more code to handle each data source explicitly.                 |
|                                      | - Reduces chances of accidental conflicts.                               | - Can be tedious if many parameters are shared across sources.              |
|                                                         | - Ideal for creating documentation.                                           |                                                                             |
| **2. Establish Priority Rules**      | - Allows flexibility without extra code for each source.                  | - Implicit decisions can cause unexpected behavior if priorities are unclear. |
|                                      | - Convenient for simple, non-conflicting cases.                          | - Harder to debug when conflicts arise due to hidden logic.                 |
|                                      | - Less code to maintain for small-scale applications.                    |    |
| **3. Fail Fast for Conflicting Data**| - Forces consistency and prevents hidden bugs.                           | - Can result in extra error handling code.                                  |
|                                      | - Ensures that ambiguous situations are addressed upfront.               | - May frustrate users if they need to provide values consistently across all sources. |
|                                      | - Guarantees data integrity by flagging conflicting inputs.              | - Adds complexity when handling frequent conflicts.                         |

## How do we automatically generate api docs?

This is the main issue I'm currently facing. I want to avoid a build step, but generating a swagger file (which can then be transformed to anythign else) is a pretty high priority. If you have an idea, please feel free to raise [on github issue](./).

## Wait, isn't this verbose / non-scaleable?

I agree this might be the case for quite a few projects. For the products that adopted it so far, it worked fine.

It would be nice to work some typescript magic to have common aspects for all routes themselves, similar to express on a route level / nestJS on a controller level.

However right now the benefit of this approach is we have very strict typescript validation on all data / apiLayers. An request without a session will not be able to call an APIFunction that requires one for example, and will fail on compilation. I'm sure theres a way this could work, but I'm not sure it's worth the time unless there's a bit more adoption.

There are also some other things we can improve using typescript, like inferring the schemaName (needed to generate schemas to validate).
