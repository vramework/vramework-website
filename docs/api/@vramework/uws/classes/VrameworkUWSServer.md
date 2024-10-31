# Class: VrameworkUWSServer

Class representing a uWebSockets.js-based server for Vramework.
This class is intended for quickly creating a uWebSockets server with the vramework handler, useful for prototyping.
For production systems, it is expected that the uWS handler will be used directly or this file will be used as a template to add extra handlers (e.g., CORS).

## Constructors

### new VrameworkUWSServer()

```ts
new VrameworkUWSServer(
   config, 
   singletonServices, 
   createSessionServices): VrameworkUWSServer
```

Constructs a new VrameworkUWSServer.

#### Parameters

• **config**: `CoreServerConfig`

The configuration for the server.

• **singletonServices**: `CoreSingletonServices`

The singleton services used by the server.

• **createSessionServices**: `CreateSessionServices`\<`any`, `any`, `any`\>

Function to create session services for each request.

#### Returns

[`VrameworkUWSServer`](VrameworkUWSServer.md)

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:29](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L29)

## Properties

### app

```ts
app: TemplatedApp;
```

The uWebSockets app instance

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:18](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L18)

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

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:41](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L41)

***

### enableExitOnSigInt()

```ts
enableExitOnSigInt(): Promise<void>
```

Enables the server to exit gracefully when a SIGINT signal is received.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:105](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L105)

***

### init()

```ts
init(): Promise<void>
```

Initializes the server by setting up health check and request handling routes.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:48](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L48)

***

### start()

```ts
start(): Promise<void>
```

Starts the server and begins listening on the configured hostname and port.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the server has started.

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:71](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L71)

***

### stop()

```ts
stop(): Promise<void>
```

Stops the server by closing the listening socket.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the server has stopped.

#### Throws

An error if the server was not correctly started.

#### Defined in

[packages/servers/uws/uws-server/src/vramework-uws-server.ts:89](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-server/src/vramework-uws-server.ts#L89)
