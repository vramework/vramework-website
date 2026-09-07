---
format: md
title: Open Weather Map
description: "Gets current and future weather information"
sidebar_label: Open Weather Map
---

# Open Weather Map

Gets current and future weather information

```bash
npm install @pikku/addon-open-weather-map
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-open-weather-map`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `currentWeather` | Get current weather data | `openWeatherMap` |
| `fiveDayForecast` | Get 5 day weather forecast | `openWeatherMap` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'open-weather-map',
  package: '@pikku/addon-open-weather-map',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
