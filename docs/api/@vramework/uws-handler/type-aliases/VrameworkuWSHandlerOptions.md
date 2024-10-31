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

[packages/servers/uws/uws-handler/src/vramework-uws-handler.ts:24](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/servers/uws/uws-handler/src/vramework-uws-handler.ts#L24)
