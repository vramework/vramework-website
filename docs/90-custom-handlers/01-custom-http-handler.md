---
sidebar_position: 0
title: Writing your own HTTP handler
---

You can integrate Vramework into most nextJS HTTP servers in three steps.

:::info
We'll use express here as the example request/response as it's most popular.
:::

### Create a class to extend VrameworkRequest

This wraps the request object provided into a vramework handler

```typescript reference title="Vramework Express Request"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/servers/express/express-middleware/src/vramework-express-request.ts
```

### Create a class to extend VrameworkResponse

This wraps the response object provided into a vramework handler

```typescript reference title="Vramework Express Response"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/servers/express/express-middleware/src/vramework-express-response.ts
```

### Call runHTTPRoute with the correct request and response object

```typescript title="Vramework Middleware"
await runHTTPRoute(
    new VrameworkExpressRequest(req),
    new VrameworkExpressResponse(res),
    singletonServices,
    createSessionServices,
    {
        // The HTTP method
        method: req.method.toLowerCase() as any,
        // The HTTP Route
        route: req.path,
        // Whether we want allow the route handler to return a 404, or 
        // not do anything if the route isn't found
        respondWith404: true
        // This skips us trying to find a session for a route that 
        // isn't authenticated
        skipUserSession: false
    }
)
```
