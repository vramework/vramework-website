---
format: md
title: Nasa
description: "Retrieve data from the NASA API"
sidebar_label: Nasa
---

# Nasa

Retrieve data from the NASA API

```bash
npm install @pikku/addon-nasa
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-nasa`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `asteroidNeoBrowseGetAll` | Browse the overall asteroid dataset | `nasa` |
| `asteroidNeoFeedGet` | Retrieve asteroids by closest approach date | `nasa` |
| `asteroidNeoLookupGet` | Look up an asteroid by SPK-ID | `nasa` |
| `astronomyPictureOfTheDayGet` | Get the Astronomy Picture of the Day | `nasa` |
| `donkiCoronalMassEjectionGet` | Retrieve DONKI coronal mass ejection data | `nasa` |
| `donkiHighSpeedStreamGet` | Retrieve DONKI high speed stream data | `nasa` |
| `donkiInterplanetaryShockGet` | Retrieve DONKI interplanetary shock data | `nasa` |
| `donkiMagnetopauseCrossingGet` | Retrieve DONKI magnetopause crossing data | `nasa` |
| `donkiNotificationsGet` | Retrieve DONKI notifications data | `nasa` |
| `donkiRadiationBeltEnhancementGet` | Retrieve DONKI radiation belt enhancement data | `nasa` |
| `donkiSolarEnergeticParticleGet` | Retrieve DONKI solar energetic particle data | `nasa` |
| `donkiSolarFlareGet` | Retrieve DONKI solar flare data | `nasa` |
| `donkiWsaEnlilSimulationGet` | Retrieve DONKI WSA+Enlil simulation data | `nasa` |
| `earthAssetsGet` | Retrieve Earth assets | `nasa` |
| `earthImageryGet` | Retrieve Earth imagery | `nasa` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'nasa',
  package: '@pikku/addon-nasa',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
