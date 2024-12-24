export const codeTypes = `import {
    CoreConfig,
    CoreServices,
    CoreSingletonServices,
    CoreUserSession,
  } from '@vramework/core'
  
  // This contains all the configuration for the application, created once on start.
  export interface Config extends CoreConfig {}
  
  // This holds the user-session data, retrieved via the HTTPSessionService on each request.
  export interface UserSession extends CoreUserSession {}
  
  // Singleton services, created once on start, shared across all requests.
  export type SingletonServices = CoreSingletonServices & {
    config: Config,
    jwt: JWTService<UserSession>
  }
  
  // Session services, created/destroyed on each request.
  export interface Services extends CoreServices<SingletonServices> {}
  `;
  
  export const codeImplementations = `/**
   * Loads configuration for the application (created once at startup).
   */
  export const createConfig: CreateConfig<Config> = async () => {
    return {
      logLevel: LogLevel.info
    }
  }
  
  /**
   * Creates the singleton services for the application (created once at startup).
   */
  export const createSingletonServices: CreateSingletonServices<
    Config,
    SingletonServices
  > = async (config: Config): Promise<SingletonServices> => {
    const variablesService = new LocalVariablesService()
    const logger = new ConsoleLogger()
    const jwt = new JoseJWTService<UserSession>(keys, logger)
    const httpSessionService = new VrameworkHTTPSessionService<UserSession>(jwt, {})
  
    return {
      config,
      logger,
      variablesService,
      jwt,
      httpSessionService
    }
  }
  
  /**
   * Creates the session services on each request.
   */
  export const createSessionServices: CreateSessionServices<
    SingletonServices,
    Services,
    UserSession
  > = async (_services, _session) => {
    return {}
  }
  `;
  
  // 2) Snippet for Vramework CLI config
  export const codeVrameworkConfig = `{
    "$schema": "https://raw.githubusercontent.com/vramework/vramework/refs/heads/master/packages/cli/cli.schema.json",
    "tsconfig": "./tsconfig.json",
    "routeDirectories": ["src"],
    "outDir": ".vramework"
  }
  `;
  
  // 3) Integration Snippets
  export const codeExpress = `import express from 'express'
  import { vrameworkMiddleware } from '@vramework/express-middleware'
  import { createSessionServices } from '../src/services.js'
  
  import '../.vramework/vramework-bootstrap'
  
  const start = async () => {
    const app = express()
    const port = 3000
  
    const config = await createConfig()
    const singletonServices = await createSingletonServices(config)
  
    app.use(
      vrameworkMiddleware(singletonServices, createSessionServices, {
        respondWith404: false,
      })
    )
  
    app.listen(port, () => {
      console.log(\`Example app listening on port \${port}\`)
    })
  }
  
  start()
  `;
  
  export const codeUWS = `import * as uWS from 'uWebSockets.js'
  import {
    vrameworkHTTPHandler,
    vrameworkWebsocketHandler,
  } from '@vramework/uws-handler'
  
  import { createSessionServices } from './services.js'
  import '../.vramework/vramework-bootstrap'
  
  const port = 9001
  
  const start = async () => {
    const app = uWS.App()
  
    const config = await createConfig()
    const singletonServices = await createSingletonServices(config)
    
    app.any(
      '/*',
      vrameworkHTTPHandler({
        logRoutes: true,
        singletonServices,
        createSessionServices,
      })
    )
    
    app.ws(
      '/*',
      vrameworkWebsocketHandler({
        logRoutes: true,
        singletonServices,
        createSessionServices,
      })
    )
  
    app.listen(port, (token) => {
      if (token) {
        console.log(\`Listening on port \${port}\`)
      } else {
        console.log(\`Failed to listen on port \${port}\`)
      }
    })
  }
  
  start()
  `;
  
  export const codeCloudflareIndex = `// index.tsx
  import { ExportedHandler, Response } from '@cloudflare/workers-types';
  import { runFetch, runScheduled } from '@vramework/cloudflare';
  import { LocalVariablesService, LocalSecretService } from '@vramework/core/services';
  
  import { createConfig } from './config';
  import { createSingletonServices, createSessionServices } from './services';
  
  import './.vramework/vramework-bootstrap';
  
  const setupServices = async (env: Record<string, string | undefined>) => {
    const localVariables = new LocalVariablesService(env)
    const config = await createConfig(localVariables)
    const localSecrets = new LocalSecretService(localVariables)
    return await createSingletonServices(config, localVariables, localSecrets)
  }
  
  export default {
    async scheduled(controller, env) {
      const singletonServices = await setupServices(env);
      await runScheduled(controller, singletonServices);
    },
  
    async fetch(request, env): Promise<Response> {
      const singletonServices = await setupServices(env);
      return await runFetch(request, singletonServices, createSessionServices);
    },
  } satisfies ExportedHandler<Record<string, string>>;
  `;
  
  export const codeCloudflareWrangler = `#:schema node_modules/wrangler/config-schema.json
  name = "vramework-workspace-starter"
  main = "src/index.ts"
  compatibility_date = "2024-12-18"
  compatibility_flags = ["nodejs_compat_v2"]
  
  [observability]
  enabled = true
  
  [vars]
  NODE_ENV = "production"
  
  [triggers]
  crons = ["*/1 * * * *"]
  
  [[durable_objects.bindings]]
  name = "WEBSOCKET_HIBERNATION_SERVER"
  class_name = "WebSocketHibernationServer"
  
  [[migrations]]
  tag = "v1"
  new_classes = ["WebSocketHibernationServer"]
  `;
  
  export const codeServerless = `import { createConfig } from './config'
  import { createSingletonServices } from './services'
  import { AWSSecrets } from '@vramework/aws-services'
  import {
    corsHTTP,
    corslessHTTP,
  } from '@vramework/lambda/http'
  import './.vramework/vramework-bootstrap';
  
  let config: Config
  let singletonServices: SingletonServices
  
  export const coldStart = async () => {
    if (!config) {
      config = await createConfig()
    }
    if (!singletonServices) {
      singletonServices = await createSingletonServices(
        config,
        new AWSSecrets(config)
      )
    }
    return singletonServices
  }
  
  export const expireTodos: ScheduledHandler = async () => {
    const singletonServices = await coldStart()
    await runScheduledTask({
      name: 'expireTodos',
      singletonServices,
    })
  }
  
  export const corslessHandler = async (event: APIGatewayProxyEvent) => {
    const singletonServices = await coldStart()
    return corslessHTTP(event, singletonServices, createSessionServices)
  }
  
  export const corsHandler = async (event: APIGatewayProxyEvent) => {
    const singletonServices = await coldStart()
    return corsHTTP(event, [], singletonServices, createSessionServices)
  }
  `;
  
  export const codeScheduled = `import { createConfig } from './config'
  import {
    createSingletonServices,
    createSessionServices,
  } from './services'
  import { VrameworkTaskScheduler } from '@vramework/schedule'
  import { ScheduledTaskNames } from './.vramework/vramework-schedules'
  
  import './.vramework/vramework-bootstrap'
  
  async function main(): Promise<void> {
    const config = await createConfig()
    const singletonServices = await createSingletonServices(config)
    const scheduler = new VrameworkTaskScheduler<ScheduledTaskNames>(
      singletonServices
    )
    scheduler.startAll()
  }
  
  main()
  `;
  