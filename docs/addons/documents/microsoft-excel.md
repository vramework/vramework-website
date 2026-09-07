---
format: md
title: Microsoft Excel
description: "Consume the Microsoft Excel API for workbooks stored in OneDrive"
sidebar_label: Microsoft Excel
---

# Microsoft Excel

Consume the Microsoft Excel API for workbooks stored in OneDrive

```bash
npm install @pikku/addon-microsoft-excel
```

Category: **Documents** · Version: `0.0.8` · Package: `@pikku/addon-microsoft-excel`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `tableAppend` | Append rows to table | `microsoftExcel` |
| `tableConvertToRange` | Convert to range | `microsoftExcel` |
| `tableCreate` | Create a table | `microsoftExcel` |
| `tableDelete` | Delete a table | `microsoftExcel` |
| `tableGetColumns` | Get columns | `microsoftExcel` |
| `tableGetRows` | Get rows | `microsoftExcel` |
| `tableLookup` | Lookup a column | `microsoftExcel` |
| `workbookAddWorksheet` | Add a sheet to a workbook | `microsoftExcel` |
| `workbookDelete` | Delete workbook | `microsoftExcel` |
| `workbookGetAll` | Get workbooks | `microsoftExcel` |
| `worksheetAppend` | Append data to sheet | `microsoftExcel` |
| `worksheetClear` | Clear sheet | `microsoftExcel` |
| `worksheetDelete` | Delete sheet | `microsoftExcel` |
| `worksheetGetAll` | Get sheets | `microsoftExcel` |
| `worksheetReadRows` | Get rows from sheet | `microsoftExcel` |
| `worksheetUpdate` | Update sheet | `microsoftExcel` |
| `worksheetUpsert` | Append or update a sheet | `microsoftExcel` |

## Secrets

- `MICROSOFT_EXCEL_OAUTH_APP` — OAuth2 app credentials for Microsoft Excel (OneDrive)

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'microsoft-excel',
  package: '@pikku/addon-microsoft-excel',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
