---
format: md
title: Google Drive
description: "Google Drive integration for Pikku"
sidebar_label: Google Drive
---

# Google Drive

Google Drive integration for Pikku

```bash
npm install @pikku/addon-google-drive
```

Category: **Data** · Version: `0.0.8` · Package: `@pikku/addon-google-drive`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `aboutGet` | Gets information about the user, the user's Drive, and system capabilities. | `googleDrive` |
| `changesGetStartPageToken` | Gets the starting pageToken for listing future changes. | `googleDrive` |
| `changesList` | Lists the changes for a user or shared drive. | `googleDrive` |
| `changesWatch` | Subscribes to changes for a user. | `googleDrive` |
| `channelsStop` | Stop watching resources through this channel | `googleDrive` |
| `commentsCreate` | Creates a comment on a file. | `googleDrive` |
| `commentsDelete` | Deletes a comment. | `googleDrive` |
| `commentsGet` | Gets a comment by ID. | `googleDrive` |
| `commentsList` | Lists a file's comments. | `googleDrive` |
| `commentsUpdate` | Updates a comment with patch semantics. | `googleDrive` |
| `drivesCreate` | Creates a shared drive. | `googleDrive` |
| `drivesDelete` | Permanently deletes a shared drive for which the user is an organizer. | `googleDrive` |
| `drivesGet` | Gets a shared drive's metadata by ID. | `googleDrive` |
| `drivesHide` | Hides a shared drive from the default view. | `googleDrive` |
| `drivesList` | Lists the user's shared drives. | `googleDrive` |
| `drivesUnhide` | Restores a shared drive to the default view. | `googleDrive` |
| `drivesUpdate` | Updates the metadata for a shared drive. | `googleDrive` |
| `filesCopy` | Creates a copy of a file and applies any requested updates with patch semantics. | `googleDrive` |
| `filesCreate` | Creates a file. | `googleDrive` |
| `filesDelete` | Permanently deletes a file owned by the user without moving it to the trash. | `googleDrive` |
| `filesEmptyTrash` | Permanently deletes all of the user's trashed files. | `googleDrive` |
| `filesExport` | Exports a Google Workspace document to the requested MIME type and returns exported byte content. | `googleDrive` |
| `filesGenerateIds` | Generates a set of file IDs which can be provided in create or copy requests. | `googleDrive` |
| `filesGet` | Gets a file's metadata or content by ID. | `googleDrive` |
| `filesList` | Lists or searches files. | `googleDrive` |
| `filesListLabels` | Lists the labels on a file. | `googleDrive` |
| `filesModifyLabels` | Modifies the set of labels on a file. | `googleDrive` |
| `filesUpdate` | Updates a file's metadata and/or content. | `googleDrive` |
| `filesWatch` | Subscribes to changes to a file. | `googleDrive` |
| `permissionsCreate` | Creates a permission for a file or shared drive. | `googleDrive` |
| `permissionsDelete` | Deletes a permission. | `googleDrive` |
| `permissionsGet` | Gets a permission by ID. | `googleDrive` |
| `permissionsList` | Lists a file's or shared drive's permissions. | `googleDrive` |
| `permissionsUpdate` | Updates a permission with patch semantics. | `googleDrive` |
| `repliesCreate` | Creates a reply to a comment. | `googleDrive` |
| `repliesDelete` | Deletes a reply. | `googleDrive` |
| `repliesGet` | Gets a reply by ID. | `googleDrive` |
| `repliesList` | Lists a comment's replies. | `googleDrive` |
| `repliesUpdate` | Updates a reply with patch semantics. | `googleDrive` |
| `revisionsDelete` | Permanently deletes a file version. | `googleDrive` |
| `revisionsGet` | Gets a revision's metadata or content by ID. | `googleDrive` |
| `revisionsList` | Lists a file's revisions. | `googleDrive` |
| `revisionsUpdate` | Updates a revision with patch semantics. | `googleDrive` |
| `teamdrivesCreate` | Deprecated use drives.create instead. | `googleDrive` |
| `teamdrivesDelete` | Deprecated use drives.delete instead. | `googleDrive` |
| `teamdrivesGet` | Deprecated use drives.get instead. | `googleDrive` |
| `teamdrivesList` | Deprecated use drives.list instead. | `googleDrive` |
| `teamdrivesUpdate` | Deprecated use drives.update instead | `googleDrive` |

## Secrets

- `GOOGLE_DRIVE_OAUTH_APP` — OAuth2 app credentials for Google Drive

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'google-drive',
  package: '@pikku/addon-google-drive',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
