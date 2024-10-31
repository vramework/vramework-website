# Class: VrameworkExpressServer

## Constructors

### new VrameworkExpressServer()

```ts
new VrameworkExpressServer(
   config, 
   singletonServices, 
   createSessionServices): VrameworkExpressServer
```

#### Parameters

• **config**: `CoreServerConfig`

• **singletonServices**: `CoreSingletonServices`

• **createSessionServices**: `CreateSessionServices`\<`any`, `any`, `any`\>

#### Returns

[`VrameworkExpressServer`](VrameworkExpressServer.md)

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:28](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L28)

## Properties

### app

```ts
app: Express;
```

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:25](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L25)

## Methods

### enableCors()

```ts
enableCors(options): void
```

#### Parameters

• **options**: `CorsOptions` \| `CorsOptionsDelegate`

#### Returns

`void`

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:63](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L63)

***

### enableExitOnSigInt()

```ts
enableExitOnSigInt(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:107](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L107)

***

### enableStaticAssets()

```ts
enableStaticAssets(assetsUrl, contentDirectory): void
```

#### Parameters

• **assetsUrl**: `string`

• **contentDirectory**: `string`

#### Returns

`void`

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:67](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L67)

***

### init()

```ts
init(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:71](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L71)

***

### start()

```ts
start(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:81](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L81)

***

### stop()

```ts
stop(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/servers/express/express-server/src/vramework-express-server.ts:96](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/express/express-server/src/vramework-express-server.ts#L96)
