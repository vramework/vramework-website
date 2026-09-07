---
format: md
title: Spreadsheet
description: "Read and write CSV and XLSX spreadsheets."
sidebar_label: Spreadsheet
---

# Spreadsheet

Read and write CSV and XLSX spreadsheets.

```bash
npm install @pikku/addon-spreadsheet
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-spreadsheet`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `csvToJson` | Parse a CSV string into JSON rows | — |
| `jsonToCsv` | Convert JSON rows into a CSV string | — |
| `jsonToXlsx` | Convert JSON rows into a spreadsheet file (XLSX, CSV, ODS, HTML) | — |
| `xlsxToJson` | Parse a spreadsheet file (XLSX, XLS, ODS, CSV) into JSON rows | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'spreadsheet',
  package: '@pikku/addon-spreadsheet',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
