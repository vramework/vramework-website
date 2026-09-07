---
format: md
title: Google Calendar
description: "Google Calendar integration for Pikku"
sidebar_label: Google Calendar
---

# Google Calendar

Google Calendar integration for Pikku

```bash
npm install @pikku/addon-google-calendar
```

Category: **Data** · Version: `0.0.8` · Package: `@pikku/addon-google-calendar`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `aclDelete` | Deletes an access control rule. | `googleCalendar` |
| `aclGet` | Returns an access control rule. | `googleCalendar` |
| `aclInsert` | Creates an access control rule. | `googleCalendar` |
| `aclList` | Returns the rules in the access control list for the calendar. | `googleCalendar` |
| `aclPatch` | Updates an access control rule. | `googleCalendar` |
| `aclUpdate` | Updates an access control rule. | `googleCalendar` |
| `aclWatch` | Watch for changes to ACL resources. | `googleCalendar` |
| `calendarListDelete` | Removes a calendar from the user's calendar list. | `googleCalendar` |
| `calendarListGet` | Returns a calendar from the user's calendar list. | `googleCalendar` |
| `calendarListInsert` | Inserts an existing calendar into the user's calendar list. | `googleCalendar` |
| `calendarListList` | Returns the calendars on the user's calendar list. | `googleCalendar` |
| `calendarListPatch` | Updates an existing calendar on the user's calendar list. | `googleCalendar` |
| `calendarListUpdate` | Updates an existing calendar on the user's calendar list. | `googleCalendar` |
| `calendarListWatch` | Watch for changes to CalendarList resources. | `googleCalendar` |
| `calendarsClear` | Clears a primary calendar. | `googleCalendar` |
| `calendarsDelete` | Deletes a secondary calendar. | `googleCalendar` |
| `calendarsGet` | Returns metadata for a calendar. | `googleCalendar` |
| `calendarsInsert` | Creates a secondary calendar. | `googleCalendar` |
| `calendarsPatch` | Updates metadata for a calendar. | `googleCalendar` |
| `calendarsUpdate` | Updates metadata for a calendar. | `googleCalendar` |
| `channelsStop` | Stop watching resources through this channel | `googleCalendar` |
| `colorsGet` | Returns the color definitions for calendars and events. | `googleCalendar` |
| `eventsDelete` | Deletes an event. | `googleCalendar` |
| `eventsGet` | Returns an event based on its Google Calendar ID. | `googleCalendar` |
| `eventsImport` | Imports an event. | `googleCalendar` |
| `eventsInsert` | Creates an event. | `googleCalendar` |
| `eventsInstances` | Returns instances of the specified recurring event. | `googleCalendar` |
| `eventsList` | Returns events on the specified calendar. | `googleCalendar` |
| `eventsMove` | Moves an event to another calendar, i.e. | `googleCalendar` |
| `eventsPatch` | Updates an event. | `googleCalendar` |
| `eventsQuickAdd` | Creates an event based on a simple text string. | `googleCalendar` |
| `eventsUpdate` | Updates an event. | `googleCalendar` |
| `eventsWatch` | Watch for changes to Events resources. | `googleCalendar` |
| `freebusyQuery` | Returns free/busy information for a set of calendars. | `googleCalendar` |
| `settingsGet` | Returns a single user setting. | `googleCalendar` |
| `settingsList` | Returns all user settings for the authenticated user. | `googleCalendar` |
| `settingsWatch` | Watch for changes to Settings resources. | `googleCalendar` |

## Secrets

- `GOOGLE_CALENDAR_OAUTH_APP` — OAuth2 app credentials for Google Calendar

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-calendar',
  package: '@pikku/addon-google-calendar',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
