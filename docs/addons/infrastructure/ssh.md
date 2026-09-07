---
format: md
title: Ssh
description: "SSH remote command execution and file transfer."
sidebar_label: Ssh
---

# Ssh

SSH remote command execution and file transfer.

```bash
npm install @pikku/addon-ssh
```

Category: **Infrastructure** · Version: `0.1.7` · Package: `@pikku/addon-ssh`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `sshDownload` | Download a file from a remote server via SFTP | `sshClient`, `content` |
| `sshExecute` | Execute a command on a remote server via SSH | `sshClient` |
| `sshUpload` | Upload a file to a remote server via SFTP | `sshClient`, `content` |

## Secrets

- `SSH_CREDENTIALS` — SSH server connection credentials

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'ssh',
  package: '@pikku/addon-ssh',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
