---
format: md
title: Bamboo Hr
description: "Consume the BambooHR HR API"
sidebar_label: Bamboo Hr
---

# Bamboo Hr

Consume the BambooHR HR API

```bash
npm install @pikku/addon-bamboo-hr
```

Category: **CRM** · Version: `0.0.7` · Package: `@pikku/addon-bamboo-hr`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyReportGet` | Get a company report | `bambooHr` |
| `employeeCreate` | Create an employee | `bambooHr` |
| `employeeDocumentDelete` | Delete an employee document | `bambooHr` |
| `employeeDocumentDownload` | Download an employee document | `bambooHr` |
| `employeeDocumentGetAll` | Get many employee documents | `bambooHr` |
| `employeeDocumentUpdate` | Update an employee document | `bambooHr` |
| `employeeDocumentUpload` | Upload an employee document | `bambooHr` |
| `employeeGet` | Get an employee | `bambooHr` |
| `employeeGetAll` | Get many employees | `bambooHr` |
| `employeeUpdate` | Update an employee | `bambooHr` |
| `fileDelete` | Delete a company file | `bambooHr` |
| `fileDownload` | Download a company file | `bambooHr` |
| `fileGetAll` | Get many company files | `bambooHr` |
| `fileUpdate` | Update a company file | `bambooHr` |
| `fileUpload` | Upload a company file | `bambooHr` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'bamboo-hr',
  package: '@pikku/addon-bamboo-hr',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
