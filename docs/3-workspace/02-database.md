---
sidebar_position: 3
title: SQL
---

**Note**: WIP

The root of everything our application does is the database. This doesn't need to be true for everyone, but I like to think without ones data an application is just a shell.

There are multiple different types of databases, and the same database can use multiple different types of systems, such as an ORM, SQL builder or pure SQL.

My favourite driver so far is [Kysely](https://kysely.dev/). It's a powerful typescript enabled API that allows us to build SQL queries by typechecking against the database itself. 

*Note*: I know this isn't for everyone, but the docs must go on.

The first thing to do is create / migrate the database. We use [postgres-migrations](https://www.npmjs.com/package/postgres-migrations) for this, bit outdated but still works great.

TODO: Adding db-migrate script descritpion

```bash
yarn run db:migrate
```

Now that our database is running, we need to generate our types.  [Kysely codegen](https://github.com/RobinBlomberg/kysely-codegen) is a great tool for this.

Unfortunately the types it produces are pretty specific to the kysely driver, so there's a cleanup script that allows us to turn it into more familiar Typescript so that we can easily use it for our schemas, frontend and backend code.

```bash
yarn run kysely-pure
```

The last thing of note on the database side is to create the actual function. This could live in its own package, but it's a single file so we put it in `functions/database.service.ts`. This is a simple wrapper around kysely that just keeps database initializaiton seperate.

```typescript
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely'
import { DB } from 'kysely-codegen'
import { Pool } from 'pg'

export class KyselyDB {
    public kysely: Kysely<DB>
    public pool: Pool

    constructor(config: any) {
        this.pool = new Pool(config)
        this.kysely = new Kysely<DB>({
            dialect: new PostgresDialect({
                pool: this.pool
            }),
            plugins: [
                new CamelCasePlugin()
            ]
        })
    }
}
```

And finally, we can add it to the services to use in our functions/routes:

```typescript
export const getDatabaseConfig = async (secrets: SecretService, postgresSecret: string, sqlConfig: SQLConfig) => {
    if (process.env.NODE_ENV === 'production') {
      const { password, ...rest } = JSON.parse(await secrets.getSecret(postgresSecret))
      return { 
        password, 
        ...rest, 
        database: sqlConfig.database,
        ssl: sqlConfig.ssl
      }
    } else {
      return {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'password',
        database: sqlConfig.database
      }
    }
}

const { kysely } = new KyselyDB(
    await getDatabaseConfig(secrets, config.secrets.postgresSecret, config.sql)
)
```
