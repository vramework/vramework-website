import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Code } from '../components/Code';
import { CodeExamples } from '.';

/** Central deployment config data to avoid duplication in the UI. */
const deployments = {
  express: {
    package: '@vramework/express-middleware',
    code: `import express from 'express'
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
`,
    text: `This app starts an Express server on port 3000. The vramework middleware processes all defined routes.`,
  },
  uws: {
    package: '@vramework/uws-handler',
    code: `import * as uWS from 'uWebSockets.js'
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
`,
    text: `This starts a uWebSockets.js server on port 9001 for both HTTP and WebSocket routes.`,
  },
  cloudflare: {
    package: '@vramework/cloudflare',
    code: `// index.tsx
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
`,
    config: `#:schema node_modules/wrangler/config-schema.json
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
`,
    text: `A Cloudflare Worker that handles both fetch requests and scheduled events.`,
  },
  serverless: {
    package: '@vramework/lambda',
    code: `import { createConfig } from './config'
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
`,
    text: `Exposes separate AWS Lambda handlers for scheduled tasks, CORS, and non-CORS requests.`,
  },
  scheduled: {
    package: '@vramework/schedule',
    code: `import { createConfig } from './config'
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
`,
    text: `Starts scheduled tasks for a server-based deployment scenario.`,
  },
};

/** Introduction section with links to starter repos. */
const Intro: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h1" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Introduction
    </Heading>
    <p className="text-lg mb-6">
      Follow these steps to get started with Vramework. You can also check out the example repos:
      <a target="_blank" href="https://github.com/vramework/nextjs-app-starter" rel="noreferrer">
        {' '}Next
      </a>,{' '}
      <a target="_blank" href="https://github.com/vramework/express-middleware-starter" rel="noreferrer">
        Express
      </a>, or the{' '}
      <a target="_blank" href="https://github.com/vramework/workspace-starter" rel="noreferrer">
        workspace-starter
      </a> for a more comprehensive example.
    </p>
    <p>
      You&apos;ll need to install <code>@vramework/core</code> first via npm or yarn:
    </p>
  </div>
);

/** Step One: Explanation of the fundamental Vramework types. */
const Types: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h2" className="text-lg">
      Step One
    </Heading>
    <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Types
    </Heading>
    <p className="text-lg mb-6">
      The first step is to define the types that Vramework will use. 
      You need four key types to get started: <em>Config</em>, <em>UserSession</em>, 
      <em>SingletonServices</em>, and <em>SessionServices</em>.
    </p>
    <Code language="ts">
      {`import {
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
`}
    </Code>
  </div>
);

/** Step Two: Creating concrete implementations (config, services, etc.). */
const Implementations: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h2" className="text-lg">
      Step Two
    </Heading>
    <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Types Implementations
    </Heading>
    <p className="text-lg mb-6">
      Next, create the implementations of the types from the previous step.
      Using these types is important because the Vramework CLI relies on them.
    </p>
    <Code language="ts">
      {`/**
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
`}
    </Code>
  </div>
);

/** Step Three: Showcasing how logic functions are defined and invoked. */
const Functions: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h2" className="text-lg">
      Step Three
    </Heading>
    <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Logic Functions
    </Heading>
    <p className="text-lg mb-6">
      With your dependencies in place, you can create functions and specify how they&apos;re invoked.
      Below are some reference examples:
    </p>
    <CodeExamples />
  </div>
);

/** Step Four: Vramework CLI config and usage. */
const VrameworkConfig: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h2" className="text-lg">
      Step Four
    </Heading>
    <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Vramework CLI
    </Heading>
    <p className="text-lg mb-6">
      <em>vramework.config.json</em> instructs the Vramework CLI where to find your routes and where 
      to generate additional types. For example:
    </p>
    <Code language="json">
      {`{
  "$schema": "https://raw.githubusercontent.com/vramework/vramework/refs/heads/master/packages/cli/cli.schema.json",
  "tsconfig": "./tsconfig.json",
  "routeDirectories": ["src"],
  "outDir": ".vramework"
}
`}
    </Code>
    <p className="text-xl my-6">
      Then run <code>npx @vramework/cli</code> to generate all the necessary files.
    </p>
  </div>
);

/** Step Five: Show various integration/deployment examples with code snippets. */
const Integrations: React.FC = () => (
  <div className="px-6 max-w-screen-lg w-full mx-auto">
    <Heading as="h2" className="text-lg">
      Step Five
    </Heading>
    <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
      Integration and Deployment
    </Heading>
    <p className="text-lg mb-6">
      Vramework can integrate with multiple servers and deployment platforms:
    </p>
    <Tabs>
      <TabItem value="express" label="Express" default>
        <p>
          Required:{' '}
          <em className="font-bold">{deployments.express.package}</em>
        </p>
        <Code language="ts">{deployments.express.code}</Code>
        <p className="text-lg mb-6">{deployments.express.text}</p>
      </TabItem>
      <TabItem value="uws" label="uWebSockets.js">
        <p>
          Required:{' '}
          <em className="font-bold">{deployments.uws.package}</em>
        </p>
        <Code language="ts">{deployments.uws.code}</Code>
        <p className="text-lg mb-6">{deployments.uws.text}</p>
      </TabItem>
      <TabItem value="aws" label="AWS">
        <p>
          Required:{' '}
          <em className="font-bold">{deployments.serverless.package}</em>
        </p>
        <Code language="ts">{deployments.serverless.code}</Code>
        <p className="text-lg mb-6">{deployments.serverless.text}</p>
      </TabItem>
      <TabItem value="cloudflare" label="Cloudflare">
        <p>
          Required:{' '}
          <em className="font-bold">{deployments.cloudflare.package}</em>
        </p>
        <Code language="ts">{deployments.cloudflare.code}</Code>
        <p className="text-lg mb-6">{deployments.cloudflare.text}</p>
        {/* We can also show the wrangler config if desired */}
        <Heading as="h4" className="text-lg mt-4 mb-2">
          Wrangler Config
        </Heading>
        <Code language="toml">{deployments.cloudflare.config}</Code>
      </TabItem>
      <TabItem value="scheduled" label="Scheduled Tasks">
        <p>
          Required:{' '}
          <em className="font-bold">{deployments.scheduled.package}</em>
        </p>
        <Code language="ts">{deployments.scheduled.code}</Code>
        <p className="text-lg mb-6">{deployments.scheduled.text}</p>
      </TabItem>
    </Tabs>
    <p className="text-lg mb-6">
      Note: Examples with WebSockets are not yet included in this section.
    </p>
  </div>
);

/** The main wrapper for all steps. */
export default function GettingStarted() {
  return (
    <Layout title="Getting Started" description="How to get started with Vramework">
      <main className="py-8 flex flex-col space-y-4">
        <Intro />
        <Types />
        <Implementations />
        <Functions />
        <VrameworkConfig />
        <Integrations />
      </main>
    </Layout>
  );
}
