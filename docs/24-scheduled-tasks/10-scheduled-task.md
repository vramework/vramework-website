---
sidebar_position: 50 
title: Scheduled Tasks
description: Adding scheduled tasks 
---

## Introduction to Scheduled Tasks

Scheduled tasks (also known as **cron jobs**) are tasks that are run on a specific interval.

The triggering mechanism can either be provided by the runtime (like via an azure timer request) or by using the `@vramework/scheduler` package.

The main steps remain the same:

1. Create a `APIFunction` that you wish to trigger. Since this is triggered by time, it doesn't get given any actual data nor does it expect anything in return.
2. Register the function with `@vramework/core/schedular`
3. Run the tasks when needed

### Creating and registering the function

```typescript
import { APIFunctionSessionless } from '@todos/functions/.vramework/vramework-types.js'
import { addScheduledTask } from '@vramework/core/scheduler'

export const myScheduledTask: APIFunctionSessionless<void, void> = async (
    services,
    _,
    session
  ) => {
    // do something
  }

addScheduledTask({
    name: 'myScheduledTask',
    schedule: '*/1 * * * *',
    func: myScheduledTask,
})
```

The reason we use **APIFunctionSessionless** instead of a special **ScheduledTask** type is simply to minimize types, as well as also allowing our scheduled task to also be called via a HTTP endpoint if we want to trigger it manually.

### Adding it via the @vramework/scheduler

You can then run the scheduled tasks by specifying them in the runner.

```typescript
import { getConfig } from '../src/config.js'
import { createSingletonServices } from '../src/services.js'
import { VrameworkTaskScheduler} from '@vramework/schedule'
import { ScheduledTaskNames } from '../.vramework/vramework-schedules.js'
 
async function main(): Promise<void> {
  try {
    const config = await getConfig()
    const singletonServices = await createSingletonServices(config)
    const scheduler = new VrameworkTaskScheduler<ScheduledTaskNames>(singletonServices)
    scheduler.startAll()
  } catch (e: any) {
    console.error(e.toString())
    process.exit(1)
  }
}

main()
```

### VrameworkTaskScheduler Methods

:::info
The VrameworkTaskSchedular isn't fully typed and just expected names
of strings so far
:::

#### startAll()

Starts all the scheduled tasks

#### stopAll()

Stops all the scheduled tasks

#### start(names: string[])

Starts all the specified tasks

#### stopAll()

Stops all the specified tasks.