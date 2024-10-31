# Type Alias: VrameworkuWSHandlerOptions

```ts
type VrameworkuWSHandlerOptions: object & RunRouteOptions;
```

Options for configuring the `vrameworkHandler`.

## Type declaration

### createSessionServices

```ts
createSessionServices: CreateSessionServices<any, any, any>;
```

### loadSchemas?

```ts
optional loadSchemas: boolean;
```

### logRoutes?

```ts
optional logRoutes: boolean;
```

### singletonServices

```ts
singletonServices: CoreSingletonServices;
```

## Defined in

[packages/servers/uws/uws-handler/src/vramework-uws-handler.ts:24](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/servers/uws/uws-handler/src/vramework-uws-handler.ts#L24)
