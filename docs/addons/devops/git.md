---
format: md
title: Git
description: "Git operations: clone, commit, push, branch, merge, and more."
sidebar_label: Git
---

# Git

Git operations: clone, commit, push, branch, merge, and more.

```bash
npm install @pikku/addon-git
```

Category: **DevOps** · Version: `0.1.6` · Package: `@pikku/addon-git`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `gitAdd` | Stage files for commit in a git repository | — |
| `gitBranchCreate` | Create a new branch in a git repository | — |
| `gitBranchDelete` | Delete a branch from a git repository | — |
| `gitBranchList` | List branches in a git repository | — |
| `gitCheckout` | Checkout a branch, tag, or commit | — |
| `gitClean` | Remove untracked files from the working tree | — |
| `gitClone` | Clone a git repository | — |
| `gitCommit` | Commit staged changes in a git repository | — |
| `gitDiff` | Get diff of changes in a git repository | — |
| `gitFetch` | Fetch updates from a remote repository | — |
| `gitInit` | Initialize a new git repository | — |
| `gitLog` | Get commit log from a git repository | — |
| `gitMerge` | Merge a branch into the current branch | — |
| `gitPull` | Pull changes from a remote repository | — |
| `gitPush` | Push commits to a remote repository | — |
| `gitRaw` | Execute a raw git command | — |
| `gitRemoteAdd` | Add a remote to a git repository | — |
| `gitRemoteList` | List remotes in a git repository | — |
| `gitRemoteRemove` | Remove a remote from a git repository | — |
| `gitReset` | Reset current HEAD to a specified state | — |
| `gitRevert` | Revert a commit by creating a new commit that undoes the changes | — |
| `gitShow` | Show details of a git object (commit, tag, etc.) | — |
| `gitStash` | Manage stashed changes in a git repository | — |
| `gitStatus` | Get the status of a git repository | — |
| `gitTagCreate` | Create a new tag in a git repository | — |
| `gitTagList` | List tags in a git repository | — |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'git',
  package: '@pikku/addon-git',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
