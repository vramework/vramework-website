# Interface: CoreSingletonServices

Interface for core singleton services provided by Vramework.

## Properties

### config

```ts
config: CoreConfig;
```

The core configuration for the application.

#### Defined in

[packages/core/src/types/core.types.ts:80](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L80)

***

### logger

```ts
logger: Logger;
```

The logger used by the application.

#### Defined in

[packages/core/src/types/core.types.ts:82](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L82)

***

### permissionService?

```ts
optional permissionService: PermissionService;
```

The permission service used for authorization (optional).

#### Defined in

[packages/core/src/types/core.types.ts:78](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L78)

***

### sessionService?

```ts
optional sessionService: SessionService<CoreUserSession>;
```

The session service used by the application (optional).

#### Defined in

[packages/core/src/types/core.types.ts:76](https://github.com/vramework/vramework/blob/effbb4c429219b23928f1b1f0fcdb2fd3899355c/packages/core/src/types/core.types.ts#L76)
