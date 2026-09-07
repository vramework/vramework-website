---
format: md
title: Kafka
description: "Apache Kafka messaging and topic management."
sidebar_label: Kafka
---

# Kafka

Apache Kafka messaging and topic management.

```bash
npm install @pikku/addon-kafka
```

Category: **Infrastructure** · Version: `0.1.6` · Package: `@pikku/addon-kafka`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `kafkaCreateTopic` | Create a Kafka topic | `kafkaAdmin` |
| `kafkaDeleteTopic` | Delete Kafka topics | `kafkaAdmin` |
| `kafkaListTopics` | List all Kafka topics | `kafkaAdmin` |
| `kafkaProduce` | Send messages to a Kafka topic | `kafkaProducer` |

## Secrets

- `KAFKA_CREDENTIALS` — Kafka broker connection credentials

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'kafka',
  package: '@pikku/addon-kafka',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
