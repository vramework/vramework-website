---
sidebar_position: 3
title: SQL
---

The root of everything most applications does is the database. This doesn't need to be true for everyone, but I like to think without ones data an application is usually just a shell.

There are multiple different types of databases, and the same database can use multiple different types of systems, such as an ORM, SQL builder or pure SQL.

My favourite driver so far is [Kysely](https://kysely.dev/). It's a powerful typescript enabled API that allows us to build SQL queries by typechecking against the database itself. 

*Note*: I know this isn't for everyone, but the docs must go on. Feel free to add requests for new databases (or writing your own) [here](https://github.com/vramework/vramework.io/issues/1).

The first thing to do is create / migrate the database. We use [postgres-migrations](https://www.npmjs.com/package/postgres-migrations) for this, bit outdated but still works great.

## Database Migration

The database migration script provided gives us a small few benefits.

1) If running in production, it would get the postgres credentials from the AWS secrets (this lives within *userland*) and will then try to migrate it.
2) If running locally, it would migrate the database locally.

You can run this simply by running the migration script.

```bash
yarn run db:migrate
```

Which calls the following:
```typescript title="scripts/db-migrate.ts"
import pino from 'pino'
import { Client } from 'pg'
import { migrate } from 'postgres-migrations'

import { AWSSecrets } from '@vramework/aws/aws-secrets'
import { config } from '@mindwave/functions/src/config'
import { getDatabaseConfig } from '@mindwave/functions/src/services'

export const migrateDB = async () => {
  const logger = pino()
  logger.level = 'error'

  const secrets = new AWSSecrets(config)
  const databaseConfig = await getDatabaseConfig(secrets, config.secrets.postgresCredentials, config.sql)

  const client = new Client({
    ...databaseConfig,
    ssl: config.sql.ssl
  })

  await client.connect()

  try {
    await client.query(`CREATE DATABASE ${config.sql.database}`)
  } catch (e) {
    console.log('Database already exists')
  }
  
  await migrate({ client }, `${__dirname}/../sql`, { logger: undefined })
  await client.end()
}

migrateDB()
```

## Database Types

Now that our database is running, we need to generate our types. [Kysely codegen](https://github.com/RobinBlomberg/kysely-codegen) is a great tool for this.

The types it produces are pretty specific to the kysely driver, so there's a cleanup script that allows us to turn it into more familiar Typescript so that we can easily use it for our schemas, frontend and backend code.

```bash
yarn run kysely-pure
```

```typescript title="scripts/kysely-pure.ts"
import { readFile, writeFile } from "fs/promises"

const main = async () => {
    let kysely = await readFile(`${__dirname}/../node_modules/kysely-codegen/dist/db.d.ts`, 'utf8')
    kysely = kysely
        .replace(/import type { ColumnType } from "kysely";/, '')
        .replace(new RegExp('^export\\s+type\\s+Generated<[^>]+>.*?;\\s*$', 'ms'), '')
        .replace(/Generated<(.*)>/g, '$1')
        .replace(/export type Timestamp =.*;/, 'export type Timestamp = Date' )
        console.log('Writing kysely-pure.d.ts')
    
    await writeFile(`${__dirname}/../node_modules/kysely-codegen/dist/db-pure.d.ts`, kysely)
}

main()
```

The last thing of note on the database side is to create the actual function. This could live in its own package, but it's a single file so we put it in `functions/database.service.ts`. This is a simple wrapper around kysely that just keeps database initializaiton seperate.

```typescript title="packages/functions/src/database.service.ts"
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
export const getDatabaseConfig = async (
  secrets: SecretService, 
  postgresSecret: string, 
  sqlConfig: SQLConfig
) => {
    if (process.env.NODE_ENV === 'production') {
      const config = await secrets.getSecret(postgresSecret)
      return { 
        config,
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

const createServices = () => {
  const databaseConfig = await getDatabaseConfig(
    secrets, 
    config.secrets.postgresSecret, 
    config.sql
  )
  const { kysely } = new KyselyDB(databaseConfig)
}
```

Now, whenever we want to use the database in a function, we get full typescript support everywhere based directly on our database schema.

```typescript
await services.kysely
  .insertInto('app.websiteNewsletter')
  .values({ email }) 
  .execute()
```
