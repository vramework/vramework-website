---
format: md
title: Survey Monkey
description: "SurveyMonkey surveys and responses."
sidebar_label: Survey Monkey
---

# Survey Monkey

SurveyMonkey surveys and responses.

```bash
npm install @pikku/addon-survey-monkey
```

Category: **Forms** · Version: `0.1.6` · Package: `@pikku/addon-survey-monkey`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `responsesGet` | Get details of a specific response | `surveyMonkey` |
| `responsesList` | List responses for a survey | `surveyMonkey` |
| `surveysGet` | Get details of a specific survey | `surveyMonkey` |
| `surveysList` | List all surveys | `surveyMonkey` |

## Secrets

- `SURVEY_MONKEY_CREDENTIALS` — Survey platform

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'survey-monkey',
  package: '@pikku/addon-survey-monkey',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
