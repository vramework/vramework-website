---
sidebar_position: 3
title: Workspaces
---

Vramework was built with monolithic workspaces. Not because it needs to, but you can get quite a few benefits by seperating things into packages.

To try and keep things simple, we'll be working directly on the workspace starter. We'll have the name *mindwave* as our application to avoid seeing example everywhere.

```bash
git clone git@github.com:vramework/workspace-starter.git
```

You'll immediately notice the folder structure:

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

This is pretty much the same setup we had in our previous project, except we have split them into individual workspaces.

The reason this is more powerful is because we can now deploy multiple different backends easily, and most importantly we can share types throughout the entire code base.

Within this section, we'll go through each package and explain how they work.