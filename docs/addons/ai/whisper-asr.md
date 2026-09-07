---
format: md
title: Whisper Asr
description: "Speech-to-text via Whisper ASR webservice."
sidebar_label: Whisper Asr
---

# Whisper Asr

Speech-to-text via Whisper ASR webservice.

```bash
npm install @pikku/addon-ai-whisper-asr
```

Category: **AI** · Version: `0.1.7` · Package: `@pikku/addon-ai-whisper-asr`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `transcribe` | Transcribe audio to text using Whisper ASR | `whisperASR`, `content` |
| `transcribeVerbose` | Transcribe audio with timestamps and segments using Whisper ASR | `whisperASR`, `content` |
| `translate` | Translate audio to English using Whisper ASR | `whisperASR`, `content` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'whisper-asr',
  package: '@pikku/addon-ai-whisper-asr',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
