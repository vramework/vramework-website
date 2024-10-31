# Class: LocalSecretService

Service for retrieving secrets from environment variables.

## Implements

- [`SecretService`](../interfaces/SecretService.md)

## Constructors

### new LocalSecretService()

```ts
new LocalSecretService(): LocalSecretService
```

Creates an instance of LocalSecretService.

#### Returns

[`LocalSecretService`](LocalSecretService.md)

#### Defined in

[packages/core/src/services/local-secrets.ts:10](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/local-secrets.ts#L10)

## Methods

### getSecret()

```ts
getSecret(key): Promise<string>
```

Retrieves a secret by key.

#### Parameters

• **key**: `string`

The key of the secret to retrieve.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the secret value.

#### Throws

If the secret is not found.

#### Implementation of

[`SecretService`](../interfaces/SecretService.md).[`getSecret`](../interfaces/SecretService.md#getsecret)

#### Defined in

[packages/core/src/services/local-secrets.ts:32](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/local-secrets.ts#L32)

***

### getSecretJSON()

```ts
getSecretJSON<R>(key): Promise<R>
```

Retrieves a secret by key.

#### Type Parameters

• **R**

#### Parameters

• **key**: `string`

The key of the secret to retrieve.

#### Returns

`Promise`\<`R`\>

A promise that resolves to the secret value.

#### Throws

If the secret is not found.

#### Implementation of

[`SecretService`](../interfaces/SecretService.md).[`getSecretJSON`](../interfaces/SecretService.md#getsecretjson)

#### Defined in

[packages/core/src/services/local-secrets.ts:18](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/local-secrets.ts#L18)
