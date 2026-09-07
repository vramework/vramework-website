---
format: md
title: Jenkins
description: "Jenkins job and build management."
sidebar_label: Jenkins
---

# Jenkins

Jenkins job and build management.

```bash
npm install @pikku/addon-jenkins
```

Category: **DevOps** · Version: `0.1.6` · Package: `@pikku/addon-jenkins`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `buildsGet` | Get Jenkins build information | `jenkins` |
| `jobsList` | List Jenkins jobs | `jenkins` |
| `jobsTrigger` | Trigger a Jenkins job build | `jenkins` |

## Secrets

- `JENKINS_CREDENTIALS` — Automation server for CI/CD

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'jenkins',
  package: '@pikku/addon-jenkins',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
