# Type Alias: CoreServerConfig

```ts
type CoreServerConfig: CoreConfig & object;
```

Interface for server-specific configuration settings that extend `CoreConfig`.

## Type declaration

### healthCheckPath?

```ts
optional healthCheckPath: string;
```

The path for health checks (optional).

### hostname

```ts
hostname: string;
```

The hostname for the server.

### limits?

```ts
optional limits: Partial<Record<string, string>>;
```

Limits for the server, e.g., memory or request limits (optional).

### port

```ts
port: number;
```

The port on which the server should listen.

## Defined in

[packages/core/src/types/core.types.ts:50](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/types/core.types.ts#L50)
