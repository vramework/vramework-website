---
sidebar_position: 20
title: Writing your own Scheduler handler
---

The easiest way to write your own scheduler is by referencing the one already created.

The core of it is the following:

```typescript
import { getScheduledTasks, runScheduledTask } from '@vramework/core/scheduler'

const run = async (singletonServices: SingletonServices, name: string) => {
    const { scheduledTasks } = getScheduleTasks()
    await runScheduledTask({
        singletonServices: this.singletonServices,
        name,
    })
}
```

The rest of it is code to get it work on a cron timer:

```typescript reference title="VrameworkTaskScheduler"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/schedule/src/vramework-task-scheduler.ts
```