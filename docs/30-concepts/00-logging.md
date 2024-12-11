---
sidebar_position: 10
title: Logging
description: How logging works in vramework
draft: true
---

The logger service in vramework is a simple wrapper (which isn't always needed, you could just cast your logger to it) with the standard info, debug, error apis.

```typescript reference title="logger.ts"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/core/src/services/logger.ts
```

There's a default implement for the console logger:

```typescript reference title="logger.ts"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/core/src/services/logger-console.ts
```

And you can see a simple wrapper around **Pino** if you want to create your own

```typescript reference title="pino.ts"
https://raw.githubusercontent.com/vramework/vramework/blob/master/packages/services/pino/src/pino.ts
```