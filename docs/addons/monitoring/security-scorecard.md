---
format: md
title: Security Scorecard
description: "SecurityScorecard addon"
sidebar_label: Security Scorecard
---

# Security Scorecard

SecurityScorecard addon

```bash
npm install @pikku/addon-security-scorecard
```

Category: **Monitoring** · Version: `0.0.7` · Package: `@pikku/addon-security-scorecard`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `companyGetFactor` | Get company factor scores | `securityScorecard` |
| `companyGetFactorHistorical` | Get historical company factor scores | `securityScorecard` |
| `companyGetHistoricalScore` | Get historical company score | `securityScorecard` |
| `companyGetScorecard` | Get a company scorecard | `securityScorecard` |
| `companyGetScorePlan` | Get a company score plan by target | `securityScorecard` |
| `industryGetFactor` | Get industry factor scores | `securityScorecard` |
| `industryGetFactorHistorical` | Get historical industry factor scores | `securityScorecard` |
| `industryGetScore` | Get an industry score | `securityScorecard` |
| `inviteCreate` | Create an invitation | `securityScorecard` |
| `portfolioCompanyAdd` | Add a company to a portfolio | `securityScorecard` |
| `portfolioCompanyGetAll` | Get all companies in a portfolio | `securityScorecard` |
| `portfolioCompanyRemove` | Remove a company from a portfolio | `securityScorecard` |
| `portfolioCreate` | Create a portfolio | `securityScorecard` |
| `portfolioDelete` | Delete a portfolio | `securityScorecard` |
| `portfolioGetAll` | Get all portfolios | `securityScorecard` |
| `portfolioUpdate` | Update a portfolio | `securityScorecard` |
| `reportDownload` | Download a generated report file | `securityScorecard` |
| `reportGenerate` | Generate a report | `securityScorecard` |
| `reportGetAll` | Get recent reports | `securityScorecard` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'security-scorecard',
  package: '@pikku/addon-security-scorecard',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
