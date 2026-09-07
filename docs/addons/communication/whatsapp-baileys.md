---
format: md
title: Whatsapp Baileys
description: "WhatsApp messaging via the unofficial Baileys Web client."
sidebar_label: Whatsapp Baileys
---

# Whatsapp Baileys

WhatsApp messaging via the unofficial [Baileys](https://github.com/WhiskeySockets/Baileys) Web client. Authenticate by scanning a QR code with your personal WhatsApp — no Business account needed.

```bash
npm install @pikku/addon-whatsapp-baileys
```

Category: **Communication** · Version: `0.1.4` · Package: `@pikku/addon-whatsapp-baileys`

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'whatsapp-baileys',
  package: '@pikku/addon-whatsapp-baileys',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
