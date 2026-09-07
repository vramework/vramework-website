---
format: md
title: Assemblyai
description: "Speech-to-text transcription via AssemblyAI."
sidebar_label: Assemblyai
---

# Assemblyai

Speech-to-text transcription via AssemblyAI.

```bash
npm install @pikku/addon-assemblyai
```

Category: **AI** · Version: `0.1.7` · Package: `@pikku/addon-assemblyai`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `createStreamingToken` | Creates a temporary token for client-side real-time streaming transcription | `assemblyai` |
| `createTranscript` | Creates a new transcript from an audio URL | `assemblyai` |
| `deleteTranscript` | Deletes a transcript by ID | `assemblyai` |
| `getParagraphs` | Gets paragraphs from a completed transcript | `assemblyai` |
| `getRedactedAudio` | Gets the redacted audio URL for a PII-redacted transcript | `assemblyai` |
| `getSentences` | Gets sentences from a completed transcript | `assemblyai` |
| `getSubtitles` | Gets subtitles from a completed transcript in SRT or VTT format | `assemblyai` |
| `getTranscript` | Gets a transcript by ID | `assemblyai` |
| `listTranscripts` | Lists all transcripts | `assemblyai` |
| `uploadFile` | Uploads an audio file to AssemblyAI for transcription | `assemblyai`, `content` |
| `wordSearch` | Searches for words in a completed transcript | `assemblyai` |

## Secrets

- `ASSEMBLYAI_API_KEY` — AssemblyAI API key for speech-to-text

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'assemblyai',
  package: '@pikku/addon-assemblyai',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
