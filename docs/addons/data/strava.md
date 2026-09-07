---
format: md
title: Strava
description: "Consume the Strava API"
sidebar_label: Strava
---

# Strava

Consume the Strava API

```bash
npm install @pikku/addon-strava
```

Category: **Data** · Version: `0.0.8` · Package: `@pikku/addon-strava`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `activityCreate` | Create a new activity | `strava` |
| `activityGet` | Get an activity | `strava` |
| `activityGetAll` | Get many activities | `strava` |
| `activityGetComments` | Get all activity comments | `strava` |
| `activityGetKudos` | Get all activity kudos | `strava` |
| `activityGetLaps` | Get all activity laps | `strava` |
| `activityGetZones` | Get all activity zones | `strava` |
| `activityUpdate` | Update an activity | `strava` |

## Secrets

- `STRAVA_OAUTH_APP` — OAuth2 app credentials for Strava

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'strava',
  package: '@pikku/addon-strava',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
