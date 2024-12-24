import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { CodeExamples } from '.';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Code } from '../components/Code';

const deployments = {
    express: {
        package: '@vramework/express-middleware',
        code: `
import express from 'express'
import { vrameworkMiddleware } from '@vramework/express-middleware'
import { createSessionServices } from '../src/services.js'

import '../.vramework/vramework-bootstrap'

const start = async () => {
    const app = express()
    const port = 3000

    const config = await createConfig()
    const singletonServices = await createSingletonServices(config)

    this.app.use(
        vrameworkMiddleware(
            singletonServices, 
            createSessionServices, 
            {
            respondWith404: false,
            }
        )
    )

    app.listen(port, () => {
        console.log(\`Example app listening on port \${port}\`)
    })
}

start()
    `,
        text: `This app starts an express server and listens on port 3000 for connections. The app attaches the vramework middleware which will process all our routes.`
    },
    uws: {
        package: '@vramework/uws-handler',
        code: `
import * as uWS from 'uWebSockets.js'
import {
  vrameworkHTTPHandler,
  vrameworkWebsocketHandler,
} from '@vramework/uws-handler'

import { vrameworkMiddleware } from '@vramework/express-middleware'
import { createSessionServices } from './services.js'

const port = 9001;

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
            console.log('Listening to port ' + port)
        } else {
            console.log('Failed to listen to port ' + port)
        }
    })
}

start()
`,
        text: `This app starts a uws server and listens on port 9001 for both http and websocket connections. The app attaches the vramework functions which will process all our routes.`
    },
    cloudflare: {
        package: '@vramework/cloudflare',
        code: `
// index.tsx
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
        config: `
#:schema node_modules/wrangler/config-schema.json
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
        text: 'This app starts a cloudflare worker and listens for fetch and scheduled events. The app attaches the vramework functions which will process all our routes.'
    },
    serverless: {
        package: '@vramework/lambda',
        code: `
import { createConfig } from './config'
import { createSingletonServices } from './services'
import { Config, SingletonServices } from './types/application-types'
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

export const expireTodos: ScheduledHandler = async (event) => {
  const singletonServices = await coldStart()
  await runScheduledTask({
    name: 'expireTodos',
    singletonServices,
  })
}

export const corslessHandler = async (event: APIGatewayProxyEvent) => {
const singletonServices = await coldStart()
  return await corslessHTTP(
    event,
    singletonServices,
    createSessionServices
  )
}

export const corsHandler = async (event: APIGatewayProxyEvent) => {
  const singletonServices = await coldStart()
  return await corsHTTP(
    event,
    [],
    singletonServices,
    createSessionServices
  )
}`,
        text: 'This app provides the entry points for serverless functions. You can minimize which functions need to be bundled by only importing the functions needed.'
    },
    scheduled: {
        package: '@vramework/schedule',
        code: `
import { createConfig } from './config'
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
        text: 'This app runs the scheduled tasks for the serverless functions.'
    }
}
const Intro: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h1" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Introduction
        </Heading>
        <p className="text-lg mb-6">
            Follow these steps to get started with Vramework.
            You can also check out the example repos using <a target="_blank" href="https://github.com/vramework/nextjs-app-starter">Next</a>, <a target="_blank" href="https://github.com/vramework/express-middleware-starter">Express</a> or everything with <a target='_blank' href="https://github.com/vramework/workspace-starter">workspace-starter</a>.
        </p>
        <p>
            You'll need to install `@vramework/core` first via npm or yarn.
        </p>
    </div>
}

const Types: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h2" className="text-lg">
            Step One
        </Heading>
        <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Types
        </Heading>
        <p className="text-lg mb-6">
            The first step is to define the types that Vramework will use.
            You need to add four different types to get started with Vramework: <em>Config</em>, <em>UserSession</em>, <em>SingletonServices</em> and <em>Session Services</em>.
        </p>
        <Code>
            {`
import {
  CoreConfig,
  CoreServices,
  CoreSingletonServices,
  CoreUserSession,
} from '@vramework/core'

// This contains all the configuration for the application and is created once
// on start. It's a function since it can be async / loaded from a seperate service or file.
export interface Config extends CoreConfig {
}

// This contains all the session information for the user and is retrieved via 
// the HTTPSessionService on each request.
export interface UserSession extends CoreUserSession {}

// This is a list of all the singleton services used by the application and 
// is created once on start. 
export type SingletonServices = CoreSingletonServices & {
  config: Config,
  jwt: JWTService<UserSession>
}

// This is a list of all the session services used by the application 
// and is created/destroy on each request.
export interface Services extends CoreServices<SingletonServices> {}
`}
        </Code>
    </div>
}

const Implementations: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h2" className="text-lg">
            Step Two
        </Heading>
        <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Types Implementations
        </Heading>
        <p className="text-lg mb-6">
            We need to create the implementations of the types we created in the previous step.
        </p>
        <p className="mb-6">
            Note: It's important to use the types here, as the vramework CLI uses them
        </p>
        <Code>{`
/**
 * This function loads the configuration for the application and is created once on start.
 */
export const createConfig: CreateConfig<Config> = async () => {
  return {
    logLevel: LogLevel.info
  }
}

/**
 * This function creates the singleton services used by the application and is created once on start.
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
 * This function creates the session services on each request
 * It's also optional!
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
}

const Functions: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h2" className="text-lg">
            Step Three
        </Heading>
        <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Logic Functions
        </Heading>
        <p className="text-lg mb-6">
            Now we have all the function dependencies in place, we can start creating the functions and
            specifying how they are invoked.
        </p>
        <CodeExamples />
    </div>
}

const VrameworkConfig: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h2" className="text-lg">
            Step Four
        </Heading>
        <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Vramework CLI
        </Heading>
        <p className="text-lg mb-6">
            <em>vramework.config.json</em> is a configuration file that specifies the configuration of the project to the Vramework CLI.
            It's mostly used to specify the directories where the routes are located and where generated types go.
        </p>
        <Code language="json">{`
{
  "$schema": "https://raw.githubusercontent.com/vramework/vramework/refs/heads/master/packages/cli/cli.schema.json",
  "tsconfig": "./tsconfig.json",
  "routeDirectories": ["src"],
  "outDir": ".vramework"
}
`}
        </Code>
        <p className="text-xl my-6">
            Run <em>npx @vramework/cli</em> to generate all the necessary files.
        </p>
    </div>
}

const Integrations: React.FunctionComponent = () => {
    return <div className='px-6 max-w-screen-lg w-full mx-auto'>
        <Heading as="h2" className="text-lg">
            Step Five
        </Heading>
        <Heading as="h3" className="text-4xl font-bold ex-text-gray-800 mb-4">
            Integration and Deployment
        </Heading>
        <p className="text-lg mb-6">
            Vramework can be used with different servers and deployed to different clouds.
        </p>
        <Tabs>
            <TabItem value="express" label="Express" default>
            <p>Required: <em className='font-bold'>{deployments.express.package}</em></p>
                <Code>{deployments.express.code}</Code>
                <p className="text-lg mb-6">{deployments.express.text}</p>
            </TabItem>
            <TabItem value="uws" label="uWebSockets.js">
            <p>Required: <em className='font-bold'>{deployments.uws.package}</em></p>
                <Code>{deployments.uws.code}</Code>
                <p className="text-lg mb-6">{deployments.uws.text}</p>
            </TabItem>
            <TabItem value="aws" label="AWS">
            <p>Required: <em className='font-bold'>{deployments.serverless.package}</em></p>
                <Code>{deployments.serverless.code}</Code>
                <p className="text-lg mb-6">{deployments.serverless.text}</p>
            </TabItem>
            <TabItem value="cloudflare" label="Cloudflare">
            <p>Required: <em className='font-bold'>{deployments.cloudflare.package}</em></p>
                <Code>{deployments.cloudflare.code}</Code>
                <p className="text-lg mb-6">{deployments.cloudflare.text}</p>
            </TabItem>
            <TabItem value="scheduled" label="Scheduled Tasks">
                <p>Required: <em className='font-bold'>{deployments.scheduled.package}</em></p>
                <Code>{deployments.scheduled.code}</Code>
                <p className="text-lg mb-6">{deployments.scheduled.text}</p>
            </TabItem>
        </Tabs>
        <p className="text-lg mb-6">
            Note: Examples with websockets have not been added yet to this section,
        </p>
    </div>
}

export default function GettingStarted() {
    return <Layout
        title="Getting Started"
        description="How to get started with Vramework"
    >
        <main className='py-8 flex flex-col space-y-4'>
            <Intro />
            <Types />
            <Implementations />
            <Functions />
            <VrameworkConfig />
            <Integrations />
        </main>
    </ Layout>
}