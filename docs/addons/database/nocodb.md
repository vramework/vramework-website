---
format: md
title: Nocodb
description: "NocoDB integration for Pikku"
sidebar_label: Nocodb
---

# Nocodb

NocoDB integration for Pikku

```bash
npm install @pikku/addon-nocodb
```

Category: **Database** · Version: `0.0.7` · Package: `@pikku/addon-nocodb`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `actionTriggerButton` | Trigger a button action | `nocodb` |
| `aiCompletion` | AI Completion | `nocodb` |
| `aiDataExtract` | Extract AI data from the input | `nocodb` |
| `aiDataFill` | Fill AI data for specified rows | `nocodb` |
| `aiDataGenerate` | Generate AI data for specified rows | `nocodb` |
| `aiSchema` | AI Schema | `nocodb` |
| `aiSchemaCreate` | AI Schema | `nocodb` |
| `aiUtils` | AI Utils | `nocodb` |
| `apiTokenCreate` | Create API Token in a base | `nocodb` |
| `apiTokenDelete` | Delete the given API Token in base | `nocodb` |
| `apiTokenList` | List API Tokens in the given base | `nocodb` |
| `authBaseUserAdd` | Create a user and add it to the given base | `nocodb` |
| `authBaseUserList` | List all users in the given base. | `nocodb` |
| `authBaseUserRemove` | Delete a given user in a given base. | `nocodb` |
| `authBaseUserResendInvite` | Resend Invitation to a specific user | `nocodb` |
| `authBaseUserUpdate` | Update a given user in a given base. | `nocodb` |
| `authEmailValidate` | Api for verifying email where token need to be passed which is shared to user email. | `nocodb` |
| `authMe` | Returns authenticated user info | `nocodb` |
| `authorize` | Handle OAuth authorization request with user approval/denial | `nocodb` |
| `authPasswordChange` | Change password of authenticated user with a new one. | `nocodb` |
| `authPasswordForgot` | Emails user with a reset url. | `nocodb` |
| `authPasswordReset` | Update user password to new by using reset token. | `nocodb` |
| `authPasswordResetTokenValidate` | Validate password reset url token. | `nocodb` |
| `authSignin` | Authenticate existing user with their email and password. | `nocodb` |
| `authSignout` | Clear refresh token from the database and cookie. | `nocodb` |
| `authSignup` | Create a new user with provided email and password and first user is marked as super admin. | `nocodb` |
| `authTokenRefresh` | Creates a new refresh token and JWT auth token for the user. | `nocodb` |
| `baseCost` | Calculate the Base Cost | `nocodb` |
| `baseCreate` | Create a new base | `nocodb` |
| `baseDelete` | Delete the given base | `nocodb` |
| `baseDuplicate` | Duplicate a base | `nocodb` |
| `baseDuplicateShared` | Duplicate a shared base | `nocodb` |
| `baseHasEmptyOrNullFilters` | Check if a base contains empty and null filters. | `nocodb` |
| `baseList` | List all base meta data | `nocodb` |
| `baseMetaDiffGet` | Get the meta data difference between NC_DB and external data sources | `nocodb` |
| `baseMetaDiffSync` | Synchronise the meta data difference between NC_DB and external data sources | `nocodb` |
| `baseMetaGet` | Get info such as node version, arch, platform, is docker, rootdb and package version of a given base | `nocodb` |
| `baseModelVisibilityList` | Hide / show views based on user role | `nocodb` |
| `baseModelVisibilitySet` | Hide / show views based on user role | `nocodb` |
| `baseRead` | Get the info of a given base | `nocodb` |
| `baseSharedBaseCreate` | Create Base Shared Base | `nocodb` |
| `baseSharedBaseDisable` | Delete Base Shared Base | `nocodb` |
| `baseSharedBaseGet` | Get Base Shared Base | `nocodb` |
| `baseSharedBaseUpdate` | Update Base Shared Base | `nocodb` |
| `baseSourceDuplicate` | Duplicate a base | `nocodb` |
| `baseUpdate` | Update the given base | `nocodb` |
| `baseUserMetaUpdate` | — | `nocodb` |
| `dbCalendarViewRowCount` | Get the count of table view rows grouped by the dates | `nocodb` |
| `dbCalendarViewRowList` | List all rows in Calendar View of a Table | `nocodb` |
| `dbDataTableAggregate` | Read aggregated data from a given table | `nocodb` |
| `dbDataTableBulkAggregate` | Read bulk aggregated data from a given table with given filters | `nocodb` |
| `dbDataTableBulkGroupList` | Read bulk group data from a given table with given filters | `nocodb` |
| `dbDataTableBulkList` | Read bulk data from a given table with given filters | `nocodb` |
| `dbDataTableRowAttachmentDownload` | Download attachment from a given row | `nocodb` |
| `dbDataTableRowCount` | Count of rows in a given table | `nocodb` |
| `dbDataTableRowCreate` | Create a new row in a given table and base. | `nocodb` |
| `dbDataTableRowDelete` | Create a new row in a given table and base. | `nocodb` |
| `dbDataTableRowList` | List all table rows in a given table | `nocodb` |
| `dbDataTableRowMove` | Move the table row to new position | `nocodb` |
| `dbDataTableRowNestedLink` | Create a link with the row. | `nocodb` |
| `dbDataTableRowNestedList` | Linked rows in a given Links/LinkToAnotherRecord column | `nocodb` |
| `dbDataTableRowNestedListCopyPasteOrDeleteAll` | Copy links from the one cell and paste them into another cell or delete all records from cell | `nocodb` |
| `dbDataTableRowNestedUnlink` | Create a new row in a given table and base. | `nocodb` |
| `dbDataTableRowRead` | Get table row in a given table | `nocodb` |
| `dbDataTableRowUpdate` | Create a new row in a given table and base. | `nocodb` |
| `dbLinksTableRead` | Read the table metadata by linked column ID and table ID | `nocodb` |
| `dbTableColumnBulk` | Bulk create-update-delete columns | `nocodb` |
| `dbTableColumnCreate` | Create a new column in a given Table | `nocodb` |
| `dbTableColumnDelete` | Delete the existing column by the given column ID | `nocodb` |
| `dbTableColumnGet` | Get the existing column by the given column ID | `nocodb` |
| `dbTableColumnHash` | Get columns hash for table | `nocodb` |
| `dbTableColumnPrimaryColumnSet` | Set a primary value on a given column | `nocodb` |
| `dbTableColumnUpdate` | Update the existing column by the given column ID | `nocodb` |
| `dbTableCreate` | Create a new table in a given base | `nocodb` |
| `dbTableDelete` | Delete the table meta data by the given table ID | `nocodb` |
| `dbTableDuplicate` | Duplicate a table | `nocodb` |
| `dbTableFilterChildrenRead` | Get Filter Group Children of a given group ID | `nocodb` |
| `dbTableFilterCreate` | Update the filter data in a given View | `nocodb` |
| `dbTableFilterDelete` | Delete the filter data with a given Filter ID | `nocodb` |
| `dbTableFilterGet` | Get the filter data with a given Filter ID | `nocodb` |
| `dbTableFilterRead` | Get the filter data in a given View | `nocodb` |
| `dbTableFilterUpdate` | Update the filter data with a given Filter ID | `nocodb` |
| `dbTableList` | List all tables in a given base | `nocodb` |
| `dbTableRead` | Read the table meta data by the given table ID | `nocodb` |
| `dbTableReorder` | Update the order of the given Table | `nocodb` |
| `dbTableRowBulkCreate` | Bulk insert table rows in one go. | `nocodb` |
| `dbTableRowBulkDelete` | Bulk Delete Table Rows by given IDs | `nocodb` |
| `dbTableRowBulkDeleteAll` | Bulk Delete all Table Rows if the condition is true | `nocodb` |
| `dbTableRowBulkUpdate` | Bulk Update Table Rows by given IDs | `nocodb` |
| `dbTableRowBulkUpdateAll` | Bulk Update all Table Rows if the condition is true | `nocodb` |
| `dbTableRowBulkUpsert` | Bulk upsert table rows in one go. | `nocodb` |
| `dbTableRowCreate` | Create a new row in a given table and base. | `nocodb` |
| `dbTableRowDelete` | Delete the Table Row | `nocodb` |
| `dbTableRowExist` | Check row with provided primary key exists or not | `nocodb` |
| `dbTableRowFindOne` | Return the first result of the target Table Row | `nocodb` |
| `dbTableRowGroupBy` | Get the result grouped by the given query | `nocodb` |
| `dbTableRowGroupByCount` | Get the number of groups by the given query | `nocodb` |
| `dbTableRowGroupedDataList` | Get the grouped data By Column ID. | `nocodb` |
| `dbTableRowList` | List all table rows in a given table and base | `nocodb` |
| `dbTableRowNestedAdd` | Create a new nested relations row | `nocodb` |
| `dbTableRowNestedChildrenExcludedList` | Get the table rows but exculding the current record's children and parent | `nocodb` |
| `dbTableRowNestedList` | List all nested relations rows | `nocodb` |
| `dbTableRowNestedRemove` | Delete a new nested relations row | `nocodb` |
| `dbTableRowRead` | Get the Table Row by Row ID | `nocodb` |
| `dbTableRowUpdate` | Update the Table Row | `nocodb` |
| `dbTableSortCreate` | Update the sort data in a given View | `nocodb` |
| `dbTableSortDelete` | Delete the sort data by Sort ID | `nocodb` |
| `dbTableSortGet` | Get the sort data by Sort ID | `nocodb` |
| `dbTableSortList` | List all the sort data in a given View | `nocodb` |
| `dbTableSortUpdate` | Update the sort data by Sort ID | `nocodb` |
| `dbTableUpdate` | Update the table meta data by the given table ID | `nocodb` |
| `dbTableWebhookCreate` | Create a hook in the given table | `nocodb` |
| `dbTableWebhookDelete` | Delete the exsiting hook by its ID | `nocodb` |
| `dbTableWebhookFilterCreate` | Create filter(s) in a given Hook | `nocodb` |
| `dbTableWebhookFilterRead` | Get the filter data in a given Hook | `nocodb` |
| `dbTableWebhookList` | List all hook records in the given Table | `nocodb` |
| `dbTableWebhookLogsList` | List the log data in a given Hook | `nocodb` |
| `dbTableWebhookSamplePayloadGet` | Get the sample hook payload | `nocodb` |
| `dbTableWebhookTest` | Test the hook in the given Table | `nocodb` |
| `dbTableWebhookTrigger` | Trigger the manual WebHook | `nocodb` |
| `dbTableWebhookUpdate` | Update the exsiting hook by its ID | `nocodb` |
| `dbViewCalendarCreate` | Create a new Calendar View | `nocodb` |
| `dbViewCalendarRead` | Get the Calendar View data by Calendar ID | `nocodb` |
| `dbViewCalendarUpdate` | Update the Calendar View data with Calendar ID | `nocodb` |
| `dbViewColumnCreate` | Create a new column in a given View | `nocodb` |
| `dbViewColumnList` | List all columns by ViewID | `nocodb` |
| `dbViewColumnUpdate` | Update a column in a View | `nocodb` |
| `dbViewDelete` | Delete the view with the given view Id. | `nocodb` |
| `dbViewFormColumnUpdate` | Update the form column(s) by Form View Column ID | `nocodb` |
| `dbViewFormCreate` | Create a new form view in a given Table | `nocodb` |
| `dbViewFormRead` | Get the form data by Form ID | `nocodb` |
| `dbViewFormUpdate` | Update the form data by Form ID | `nocodb` |
| `dbViewGalleryCreate` | — | `nocodb` |
| `dbViewGalleryRead` | Get the Gallery View data with Gallery ID | `nocodb` |
| `dbViewGalleryUpdate` | Update the Gallery View data with Gallery ID | `nocodb` |
| `dbViewGridColumnsList` | List all columns in the given Grid | `nocodb` |
| `dbViewGridColumnUpdate` | Update grid column(s) in the given Grid | `nocodb` |
| `dbViewGridCreate` | Create a new grid view in a given Table | `nocodb` |
| `dbViewGridUpdate` | Update Grid View | `nocodb` |
| `dbViewHideAllColumn` | Hide All Columns in a given View | `nocodb` |
| `dbViewKanbanCreate` | Create a new Kanban View | `nocodb` |
| `dbViewKanbanRead` | Get the Kanban View data by Kanban ID | `nocodb` |
| `dbViewKanbanUpdate` | Update the Kanban View data with Kanban ID | `nocodb` |
| `dbViewList` | List all views in a given Table. | `nocodb` |
| `dbViewMapCreate` | Create a new Map View | `nocodb` |
| `dbViewMapRead` | Get the Map View data by Map ID | `nocodb` |
| `dbViewMapUpdate` | Update the Map View data by Map ID | `nocodb` |
| `dbViewRowCount` | Count how many rows in the given Table View | `nocodb` |
| `dbViewRowCreate` | Create a new row in the given Table View | `nocodb` |
| `dbViewRowDelete` | Delete the target Table View Row | `nocodb` |
| `dbViewRowExist` | Check row with provided primary key exists or not | `nocodb` |
| `dbViewRowFindOne` | Return the first result of table view rows with the given query | `nocodb` |
| `dbViewRowGroupBy` | Get the table view rows grouped by the given query | `nocodb` |
| `dbViewRowGroupByCount` | Get the table view rows grouped by count the given query | `nocodb` |
| `dbViewRowGroupedDataList` | Get the grouped data By Column ID. | `nocodb` |
| `dbViewRowList` | List all table view rows | `nocodb` |
| `dbViewRowRead` | Get the target Table View Row | `nocodb` |
| `dbViewRowUpdate` | Update the target Table View Row | `nocodb` |
| `dbViewShareCreate` | Create a shared view in a given View.. | `nocodb` |
| `dbViewShareDelete` | Delete a shared view in a given View. | `nocodb` |
| `dbViewShareList` | List all shared views in a given Table | `nocodb` |
| `dbViewShareUpdate` | Update a shared view in a given View.. | `nocodb` |
| `dbViewShowAllColumn` | Show All Columns in a given View | `nocodb` |
| `dbViewUpdate` | Update the view with the given view Id. | `nocodb` |
| `deleteViewRowColor` | Delete the row color info from view. | `nocodb` |
| `duplicateColumn` | Duplicate a column | `nocodb` |
| `exportData` | Trigger export as job | `nocodb` |
| `extensionsCreate` | Create a new extension for a given base | `nocodb` |
| `extensionsDelete` | Delete extension | `nocodb` |
| `extensionsList` | Get all extensions for a given base | `nocodb` |
| `extensionsRead` | Get extension details | `nocodb` |
| `extensionsUpdate` | Update extension details | `nocodb` |
| `getApiV2PublicOauthClient` | Retrieve public information about an OAuth client for authorization display | `nocodb` |
| `getViewRowColor` | Get the row color info from view. | `nocodb` |
| `integrationCreate` | Create integration | `nocodb` |
| `integrationDelete` | Delete integration | `nocodb` |
| `integrationList` | List integrations | `nocodb` |
| `integrationRead` | Read integration | `nocodb` |
| `integrationsEndpoint` | Call exposed integration endpoint | `nocodb` |
| `integrationSetDefault` | Set integration as category default | `nocodb` |
| `integrationsInfo` | Get info for integration | `nocodb` |
| `integrationsList` | List available integrations | `nocodb` |
| `integrationStore` | Store integration | `nocodb` |
| `integrationUpdate` | Update integration | `nocodb` |
| `internalGetOperation` | Trigger an internal operation | `nocodb` |
| `internalPostOperation` | Trigger an internal operation | `nocodb` |
| `jobsList` | Get list of jobs for a given base for the user | `nocodb` |
| `jobsListen` | Listen for job events | `nocodb` |
| `notificationDelete` | Delete notification | `nocodb` |
| `notificationList` | List notifications | `nocodb` |
| `notificationMarkAllAsRead` | Mark all notifications as read | `nocodb` |
| `notificationPoll` | Poll notifications | `nocodb` |
| `notificationUpdate` | Notificattion update | `nocodb` |
| `orgAppSettingsGet` | Get the application settings. | `nocodb` |
| `orgAppSettingsSet` | Update the application settings. | `nocodb` |
| `orgLicenseGet` | Get the application license key. | `nocodb` |
| `orgLicenseSet` | Set the application license key. | `nocodb` |
| `orgTokensCreate` | Creat an organisation API token. | `nocodb` |
| `orgTokensDelete` | Delete an organisation API token. | `nocodb` |
| `orgTokensList` | List all organisation API tokens. | `nocodb` |
| `orgUsersAdd` | Create an organisation user. | `nocodb` |
| `orgUsersDelete` | Delete an organisation user by User ID. | `nocodb` |
| `orgUsersFollowerCreate` | Create Organisation User Follower Relationship (Follow) | `nocodb` |
| `orgUsersFollowerDelete` | Delete Organisation User Follower Relationship (Unfollow) | `nocodb` |
| `orgUsersFollowerList` | List Organisation User Followers | `nocodb` |
| `orgUsersFollowingList` | List Organisation User Following | `nocodb` |
| `orgUsersGeneratePasswordResetToken` | Generate Password Reset Token for Organisation User. | `nocodb` |
| `orgUsersGetByUsername` | Organisation User GetByUsername | `nocodb` |
| `orgUsersIsFollowing` | Check if Organisation User is following someone | `nocodb` |
| `orgUsersList` | List all organisation users. | `nocodb` |
| `orgUsersProfileCreate` | Create Organisation User Profile | `nocodb` |
| `orgUsersProfileGet` | Get Organisation User Profile | `nocodb` |
| `orgUsersProfileUpdate` | Update Organisation User Profile | `nocodb` |
| `orgUsersResendInvite` | Resend Invitation to a specific user. | `nocodb` |
| `orgUsersUpdate` | Update an organisation user by User ID. | `nocodb` |
| `pluginList` | List all plugins | `nocodb` |
| `pluginRead` | Get the plugin data by ID | `nocodb` |
| `pluginStatus` | Check plugin is active or not | `nocodb` |
| `pluginTest` | Test if the plugin is working with the given configurations | `nocodb` |
| `pluginUpdate` | Update the plugin data by ID | `nocodb` |
| `pluginWebhookList` | List all webhook plugins | `nocodb` |
| `publicDataAttachmentDownload` | Download attachment from a shared view | `nocodb` |
| `publicDataCalendarRowCount` | — | `nocodb` |
| `publicDataCalendarRowList` | List all rows in Calendar View of a Table | `nocodb` |
| `publicDataCreate` | Create a new row for the target shared view | `nocodb` |
| `publicDataGroupBy` | List all shared view rows grouped by a column | `nocodb` |
| `publicDataGroupByCount` | Get the number of groups by the given query | `nocodb` |
| `publicDataList` | List all shared view rows | `nocodb` |
| `publicDataNestedList` | List all nested list data in a given shared view | `nocodb` |
| `publicDataRelationList` | List Nested Data Relation | `nocodb` |
| `publicDataTableAggregate` | Read aggregated data from a given table | `nocodb` |
| `publicDataTableBulkAggregate` | Read bulk aggregated data from a given table with provided filters | `nocodb` |
| `publicDataTableBulkDataList` | Read bulk data from a given table with provided filters | `nocodb` |
| `publicDataTableBulkGroup` | Read bulk group data from a given table with provided filters | `nocodb` |
| `publicDbViewRowCount` | Count how many rows in the given Table View | `nocodb` |
| `publicExportData` | Trigger export as job | `nocodb` |
| `publicGroupedDataList` | List Shared View Grouped Data | `nocodb` |
| `publicSharedBaseGet` | Get Share Source Meta | `nocodb` |
| `publicSharedErdMetaGet` | — | `nocodb` |
| `publicSharedViewMetaGet` | Get Share View Meta | `nocodb` |
| `sourceCreate` | Create a new source on a given base | `nocodb` |
| `sourceDelete` | Delete the source details of a given base | `nocodb` |
| `sourceDisableShareErd` | — | `nocodb` |
| `sourceList` | Get base source list | `nocodb` |
| `sourceMetaDiffGet` | Get the meta data difference between NC_DB and external data sources in a given Source | `nocodb` |
| `sourceMetaDiffSync` | Synchronise the meta data difference between NC_DB and external data sources in a given Source | `nocodb` |
| `sourceRead` | Get the source details of a given base | `nocodb` |
| `sourceShareErd` | — | `nocodb` |
| `sourceUpdate` | Update the source details of a given base | `nocodb` |
| `storageUpload` | Upload attachment | `nocodb` |
| `storageUploadByUrl` | Upload attachment by URL. | `nocodb` |
| `tableCreate` | Create a new table in a given Base and Source | `nocodb` |
| `tableList` | List all tables in a given Base and Source | `nocodb` |
| `userProfileUpdate` | Update User Profile | `nocodb` |
| `utilsAggregatedMetaInfo` | Get Aggregated Meta Info such as tableCount, dbViewCount, viewCount and etc. | `nocodb` |
| `utilsAppHealth` | Get Application Health Status | `nocodb` |
| `utilsAppInfo` | Get the application info such as authType, defaultLimit, version and etc. | `nocodb` |
| `utilsAppVersion` | Get the application version | `nocodb` |
| `utilsAxiosRequestMake` | Generic Axios Call | `nocodb` |
| `utilsCacheDelete` | Delete All K/V pairs in NocoCache | `nocodb` |
| `utilsCacheGet` | Get All K/V pairs in NocoCache | `nocodb` |
| `utilsCloudFeatures` | — | `nocodb` |
| `utilsCommandPalette` | Get dynamic command palette suggestions based on scope | `nocodb` |
| `utilsCommentCount` | Return the number of comments in the given query. | `nocodb` |
| `utilsCommentDelete` | Delete comment | `nocodb` |
| `utilsCommentList` | List all comments | `nocodb` |
| `utilsCommentRow` | Create a new comment in a row. | `nocodb` |
| `utilsCommentUpdate` | Update comment | `nocodb` |
| `utilsErrorReport` | Error Reporting | `nocodb` |
| `utilsFeed` | — | `nocodb` |
| `utilsTestConnection` | Test the DB Connection | `nocodb` |
| `utilsUrlToConfig` | Extract XC URL From JDBC and parse to connection config | `nocodb` |
| `viewRowColorConditionAdd` | — | `nocodb` |
| `viewRowColorConditionDelete` | — | `nocodb` |
| `viewRowColorConditionUpdate` | — | `nocodb` |
| `viewRowColorSelectAdd` | — | `nocodb` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'nocodb',
  package: '@pikku/addon-nocodb',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
