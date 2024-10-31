# Class: VrameworkFastifyServer

The `VrameworkFastifyServer` class provides a Fastify server integrated with the Vramework framework.
This class helps in quickly setting up a Fastify server with Vramework's core features, including health checks,
route handling, and integration with singleton and session services.

## Constructors

### new VrameworkFastifyServer()

```ts
new VrameworkFastifyServer(
   config, 
   singletonServices, 
   createSessionServices): VrameworkFastifyServer
```

Constructs a new instance of the `VrameworkFastifyServer` class.

#### Parameters

• **config**: `CoreServerConfig`

The configuration for the server.

• **singletonServices**: `CoreSingletonServices`

The singleton services used by the server.

• **createSessionServices**: `CreateSessionServices`\<`any`, `any`, `any`\>

Function to create session services for each request.

#### Returns

[`VrameworkFastifyServer`](VrameworkFastifyServer.md)

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:26](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L26)

## Properties

### app

```ts
app: FastifyInstance<Server<typeof IncomingMessage, typeof ServerResponse>, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault> & PromiseLike<FastifyInstance<Server<typeof IncomingMessage, typeof ServerResponse>, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>> & object;
```

The Fastify app instance

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:17](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L17)

## Methods

### enableCors()

```ts
enableCors(_options): void
```

Placeholder for enabling CORS.

#### Parameters

• **\_options**: `any`

The options to configure CORS.

#### Returns

`void`

#### Throws

Method not implemented.

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:38](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L38)

***

### enableExitOnSigInt()

```ts
enableExitOnSigInt(): Promise<void>
```

Enables the server to exit gracefully when a SIGINT signal is received.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:86](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L86)

***

### init()

```ts
init(): Promise<void>
```

Initializes the server by setting up health check and registering the Vramework Fastify plugin.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:45](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L45)

***

### start()

```ts
start(): Promise<void>
```

Starts the server and begins listening on the configured hostname and port.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:64](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L64)

***

### stop()

```ts
stop(): Promise<void>
```

Stops the server and closes all connections.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts:77](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/fastify/fastify-server/src/vramework-fastify-server.ts#L77)
