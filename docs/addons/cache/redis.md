---
format: md
title: Redis
description: "Redis cache, data structures, and pub/sub."
sidebar_label: Redis
---

# Redis

Redis cache, data structures, and pub/sub.

```bash
npm install @pikku/addon-redis
```

Category: **Cache** · Version: `0.1.6` · Package: `@pikku/addon-redis`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `hashDelete` | Deletes a field from a hash | `redis` |
| `hashGet` | Gets the value of a field in a hash | `redis` |
| `hashGetAll` | Gets all fields and values in a hash | `redis` |
| `hashSet` | Sets the value of a field in a hash | `redis` |
| `info` | Returns information about the Redis server | `redis` |
| `keyDelete` | Deletes a key from Redis | `redis` |
| `keyGet` | Gets the value of a key from Redis | `redis` |
| `keyIncr` | Atomically increments a key by 1 | `redis` |
| `keys` | Returns all keys matching a pattern | `redis` |
| `keySet` | Sets the value of a key in Redis | `redis` |
| `listLength` | Returns the length of a Redis list | `redis` |
| `listPop` | Pops a value from a Redis list | `redis` |
| `listPush` | Pushes a value to a Redis list | `redis` |
| `listRange` | Returns a range of elements from a Redis list | `redis` |
| `publish` | Publishes a message to a Redis channel | `redis` |
| `setAdd` | Adds a value to a set | `redis` |
| `setIsMember` | Checks if a value is a member of a set | `redis` |
| `setMembers` | Gets all members of a set | `redis` |
| `setRemove` | Removes a value from a set | `redis` |
| `subscribe` | Subscribes to Redis pub/sub channels and triggers on new messages | `redis` |

## Secrets

- `REDIS_PASSWORD` — Redis authentication password

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'redis',
  package: '@pikku/addon-redis',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
