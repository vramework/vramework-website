---
format: md
title: AWS Transcribe
description: "Sends data to AWS Transcribe"
sidebar_label: AWS Transcribe
---

# AWS Transcribe

Sends data to AWS Transcribe

```bash
npm install @pikku/addon-aws-transcribe
```

Category: **AI** · Version: `0.0.7` · Package: `@pikku/addon-aws-transcribe`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `transcriptionJobCreate` | Create a transcription job | `awsTranscribe` |
| `transcriptionJobDelete` | Delete a transcription job | `awsTranscribe` |
| `transcriptionJobGet` | Get a transcription job | `awsTranscribe` |
| `transcriptionJobGetAll` | Get many transcription jobs | `awsTranscribe` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-transcribe',
  package: '@pikku/addon-aws-transcribe',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
