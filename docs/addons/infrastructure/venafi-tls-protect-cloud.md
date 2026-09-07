---
format: md
title: Venafi Tls Protect Cloud
description: "Consume the Venafi TLS Protect Cloud API"
sidebar_label: Venafi Tls Protect Cloud
---

# Venafi Tls Protect Cloud

Consume the Venafi TLS Protect Cloud API

```bash
npm install @pikku/addon-venafi-tls-protect-cloud
```

Category: **Infrastructure** · Version: `0.0.7` · Package: `@pikku/addon-venafi-tls-protect-cloud`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `certificateDelete` | Delete certificates | `venafiTlsProtectCloud` |
| `certificateDownload` | Download a certificate | `venafiTlsProtectCloud` |
| `certificateGet` | Get a certificate by id | `venafiTlsProtectCloud` |
| `certificateGetMany` | Get many certificates | `venafiTlsProtectCloud` |
| `certificateRenew` | Renew a certificate | `venafiTlsProtectCloud` |
| `certificateRequestCreate` | Create a certificate request | `venafiTlsProtectCloud` |
| `certificateRequestGet` | Get a certificate request by id | `venafiTlsProtectCloud` |
| `certificateRequestGetMany` | Get many certificate requests | `venafiTlsProtectCloud` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'venafi-tls-protect-cloud',
  package: '@pikku/addon-venafi-tls-protect-cloud',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
