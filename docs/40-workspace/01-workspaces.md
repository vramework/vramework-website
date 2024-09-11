Here’s the improved version of the documentation:

---

sidebar_position: 3  
title: Workspaces  

---

Vramework is built with monolithic workspaces, though separating components into packages can offer several advantages.

To simplify the process, this documentation focuses on working with the workspace starter. The application will be named *mindwave* to avoid using example names.

```bash
git clone git@github.com:vramework/workspace-starter.git
```

Upon cloning, the following folder structure will be present:

```bash
backends/
    express/
        mindwave.ts
        mindwave-start.ts
        vramework.config.json
        package.json
apps/
    cli/
        main.ts
        package.json
packages/
    functions/
        database.service.ts
        books.function.ts
        services.ts
        config.ts
        package.json
    sdk/
        books.type.ts
        books.api.ts
sql/
    0001-initial.sql
package.json
```

This structure resembles previous project setups but is now organized into individual workspaces. The benefit of this approach is the ability to deploy multiple backends seamlessly while sharing types across the entire codebase. This allows each backend to focus on specific routes, whether used for microservices or for integrating functions into other services, such as Next.js.

This section provides an overview of each package and its functionality.
