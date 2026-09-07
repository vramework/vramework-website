---
format: md
title: AWS SES
description: "Send emails and manage templates via AWS SES"
sidebar_label: AWS SES
---

# AWS SES

Send emails and manage templates via AWS SES

```bash
npm install @pikku/addon-aws-ses
```

Category: **Email** · Version: `0.0.7` · Package: `@pikku/addon-aws-ses`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `customVerificationEmailCreate` | Create a custom verification email template | `awsSes` |
| `customVerificationEmailDelete` | Delete a custom verification email template | `awsSes` |
| `customVerificationEmailGet` | Get a custom verification email template | `awsSes` |
| `customVerificationEmailGetAll` | Get many custom verification email templates | `awsSes` |
| `customVerificationEmailSend` | Send a custom verification email | `awsSes` |
| `customVerificationEmailUpdate` | Update a custom verification email template | `awsSes` |
| `emailSend` | Send an email | `awsSes` |
| `emailSendTemplate` | Send an email based on a template | `awsSes` |
| `templateCreate` | Create a template | `awsSes` |
| `templateDelete` | Delete a template | `awsSes` |
| `templateGet` | Get a template | `awsSes` |
| `templateGetAll` | Get many templates | `awsSes` |
| `templateUpdate` | Update a template | `awsSes` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'aws-ses',
  package: '@pikku/addon-aws-ses',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
