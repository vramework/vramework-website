---
format: md
title: Icalendar
description: "Generate iCalendar (.ics) files for events."
sidebar_label: Icalendar
---

# Icalendar

Generate iCalendar (.ics) files for events.

```bash
npm install @pikku/addon-icalendar
```

Category: **Data** · Version: `0.1.7` · Package: `@pikku/addon-icalendar`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `icalendarCreate` | Generate an iCalendar (.ics) file | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'icalendar',
  package: '@pikku/addon-icalendar',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
