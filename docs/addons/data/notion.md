---
format: md
title: Notion
description: "Notion integration for Pikku"
sidebar_label: Notion
---

# Notion

Notion integration for Pikku

```bash
npm install @pikku/addon-notion
```

Category: **Data** · Version: `0.0.7` · Package: `@pikku/addon-notion`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `completeFileUpload` | Complete a multi-part file upload | `notion` |
| `createAComment` | Create a comment | `notion` |
| `createADatabase` | Create a data source | `notion` |
| `createAToken` | Exchange an authorization code for an access and refresh token | `notion` |
| `createDatabase` | Create a database | `notion` |
| `createFile` | Create a file upload | `notion` |
| `createView` | Create a view | `notion` |
| `createViewQuery` | Create a view query | `notion` |
| `deleteABlock` | Delete a block | `notion` |
| `deleteAComment` | Delete a comment | `notion` |
| `deleteView` | Delete a view | `notion` |
| `deleteViewQuery` | Delete a view query | `notion` |
| `getBlockChildren` | Retrieve block children | `notion` |
| `getSelf` | Retrieve your token's bot user | `notion` |
| `getUser` | Retrieve a user | `notion` |
| `getUsers` | List all users | `notion` |
| `getViewQueryResults` | Get view query results | `notion` |
| `introspectToken` | Introspect a token | `notion` |
| `listComments` | List comments | `notion` |
| `listCustomEmojis` | List custom emojis | `notion` |
| `listDataSourceTemplates` | List templates in a data source | `notion` |
| `listFileUploads` | List file uploads | `notion` |
| `listViews` | List views | `notion` |
| `movePage` | Move a page | `notion` |
| `patchBlockChildren` | Append block children | `notion` |
| `patchPage` | Update page | `notion` |
| `postDatabaseQuery` | Query a data source | `notion` |
| `postPage` | Create a page | `notion` |
| `postSearch` | Search by title | `notion` |
| `queryMeetingNotes` | Query meeting notes | `notion` |
| `retrieveABlock` | Retrieve a block | `notion` |
| `retrieveADataSource` | Retrieve a data source | `notion` |
| `retrieveAPage` | Retrieve a page | `notion` |
| `retrieveAPageProperty` | Retrieve a page property item | `notion` |
| `retrieveAsyncTask` | Retrieve an async task | `notion` |
| `retrieveAView` | Retrieve a view | `notion` |
| `retrieveComment` | Retrieve a comment | `notion` |
| `retrieveDatabase` | Retrieve a database | `notion` |
| `retrieveFileUpload` | Retrieve a file upload | `notion` |
| `retrievePageMarkdown` | Retrieve a page as markdown | `notion` |
| `revokeToken` | Revoke a token | `notion` |
| `updateABlock` | Update a block | `notion` |
| `updateAComment` | Update a comment | `notion` |
| `updateADataSource` | Update a data source | `notion` |
| `updateAView` | Update a view | `notion` |
| `updateDatabase` | Update a database | `notion` |
| `updatePageMarkdown` | Update a page's content as markdown | `notion` |
| `uploadFile` | Upload a file | `notion` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'notion',
  package: '@pikku/addon-notion',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
