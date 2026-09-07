---
format: md
title: Open Thesaurus
description: "openthesaurus addon"
sidebar_label: Open Thesaurus
---

# Open Thesaurus

openthesaurus addon

```bash
npm install @pikku/addon-open-thesaurus
```

Category: **Esoteric** · Version: `0.0.7` · Package: `@pikku/addon-open-thesaurus`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `getSynonyms` | Get synonyms | `openThesaurus` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'open-thesaurus',
  package: '@pikku/addon-open-thesaurus',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
