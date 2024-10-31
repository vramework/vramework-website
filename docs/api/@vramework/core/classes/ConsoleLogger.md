# Class: ConsoleLogger

A logger implementation that logs messages to the console.

## Implements

- [`Logger`](../interfaces/Logger.md)

## Constructors

### new ConsoleLogger()

```ts
new ConsoleLogger(): ConsoleLogger
```

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

## Methods

### debug()

```ts
debug(message, ...meta): void
```

Logs a debug message.

#### Parameters

• **message**: `string`

The message to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`debug`](../interfaces/Logger.md#debug)

#### Defined in

[packages/core/src/services/logger-console.ts:36](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L36)

***

### error()

```ts
error(messageOrObj, ...meta): void
```

Logs an error message.

#### Parameters

• **messageOrObj**: `string` \| `Error` \| `Record`\<`string`, `any`\>

The message, object, or error to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`error`](../interfaces/Logger.md#error)

#### Defined in

[packages/core/src/services/logger-console.ts:69](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L69)

***

### info()

```ts
info(messageOrObj, ...meta): void
```

Logs an informational message.

#### Parameters

• **messageOrObj**: `string` \| `Record`\<`string`, `any`\>

The message or object to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`info`](../interfaces/Logger.md#info)

#### Defined in

[packages/core/src/services/logger-console.ts:47](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L47)

***

### log()

```ts
log(
   level, 
   message, ...
   meta): void
```

Logs a message at a specified level.

#### Parameters

• **level**: `string`

The logging level.

• **message**: `string`

The message to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Defined in

[packages/core/src/services/logger-console.ts:91](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L91)

***

### setLevel()

```ts
setLevel(level): void
```

Sets the logging level.

#### Parameters

• **level**: [`LogLevel`](../enumerations/LogLevel.md)

The logging level to set.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`setLevel`](../interfaces/Logger.md#setlevel)

#### Defined in

[packages/core/src/services/logger-console.ts:16](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L16)

***

### trace()?

```ts
optional trace(message, ...meta): void
```

Logs a trace message.

#### Parameters

• **message**: `string`

The message to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`trace`](../interfaces/Logger.md#trace)

#### Defined in

[packages/core/src/services/logger-console.ts:25](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L25)

***

### warn()

```ts
warn(messageOrObj, ...meta): void
```

Logs a warning message.

#### Parameters

• **messageOrObj**: `string` \| `Record`\<`string`, `any`\>

The message or object to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`warn`](../interfaces/Logger.md#warn)

#### Defined in

[packages/core/src/services/logger-console.ts:58](https://github.com/vramework/vramework/blob/725723db2d3435e2df2b809e6609ff26f8be368c/packages/core/src/services/logger-console.ts#L58)
