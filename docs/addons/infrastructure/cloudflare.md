---
format: md
title: Cloudflare
description: "Cloudflare zones and DNS record management."
sidebar_label: Cloudflare
---

# Cloudflare

Cloudflare zones and DNS record management.

```bash
npm install @pikku/addon-cloudflare
```

Category: **Infrastructure** · Version: `0.1.6` · Package: `@pikku/addon-cloudflare`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `dnsRecordsCreate` | Create a DNS record | `cloudflare` |
| `dnsRecordsDelete` | Delete a DNS record | `cloudflare` |
| `dnsRecordsList` | List DNS records for a zone | `cloudflare` |
| `zonesGet` | Get Cloudflare zone details | `cloudflare` |
| `zonesList` | List Cloudflare zones (domains) | `cloudflare` |

## Secrets

- `CLOUDFLARE_CREDENTIALS` — Web security and CDN

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'cloudflare',
  package: '@pikku/addon-cloudflare',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
