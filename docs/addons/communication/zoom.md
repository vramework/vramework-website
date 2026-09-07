---
format: md
title: Zoom
description: "Zoom meetings API"
sidebar_label: Zoom
---

# Zoom

Zoom meetings API

```bash
npm install @pikku/addon-zoom
```

Category: **Communication** · Version: `0.0.8` · Package: `@pikku/addon-zoom`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `meetingCreate` | Create a meeting | `zoom` |
| `meetingDelete` | Delete a meeting | `zoom` |
| `meetingGet` | Get a meeting | `zoom` |
| `meetingGetAll` | Get many meetings | `zoom` |
| `meetingUpdate` | Update a meeting | `zoom` |

## Secrets

- `ZOOM_OAUTH_APP` — OAuth2 app credentials for Zoom

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'zoom',
  package: '@pikku/addon-zoom',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
