---
sidebar_position: 3  
title: Workspaces  
---

Separating components into packages within a repo can offer several advantages, such as:

1. Clear seperation of concerns
2. Supporting different deployment strategies
3. Reducing the pain and effort of private npm repo management without losing any of the benefits

To simplify the process, this documentation focuses on working with the [workspace starter](https://github.com/vramework/workspace-starter). The workspace name is *todos*.

```bash
git clone git@github.com:vramework/workspace-starter.git
```

Upon cloning, the following folder structure will be present:

```bash
backends/
    express/
        bin/
            start.ts
        package.json
    fastify/
        ...
    uws/
        ...
apps/
    next-app/
        ...
    next-page/
        ...
packages/
    functions/
        src/
            events/
                events.functions.ts
                events.channel.ts
            todo/
                todo.functions.ts
                todo.http.ts
            user/
                user.functions.ts
                user.http.ts
        api.ts
        services.ts
        config.ts
        package.json
    services/
        src/
           kysely.ts
           pino.ts
    sdk/
        types/
            todo.types.ts
            user.types.ts
sql/
    0001-initial.sql
package.json
```

This structure resembles previous project setups but is now organized into individual workspaces. The benefit of this approach is the ability to deploy multiple backends seamlessly while sharing types across the entire codebase. This allows each backend to focus on specific routes, whether used for microservices or for integrating functions into other services, such as Next.js.

This section provides an overview of each package and its functionality.
