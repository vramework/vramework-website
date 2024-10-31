# Interface: Logger

Interface for logging messages at various levels.

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

#### Defined in

[packages/core/src/services/logger.ts:43](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L43)

***

### error()

```ts
error(messageOrObj, ...meta): void
```

Logs an error message.

#### Parameters

• **messageOrObj**: `string` \| `Record`\<`string`, `any`\> \| `Error`

The message, object, or error to log.

• ...**meta**: `any`[]

Additional metadata to log.

#### Returns

`void`

#### Defined in

[packages/core/src/services/logger.ts:33](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L33)

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

#### Defined in

[packages/core/src/services/logger.ts:19](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L19)

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

#### Defined in

[packages/core/src/services/logger.ts:56](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L56)

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

#### Defined in

[packages/core/src/services/logger.ts:50](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L50)

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

#### Defined in

[packages/core/src/services/logger.ts:26](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/logger.ts#L26)
