---
format: md
title: Elevenlabs
sidebar_label: Elevenlabs
---

# Elevenlabs

```bash
npm install @pikku/addon-elevenlabs
```

Category: **AI** · Version: `0.1.7` · Package: `@pikku/addon-elevenlabs`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `synthesize` | Synthesizes text to speech using ElevenLabs text-to-speech | `elevenlabs` |
| `transcribe` | Transcribes audio to text using ElevenLabs speech-to-text | `elevenlabs` |

## Secrets

- `ELEVENLABS_API_KEY` — ElevenLabs API key for speech-to-text and text-to-speech

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'elevenlabs',
  package: '@pikku/addon-elevenlabs',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
