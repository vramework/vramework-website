---
format: md
title: Airtop
description: "Scrape and control any site with Airtop"
sidebar_label: Airtop
---

# Airtop

Scrape and control any site with Airtop

```bash
npm install @pikku/addon-airtop
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-airtop`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `agentRun` | Run an Airtop agent | `airtop` |
| `extractionGetPaginated` | Extract paginated data | `airtop` |
| `extractionQuery` | Query a page | `airtop` |
| `extractionScrape` | Scrape page content | `airtop` |
| `fileDelete` | Delete a file | `airtop` |
| `fileGet` | Get a file | `airtop` |
| `fileGetMany` | Get many files | `airtop` |
| `fileLoad` | Load a file into a session | `airtop` |
| `fileUpload` | Upload a file | `airtop` |
| `interactionClick` | Click an element | `airtop` |
| `interactionFill` | Fill a form via automation | `airtop` |
| `interactionHover` | Hover over an element | `airtop` |
| `interactionType` | Type text into an element | `airtop` |
| `sessionCreate` | Create a session | `airtop` |
| `sessionSave` | Save profile on session termination | `airtop` |
| `sessionTerminate` | Terminate a session | `airtop` |
| `windowClose` | Close a window | `airtop` |
| `windowCreate` | Create a window | `airtop` |
| `windowLoad` | Load a URL in a window | `airtop` |
| `windowTakeScreenshot` | Take a screenshot of a window | `airtop` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'airtop',
  package: '@pikku/addon-airtop',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
