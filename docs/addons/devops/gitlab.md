---
format: md
title: Gitlab
description: "Interact with the GitLab API"
sidebar_label: Gitlab
---

# Gitlab

Interact with the GitLab API

```bash
npm install @pikku/addon-gitlab
```

Category: **DevOps** · Version: `0.1.7` · Package: `@pikku/addon-gitlab`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `fileCreate` | Create a file | `gitlab` |
| `fileDelete` | Delete a file | `gitlab` |
| `fileEdit` | Edit a file | `gitlab` |
| `fileGet` | Get a file | `gitlab` |
| `fileList` | List files | `gitlab` |
| `issueCreate` | Create an issue | `gitlab` |
| `issueCreateComment` | Create a comment on an issue | `gitlab` |
| `issueEdit` | Edit an issue | `gitlab` |
| `issueGet` | Get an issue | `gitlab` |
| `issueLock` | Lock an issue | `gitlab` |
| `releaseCreate` | Create a release | `gitlab` |
| `releaseDelete` | Delete a release | `gitlab` |
| `releaseGet` | Get a release | `gitlab` |
| `releaseGetAll` | Get many releases | `gitlab` |
| `releaseUpdate` | Update a release | `gitlab` |
| `repositoryGet` | Get a repository | `gitlab` |
| `repositoryGetIssues` | Get issues of a repository | `gitlab` |
| `userGetRepositories` | Get a user's repositories | `gitlab` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'gitlab',
  package: '@pikku/addon-gitlab',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
