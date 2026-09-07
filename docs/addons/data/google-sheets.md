---
format: md
title: Google Sheets
description: "Google Sheets integration for Pikku"
sidebar_label: Google Sheets
---

# Google Sheets

Google Sheets integration for Pikku

```bash
npm install @pikku/addon-google-sheets
```

Category: **Data** · Version: `0.0.8` · Package: `@pikku/addon-google-sheets`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `batchUpdate` | Applies one or more updates to the spreadsheet. | `googleSheets` |
| `create` | Creates a spreadsheet, returning the newly created spreadsheet. | `googleSheets` |
| `developerMetadataGet` | Returns the developer metadata with the specified ID. | `googleSheets` |
| `developerMetadataSearch` | Returns all developer metadata matching the specified DataFilter. | `googleSheets` |
| `get` | Returns the spreadsheet at the given ID. | `googleSheets` |
| `getByDataFilter` | Returns the spreadsheet at the given ID. | `googleSheets` |
| `readRows` | Reads a range and returns one object per row keyed by the header row (the shape n8n produces), ready to iterate over. | `googleSheets` |
| `sheetsCopyTo` | Copies a single sheet from a spreadsheet to another spreadsheet. | `googleSheets` |
| `valuesAppend` | Appends values to a spreadsheet. | `googleSheets` |
| `valuesBatchClear` | Clears one or more ranges of values from a spreadsheet. | `googleSheets` |
| `valuesBatchClearByDataFilter` | Clears one or more ranges of values from a spreadsheet. | `googleSheets` |
| `valuesBatchGet` | Returns one or more ranges of values from a spreadsheet. | `googleSheets` |
| `valuesBatchGetByDataFilter` | Returns one or more ranges of values that match the specified data filters. | `googleSheets` |
| `valuesBatchUpdate` | Sets values in one or more ranges of a spreadsheet. | `googleSheets` |
| `valuesBatchUpdateByDataFilter` | Sets values in one or more ranges of a spreadsheet. | `googleSheets` |
| `valuesClear` | Clears values from a spreadsheet. | `googleSheets` |
| `valuesGet` | Returns a range of values from a spreadsheet. | `googleSheets` |
| `valuesUpdate` | Sets values in a range of a spreadsheet. | `googleSheets` |

## Secrets

- `GOOGLE_SHEETS_OAUTH_APP` — OAuth2 app credentials for Google Sheets

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-sheets',
  package: '@pikku/addon-google-sheets',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
