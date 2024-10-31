# Interface: SecretService

Interface for retrieving secrets.

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

#### Defined in

[packages/core/src/services/secret-service.ts:16](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/secret-service.ts#L16)

***

### getSecretJSON()

```ts
getSecretJSON<Return>(key): Promise<Return>
```

Retrieves a secret by key.

#### Type Parameters

• **Return** = `object`

#### Parameters

• **key**: `string`

The key of the secret to retrieve.

#### Returns

`Promise`\<`Return`\>

A promise that resolves to the secret value.

#### Defined in

[packages/core/src/services/secret-service.ts:10](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/secret-service.ts#L10)
