---
format: md
title: Zendesk
description: "Zendesk integration for Pikku"
sidebar_label: Zendesk
---

# Zendesk

Zendesk integration for Pikku

```bash
npm install @pikku/addon-zendesk
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-zendesk`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `addOrganizationTags` | Allowed For * Agents | `zendesk` |
| `autocompleteCustomObjectRecordSearch` | Retrieves an array of custom object records that have a field value that matches the value specified in the `name` parameter. | `zendesk` |
| `autocompleteOrganizations` | Returns an array of organizations whose name starts with the value specified in the `name` parameter. | `zendesk` |
| `autocompleteProblems` | Returns tickets whose type is "problem" and whose subject contains the string specified in the `text` parameter. | `zendesk` |
| `autocompleteTags` | Returns an array of registered and recent tag names that start with the characters specified in the `name` query parameter. | `zendesk` |
| `autocompleteTagsPost` | Returns an array of registered and recent tag names that start with the characters specified in the `name` parameter. | `zendesk` |
| `autocompleteUsers` | Returns an array of users whose name starts with the value specified in the `name` parameter. | `zendesk` |
| `autocompleteUsersPost` | Returns an array of users whose name starts with the value specified in the `name` property in the request body. | `zendesk` |
| `batchOperateTriggerCategories` | Creates a job that performs a batch operation for the given ticket trigger categories. | `zendesk` |
| `bulkDeleteAutomations` | Deletes the automations corresponding to the provided comma-separated list of IDs. | `zendesk` |
| `bulkDeleteSessionsByUserId` | Deletes all the sessions for a user. | `zendesk` |
| `bulkDeleteTickets` | Accepts a comma-separated list of up to 100 ticket ids. | `zendesk` |
| `bulkDeleteViews` | Deletes the views corresponding to the provided list of IDs. | `zendesk` |
| `bulkPermanentlyDeleteTickets` | Permanently deletes up to 100 soft-deleted tickets. | `zendesk` |
| `bulkRecoverSuspendedTickets` | Enqueues a bulk job to recover multiple suspended tickets. | `zendesk` |
| `bulkRestoreDeletedTickets` | Allowed For * Agents | `zendesk` |
| `bulkSetAgentAttributeValuesJob` | Adds, replaces or removes multiple attributes for up to 100 agents. | `zendesk` |
| `bulkUpdateDefaultCustomStatus` | Updates the default values for many custom ticket statuses at once. | `zendesk` |
| `changeOwnPassword` | You can only change your own password. | `zendesk` |
| `checkHostMappingValidity` | Returns a JSON object determining whether a host mapping is valid for a given subdomain. | `zendesk` |
| `checkHostMappingValidityForExistingBrand` | Returns a JSON object determining whether a host mapping is valid for the given brand. | `zendesk` |
| `clientGenerateSecret` | Allowed for * Admins | `zendesk` |
| `cloneTicketForm` | Allowed For * Admins | `zendesk` |
| `countActivities` | Returns an approximate count of ticket activities in the last 30 days affecting the agent making the request. | `zendesk` |
| `countAuditsForTicket` | Returns an approximate count of audits for a specified ticket. | `zendesk` |
| `countCustomObjectRecords` | Returns a total count of records for a specific custom object as well as the time the count was refreshed. | `zendesk` |
| `countDeletedUsers` | Returns an approximate count of deleted users, including permanently deleted users. | `zendesk` |
| `countGroups` | Returns an approximate count of groups. | `zendesk` |
| `countGroupUsers` | Returns an approximate count of users in the specified group. | `zendesk` |
| `countOrganizations` | Returns an approximate count of organizations. | `zendesk` |
| `countOrganizationTickets` | Returns an approximate count of tickets for a specific organization. | `zendesk` |
| `countOrganizationUsers` | Returns an approximate count of users for a specific organization. | `zendesk` |
| `countSatisfactionRatings` | Returns an approximate count of satisfaction ratings in the account. | `zendesk` |
| `countSearchResults` | Returns the number of items matching the query rather than the items. | `zendesk` |
| `countTags` | Returns an approximate count of tags. | `zendesk` |
| `countTicketComments` | Returns an approximate count of the comments added to the ticket. | `zendesk` |
| `countTicketFields` | Returns an approximate count of system and custom ticket fields in the account. | `zendesk` |
| `countTickets` | Returns an approximate count of tickets in the account. | `zendesk` |
| `countUserAssignedTickets` | Returns an approximate count of tickets assigned to the specified user. | `zendesk` |
| `countUserCCDTickets` | Returns an approximate count of tickets where the specified user is CC'd. | `zendesk` |
| `countUserGroups` | Returns an approximate count of groups for the specified user. | `zendesk` |
| `countUserOrganizations` | Returns an approximate count of organizations for a specific user. | `zendesk` |
| `countUsers` | Returns an approximate count of users. | `zendesk` |
| `countViews` | Returns an approximate count of shared and personal views available to the current user. | `zendesk` |
| `createAccessRule` | Creates a new access rule for a custom object. | `zendesk` |
| `createApprovalRequest` | Creates an approval request for a ticket. | `zendesk` |
| `createAssociatedMacroAttachment` | Allows an attachment to be uploaded and associated with a macro at the same time. | `zendesk` |
| `createAttribute` | Creates an attribute. | `zendesk` |
| `createAttributeValue` | Creates an attribute value. | `zendesk` |
| `createAutomation` | Creates an automation. | `zendesk` |
| `createBookmark` | Allowed For - Agents | `zendesk` |
| `createBrand` | Creates a brand. | `zendesk` |
| `createCustomObject` | Creates an object describing all the properties required to create a custom object record Allowed For * Admins | `zendesk` |
| `createCustomObjectField` | Creates any of the following custom field types: * text (default when no "type" is specified) * textarea * checkbox * currency * date * integer * decimal * reg… | `zendesk` |
| `createCustomObjectRecord` | Creates a custom object record according to all the properties described by a custom object definition. | `zendesk` |
| `createCustomObjectRecordAttachment` | Creates a new attachment associated with a custom object record. | `zendesk` |
| `createCustomRole` | Availability * Accounts on the Enterprise plan or above Allowed for * Administrators * Agents with the `manage_roles` permission | `zendesk` |
| `createCustomStatus` | Takes a `custom_status` object that specifies the custom ticket status properties to create. | `zendesk` |
| `createDeletionSchedule` | Creates a new deletion schedule. | `zendesk` |
| `createDynamicContent` | Create a new content item, with one or more variants in the item's `variants` array. | `zendesk` |
| `createDynamicContentVariant` | You can only create one variant for each locale id. | `zendesk` |
| `createEndUserIdentity` | Adds an identity to an end user's profile. | `zendesk` |
| `createGroup` | Allowed For * Admins * Agents assigned to a custom role with permissions to manage groups (Enterprise only) | `zendesk` |
| `createGroupMembership` | Assigns an agent to a given group. | `zendesk` |
| `createGroupSLAPolicy` | Allowed For * Admins | `zendesk` |
| `createItamAsset` | Creates an asset. | `zendesk` |
| `createItamAssetType` | Creates an asset type. | `zendesk` |
| `createItamAssetTypeField` | Creates an asset field for an individual asset type. | `zendesk` |
| `createItamLocation` | Creates a location. | `zendesk` |
| `createMacro` | Allowed For * Agents | `zendesk` |
| `createMacroAttachment` | Allows an attachment to be uploaded that can be associated with a macro at a later time. | `zendesk` |
| `createManyDynamicContentVariants` | Allowed For * Admins, Agents | `zendesk` |
| `createManyOrganizationMemberships` | Accepts an array of up to 100 organization membership objects. | `zendesk` |
| `createManyOrganizations` | Accepts an array of up to 100 organization objects. | `zendesk` |
| `createManyUsers` | Accepts an array of up to 100 user objects. | `zendesk` |
| `createOAuthClient` | Allowed For * Admins | `zendesk` |
| `createOAuthToken` | Returns an OAuth access token with a specified scope. | `zendesk` |
| `createObjectTrigger` | Creates a new object trigger for a specified object. | `zendesk` |
| `createOrganization` | You must provide a unique `name` for each organization. | `zendesk` |
| `createOrganizationField` | Creates any of the following custom field types: * text (default when no "type" is specified) * textarea * checkbox * date * integer * decimal * regexp * dropd… | `zendesk` |
| `createOrganizationMembership` | Assigns a user to a given organization. | `zendesk` |
| `createOrganizationMerge` | Merges two organizations by moving all users, tickets, and domain names from the organization specified by `&#123;organization_id&#125;` to the organization specified by… | `zendesk` |
| `createOrganizationSubscription` | Allowed For: * Agents * End users End users can only subscribe to shared organizations in which they're members. | `zendesk` |
| `createOrUpdateManyUsers` | Accepts an array of up to 100 user objects. | `zendesk` |
| `createOrUpdateOrganization` | Creates an organization if it doesn't already exist, or updates an existing organization. | `zendesk` |
| `createOrUpdateTicketFieldOption` | Creates or updates an option for the given drop-down ticket field. | `zendesk` |
| `createOrUpdateUser` | Creates a user if the user does not already exist, or updates an existing user identified by e-mail address or external ID. | `zendesk` |
| `createOrUpdateUserFieldOption` | Creates a new option or updates an existing option for the given drop-down user field. | `zendesk` |
| `createQueue` | Creates a queue. | `zendesk` |
| `createRequest` | Accepts a `request` object that sets one or more properties. | `zendesk` |
| `createResourceCollection` | Creates a resource collection from a provided `payload` object. | `zendesk` |
| `createSavedSearch` | Creates a saved search for the requesting agent. | `zendesk` |
| `createSharingAgreement` | Allowed For * Admins | `zendesk` |
| `createSLAPolicy` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `createSupportAddress` | Adds a Zendesk or external support address to your account. | `zendesk` |
| `createTarget` | Allowed For * Admins | `zendesk` |
| `createTaskList` | Adds a task list to the specified ticket. | `zendesk` |
| `createTaskListTemplate` | Creates a task list template. | `zendesk` |
| `createTicket` | — | `zendesk` |
| `createTicketContentPin` | Creates a new content pin for a specific ticket. | `zendesk` |
| `createTicketField` | Creates any of the following custom field types: \| Custom field type \| Description \| \|-------------------\|-----------------------------------------------------… | `zendesk` |
| `createTicketForm` | Allowed For * Admins | `zendesk` |
| `createTicketFormStatuses` | Creates one or many ticket form status associations Allowed For * Admins | `zendesk` |
| `createTicketFormStatusesForCustomStatus` | Creates one or many tickets form status associations for a custom status. | `zendesk` |
| `createTicketFromTweet` | Turns a tweet into a ticket. | `zendesk` |
| `createTicketOrVoicemailTicket` | Allowed For * Agents Creating tickets Introduction Creating tickets using Talk Partner Edition follows the same conventions as the Create Ticket endpoint. | `zendesk` |
| `createTicketSatisfactionRating` | Creates a CSAT rating for a solved ticket, or for a ticket that was previously solved and then reopened. | `zendesk` |
| `createTokenForGrantType` | Returns an OAuth access token in exchange for one of the following: - an authorization code - a refresh token - a client secret **Note**: The password grant ty… | `zendesk` |
| `createTrialAccount` | — | `zendesk` |
| `createTrigger` | Allowed For * Agents | `zendesk` |
| `createTriggerCategory` | Creates a ticket trigger category. | `zendesk` |
| `createUser` | — | `zendesk` |
| `createUserField` | Creates any of the following custom field types: * text (default when no "type" is specified) * textarea * checkbox * date * integer * decimal * regexp * dropd… | `zendesk` |
| `createUserGroupMembership` | Assigns an agent to a given group. | `zendesk` |
| `createUserIdentity` | Adds an identity to a user's profile. | `zendesk` |
| `createUserOrganizationMembership` | Assigns a user to a given organization. | `zendesk` |
| `createView` | Allowed For * Agents JSON Format The JSON format consists of one property, a `view` object that lists the values to set when the view is created. | `zendesk` |
| `createWorkspace` | Allowed For * Admins | `zendesk` |
| `customObjectFieldsLimit` | List the current count and the limit for a custom object's fields Allowed For * Agents | `zendesk` |
| `customObjectRecordBulkJobs` | Queues a background job to perform bulk actions on up to 100 custom object records per single request. | `zendesk` |
| `customObjectRecordsLimit` | List the current count and the limit for custom object records Allowed For * Agents | `zendesk` |
| `customObjectsLimit` | List the current count and the limit for custom objects Allowed For * Admins | `zendesk` |
| `deleteAccessRule` | Permanently deletes an access rule for a custom object. | `zendesk` |
| `deleteAttachment` | Deletes the attachment. | `zendesk` |
| `deleteAttribute` | Deletes an attribute. | `zendesk` |
| `deleteAttributeValue` | Deletes an attribute value. | `zendesk` |
| `deleteAuthenticatedSession` | Deletes the current session. | `zendesk` |
| `deleteAutomation` | **Note**: You might be restricted from deleting some default automations. | `zendesk` |
| `deleteBookmark` | Allowed For - Agents (own bookmarks only) If the bookmark already exists with a specified ticket id, the response status will be `http Status: 200 OK`. | `zendesk` |
| `deleteBrand` | Deletes a brand. | `zendesk` |
| `deleteBrandAgentById` | Deletes a brand agent membership. | `zendesk` |
| `deleteBrandLogo` | Removes the logo from a brand. | `zendesk` |
| `deleteClient` | Allowed for * Admins | `zendesk` |
| `deleteCustomObject` | Permanently deletes the custom object with the specified key Allowed For * Admins | `zendesk` |
| `deleteCustomObjectField` | Deletes a field with the specified key. | `zendesk` |
| `deleteCustomObjectRecord` | Deletes a record with the specified id. | `zendesk` |
| `deleteCustomObjectRecordAttachment` | Deletes the specified attachment associated with a custom object record. | `zendesk` |
| `deleteCustomObjectRecordByExternalIdOrName` | Deletes a record with the specified external id or name. | `zendesk` |
| `deleteCustomRoleById` | Availability * Accounts on the Enterprise plan or above Allowed for * Administrators * Agents with the `manage_roles` permission | `zendesk` |
| `deleteCustomStatus` | Deletes the custom ticket status. | `zendesk` |
| `deleteDeletionSchedule` | Deletes a deletion schedule by its id. | `zendesk` |
| `deleteDynamicContentItem` | Allowed For * Admins, Agents | `zendesk` |
| `deleteDynamicContentVariant` | Allowed For * Admins, Agents | `zendesk` |
| `deleteEndUserIdentity` | Deletes the identity for a given end user. | `zendesk` |
| `deleteGroup` | Allowed For * Admins * Agents assigned to a custom role with permissions to manage groups (Enterprise only) | `zendesk` |
| `deleteGroupMembership` | Immediately removes a user from a group and schedules a job to unassign all working tickets that are assigned to the given user and group combination. | `zendesk` |
| `deleteGroupSLAPolicy` | Allowed For * Admins | `zendesk` |
| `deleteItamAsset` | Deletes an asset with the specified id. | `zendesk` |
| `deleteItamAssetType` | Deletes an asset type with the specified id. | `zendesk` |
| `deleteItamAssetTypeField` | Deletes an asset field with the specified id. | `zendesk` |
| `deleteItamLocation` | Deletes a location with the specified id. | `zendesk` |
| `deleteMacro` | Allowed For * Agents, with restrictions applying on certain actions | `zendesk` |
| `deleteManyMacros` | Deletes the macros corresponding to the provided comma-separated list of IDs. | `zendesk` |
| `deleteManyObjectTriggers` | Deletes the object triggers corresponding to the provided comma-separated list of ids. | `zendesk` |
| `deleteManyOrganizationMemberships` | Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. | `zendesk` |
| `deleteManyOrganizations` | Accepts a comma-separated list of up to 100 organization ids or external ids. | `zendesk` |
| `deleteManyTriggers` | Deletes the ticket triggers corresponding to the provided comma-separated list of IDs. | `zendesk` |
| `deleteObjectTrigger` | Deletes a specified object trigger. | `zendesk` |
| `deleteOrganization` | Allowed For * Admins * Agents assigned to a custom role with permissions to manage organizations (Enterprise only) | `zendesk` |
| `deleteOrganizationField` | Allowed for * Admins | `zendesk` |
| `deleteOrganizationMembership` | Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. | `zendesk` |
| `deleteOrganizationSubscription` | Allowed For: * Agents * End users | `zendesk` |
| `deleteQueue` | Deletes the queue and related records. | `zendesk` |
| `deleteRecipientAddress` | Deletes a support address. | `zendesk` |
| `deleteResourceCollection` | Deletes a specified resource collection. | `zendesk` |
| `deleteSavedSearch` | Deletes the saved search with the specified id for the requesting agent. | `zendesk` |
| `deleteSession` | Allowed For * Admins, Agents, End users | `zendesk` |
| `deleteSharingAgreement` | Deletes a sharing agreement. | `zendesk` |
| `deleteSLAPolicy` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `deleteSuspendedTicket` | Allowed For * Unrestricted agents | `zendesk` |
| `deleteSuspendedTickets` | Accepts up to 100 ids (the auto-generated id, not the ticket id.) Allowed For * Admins and agents in custom roles with permission to manage suspended tickets o… | `zendesk` |
| `deleteTagsTicket` | You can also delete tags from multiple tickets with the Update Many Tickets endpoint. | `zendesk` |
| `deleteTarget` | Allowed For * Admins | `zendesk` |
| `deleteTaskListTemplate` | Deletes a task list template with the specified id. | `zendesk` |
| `deleteTicket` | Allowed For * Admins * Agents with permission to delete tickets Agent delete permissions are set in Support. | `zendesk` |
| `deleteTicketContentPin` | Deletes a specific content pin from a ticket. | `zendesk` |
| `deleteTicketField` | Allowed for * Admins | `zendesk` |
| `deleteTicketFieldOption` | Allowed for * Admins | `zendesk` |
| `deleteTicketForm` | Allowed For * Admins | `zendesk` |
| `deleteTicketFormStatusById` | Deletes a ticket form status by id. | `zendesk` |
| `deleteTicketFormStatuses` | Deletes all of of the ticket form statuses by id. | `zendesk` |
| `deleteTicketPermanently` | Permanently deletes a soft-deleted ticket. | `zendesk` |
| `deleteTrigger` | Allowed For * Agents | `zendesk` |
| `deleteTriggerCategory` | Deletes the ticket trigger category with the specified ID. | `zendesk` |
| `deleteUpload` | Allowed for * End Users | `zendesk` |
| `deleteUser` | Deletes the user and associated records from the account. | `zendesk` |
| `deleteUserField` | Allowed for * Admins | `zendesk` |
| `deleteUserFieldOption` | Allowed for * Admins | `zendesk` |
| `deleteUserGroupMembership` | Immediately removes a user from a group and schedules a job to unassign all working tickets that are assigned to the given user and group combination. | `zendesk` |
| `deleteUserIdentity` | Deletes the identity for a given user. | `zendesk` |
| `deleteUserOrganizationMembership` | Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. | `zendesk` |
| `deleteUserTags` | Allowed For * Agents | `zendesk` |
| `deleteView` | Allowed For * Agents | `zendesk` |
| `deleteWorkspace` | Allowed For * Admins | `zendesk` |
| `destroyManyUsers` | Accepts a comma-separated list of up to 100 user ids. | `zendesk` |
| `destroyManyWorkspaces` | Allowed For * Admins | `zendesk` |
| `detectBestLocale` | Allowed For * Anyone | `zendesk` |
| `downloadCustomObjectRecordAttachment` | Downloads the specified attachment content. | `zendesk` |
| `dynamicContentListVariants` | Returns all the variants of the specified dynamic content item. | `zendesk` |
| `executeView` | Returns the column titles and the rows of the specified view. | `zendesk` |
| `exportAuditLogs` | Allowed For * Admins on accounts that have audit log access Limits This endpoint's rate limit is different from the account-wide rate limit. | `zendesk` |
| `exportSearchResults` | Exports a set of results. | `zendesk` |
| `exportSuspendedTickets` | Exports a list of suspended tickets for the Zendesk Support instance. | `zendesk` |
| `exportView` | Returns the csv attachment of the specified view if possible. | `zendesk` |
| `filteredSearchCustomObjectRecords` | Returns an array of custom object records that meet the search and filter criteria. | `zendesk` |
| `filteredSearchItamAssets` | Returns an array of assets that meet the complex search and filter criteria. | `zendesk` |
| `getAccountEmailSettings` | Returns the email settings for the account. | `zendesk` |
| `getDeletionSchedule` | Gets a deletion schedule by its id. | `zendesk` |
| `getObjectTrigger` | Returns details of a specific object trigger. | `zendesk` |
| `getRelationshipFilterDefinitions` | Returns filter definitions based on the given target type. | `zendesk` |
| `getSourcesByTarget` | Returns a list of source objects whose values are populated with the id of a related target object. | `zendesk` |
| `getTasksByTaskListTemplateId` | Returns the tasks for the specified task list template. | `zendesk` |
| `gettingTwicketStatus` | Allowed For * Agents | `zendesk` |
| `getTrigger` | Allowed For * Agents The Via Type value is a number instead of a text string. | `zendesk` |
| `getUserEntitlementsFull` | Returns the full entitlements for all Zendesk products (Explore, Voice, Knowledge, Live Chat) for the specified user. | `zendesk` |
| `getUserPasswordRequirements` | Allowed For * Agents * End Users | `zendesk` |
| `getViewCount` | Returns the ticket count for a single view. | `zendesk` |
| `getViewCounts` | Returns the ticket count of each view in a list of views. | `zendesk` |
| `globalOAuthClientsTokenSummary` | Returns information about tokens for the global clients that your account has authorized. | `zendesk` |
| `groupMembershipBulkCreate` | Assigns up to 100 agents to given groups. | `zendesk` |
| `groupMembershipBulkDelete` | Immediately removes users from groups and schedules a job to unassign all working tickets that are assigned to the given user and group combinations. | `zendesk` |
| `groupMembershipSetDefault` | Allowed For: * Agents | `zendesk` |
| `incrementalCustomObjectRecordExportCursor` | Returns the custom object records that changed since the start time. | `zendesk` |
| `incrementalOrganizationExport` | Allowed For * Admins Sideloading See Organizations sideloads. | `zendesk` |
| `incrementalSampleExport` | Use this endpoint to test the incremental export format. | `zendesk` |
| `incrementalSkilBasedRoutingAttributesExport` | Returns a stream of changes that occurred on routing attributes. | `zendesk` |
| `incrementalSkilBasedRoutingAttributeValuesExport` | Returns a stream of changes that occurred on routing attribute values. | `zendesk` |
| `incrementalSkilBasedRoutingInstanceValuesExport` | Returns a stream of changes that occurred on routing instance values. | `zendesk` |
| `incrementalTicketEvents` | Returns a stream of changes that occurred on tickets, excluding events occuring within one minute of the request. | `zendesk` |
| `incrementalTicketExportCursor` | Returns the tickets that changed since the start time. | `zendesk` |
| `incrementalTicketExportTime` | Returns the tickets that changed since the start time. | `zendesk` |
| `incrementalUserExportCursor` | Allowed For * Admins Sideloading See Users sideloads. | `zendesk` |
| `incrementalUserExportTime` | Allowed For * Admins Sideloading See Users sideloads. | `zendesk` |
| `itamAssetBulkJobs` | Queues a background job to perform bulk actions on up to 100 asset records per request. | `zendesk` |
| `listAccessRuleDefinitions` | Returns the available field definitions and operators that can be used when creating access rules for a custom object. | `zendesk` |
| `listAccessRules` | Returns a list of access rules for a custom object. | `zendesk` |
| `listAccountAttributes` | Returns a list of attributes for the account. | `zendesk` |
| `listActiveAutomations` | Lists all active automations. | `zendesk` |
| `listActiveMacros` | Lists all active shared and personal macros available to the current user. | `zendesk` |
| `listActiveObjectTriggers` | Lists all active object triggers. | `zendesk` |
| `listActiveTriggers` | Lists all active ticket triggers. | `zendesk` |
| `listActiveViews` | Lists active shared and personal views available to the current user. | `zendesk` |
| `listActivities` | Lists ticket activities in the last 30 days affecting the agent making the request. | `zendesk` |
| `listAGentAttributeValues` | Returns an attribute value. | `zendesk` |
| `listApprovalRequests` | Lists all approval requests for the current account with optional filtering by status and assignee. | `zendesk` |
| `listAssignableGroupMemberships` | Returns a maximum of 100 group memberships per page. | `zendesk` |
| `listAssignableGroupMembershipsByGroup` | Returns a list of assignable group memberships for a specific group. | `zendesk` |
| `listAssignableGroups` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listAttributeValues` | Returns a list of attribute values for a provided attribute. | `zendesk` |
| `listAuditLogs` | Allowed For * Admins on accounts that have audit log access Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listAuditsForTicket` | Lists the audits for a specified ticket. | `zendesk` |
| `listAutomations` | Lists all automations for the current account. | `zendesk` |
| `listAvailablePublicLocales` | Lists the translation locales that are available to all accounts. | `zendesk` |
| `listBookmarks` | Archived tickets are not included in the response. | `zendesk` |
| `listBrandAgents` | Returns a list of all brand agent memberships for your account. | `zendesk` |
| `listBrandAgentsByBrand` | Returns a list of all agents assigned to a specific brand. | `zendesk` |
| `listBrands` | Returns a list of all brands for your account sorted by name. | `zendesk` |
| `listCCDRequests` | Lists requests where the authenticated end user is CC'd. | `zendesk` |
| `listComments` | Pagination - Cursor pagination (recommended) - Offset pagination See Pagination. | `zendesk` |
| `listCompactViews` | A compacted list of shared and personal views available to the current user. | `zendesk` |
| `listConversationLogForTicket` | Lists the conversation log events for a specified ticket. | `zendesk` |
| `listCurrentUserOAuthClients` | Returns the OAuth clients owned by the current user. | `zendesk` |
| `listCustomObjectFields` | Lists all undeleted custom fields for the specified object. | `zendesk` |
| `listCustomObjectRecordAttachments` | Lists all attachments associated with a custom object record. | `zendesk` |
| `listCustomObjectRecords` | Lists all undeleted custom object records for the specified object. | `zendesk` |
| `listCustomObjects` | Lists all undeleted custom objects for the account Allowed For * Agents | `zendesk` |
| `listCustomRoles` | Availability * Accounts on the Enterprise plan or above Allowed For * Agents | `zendesk` |
| `listCustomStatuses` | Lists all undeleted custom ticket statuses for the account. | `zendesk` |
| `listDeletedTickets` | Returns a maximum of 100 deleted tickets per page. | `zendesk` |
| `listDeletedUsers` | Returns deleted users, including permanently deleted users. | `zendesk` |
| `listDeletionSchedules` | Lists all deletion schedules for the account. | `zendesk` |
| `listDynamicContents` | Returns a list of all dynamic content items for your account if accessed as an admin or agents who have permission to manage dynamic content. | `zendesk` |
| `listEmailNotifications` | Allowed For * Agents Request parameters Filters **Important**: You must specify a `filter` query parameter to narrow the scope of the search for this endpoint. | `zendesk` |
| `listEndUserIdentities` | Returns a list of identities for the given end user. | `zendesk` |
| `listGlobalOAuthClients` | Returns all the global OAuth clients that users on your account have authorized. | `zendesk` |
| `listGroupMemberships` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listGroupMembershipsByGroup` | Returns a list of all group memberships for a specific group. | `zendesk` |
| `listGroups` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listGroupSLAPolicies` | Allowed For * Admins | `zendesk` |
| `listGroupUsers` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listItamAssets` | Lists all assets for all asset types. | `zendesk` |
| `listItamAssetTypeFields` | Lists all standard and custom fields for an asset type. | `zendesk` |
| `listItamAssetTypes` | Lists all asset types. | `zendesk` |
| `listItamLocations` | Lists all locations. | `zendesk` |
| `listItamStatuses` | Lists all statuses. | `zendesk` |
| `listJobStatuses` | Shows the statuses for background jobs. | `zendesk` |
| `listLocales` | Lists the translation locales available for the account. | `zendesk` |
| `listLocalesForAgent` | Lists the translation locales that have been localized for agents on a specific account. | `zendesk` |
| `listMacroActionDefinitions` | Returns the definitions of the actions a macro can perform. | `zendesk` |
| `listMacroAttachments` | Lists the attachments associated with a macro. | `zendesk` |
| `listMacroCategories` | Lists all macro categories available to the current user. | `zendesk` |
| `listMacros` | Lists all shared and personal macros available to the current user. | `zendesk` |
| `listMacrosActions` | Allowed For * Agents | `zendesk` |
| `listManyAgentsAttributeValues` | Accepts a comma-separated list of up to 100 agent ids and returns attribute values for each agent in the list. | `zendesk` |
| `listMonitoredTwitterHandles` | Allowed For * Admins * Agents | `zendesk` |
| `listOAuthClients` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listOAuthTokens` | Returns the properties of the tokens for the current user. | `zendesk` |
| `listObjectTriggers` | Lists all triggers for the specified custom object. | `zendesk` |
| `listObjectTriggersDefinitions` | Lists the conditions and actions of all triggers for the specified custom object. | `zendesk` |
| `listOpenRequests` | Lists requests with the "open" status for the authenticated end user. | `zendesk` |
| `listOrganizationFields` | Returns a list of custom organization fields in your account. | `zendesk` |
| `listOrganizationMemberships` | Returns a list of organization memberships for the account, user or organization in question. | `zendesk` |
| `listOrganizationMembershipsByOrganization` | Returns a list of organization memberships for the account, user or organization in question. | `zendesk` |
| `listOrganizationMerges` | Retrieves a list of all organization merge operations associated with a given organization. | `zendesk` |
| `listOrganizationRequests` | Returns a list of requests for a specific organization. | `zendesk` |
| `listOrganizations` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listOrganizationSubscriptions` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listOrganizationSubscriptionsByOrganization` | Returns a list of organization subscriptions for a specific organization. | `zendesk` |
| `listOrganizationTags` | Allowed For * Agents | `zendesk` |
| `listOrganizationTickets` | Returns a list of tickets for a specific organization. | `zendesk` |
| `listOrganizationUsers` | Returns a list of users for a specific organization. | `zendesk` |
| `listPermissionPolicies` | Returns a list of permission policies for a custom object. | `zendesk` |
| `listQueueDefinitions` | Returns the definitions of the queues and the definitions of the conditions under which a queue can execute. | `zendesk` |
| `listQueues` | Returns all active queues for an account. | `zendesk` |
| `listRecentTickets` | Lists up to five tickets that the requesting agent recently viewed or created in the agent interface. | `zendesk` |
| `listRemoteAuthentications` | Allowed For * Admins | `zendesk` |
| `listRequests` | Allowed for * End Users Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listResourceCollections` | Lists resource collections for the account. | `zendesk` |
| `listResourceTags` | Allowed For * Agents | `zendesk` |
| `listRoutingAttributeDefinitions` | Returns the condition definitions that can be configured to apply attributes to a ticket. | `zendesk` |
| `listSatisfactionRatingReasons` | List all reasons for an account Allowed For * Admins | `zendesk` |
| `listSatisfactionRatings` | Allowed For * Admins Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listSavedSearches` | Returns all saved searches for the requesting agent. | `zendesk` |
| `listSearchResults` | Returns the search results. | `zendesk` |
| `listSessions` | If authenticated as an admin, returns all the account's sessions. | `zendesk` |
| `listSharingAgreements` | Allowed For * Agents | `zendesk` |
| `listSkips` | Lists all skips. | `zendesk` |
| `listSLAPolicies` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `listSolvedRequests` | Lists requests with the "solved" status for the authenticated end user. | `zendesk` |
| `listSupportAddresses` | Lists all the support addresses for the account. | `zendesk` |
| `listSuspendedTickets` | Allowed For * Admins and agents in custom roles with permission to manage suspended tickets on Enterprise plans * Unrestricted agents on all other plans Sortin… | `zendesk` |
| `listTags` | Lists up to the 20,000 most popular tags in the last 60 days, in decreasing popularity. | `zendesk` |
| `listTargetFailures` | Returns the 25 most recent target failures, per target. | `zendesk` |
| `listTargets` | Allowed For * Agents | `zendesk` |
| `listTaskListTemplates` | Lists all task list templates. | `zendesk` |
| `listTicketAttributeValues` | Returns a list of attributes values for the ticket. | `zendesk` |
| `listTicketAudits` | Returns ticket audits. | `zendesk` |
| `listTicketCollaborators` | Allowed For * Agents | `zendesk` |
| `listTicketComments` | Returns the comments added to the ticket. | `zendesk` |
| `listTicketContentPins` | Lists the content pins for a specific ticket. | `zendesk` |
| `listTicketEmailCCs` | Returns any users cc'd on the ticket. | `zendesk` |
| `listTicketFieldOptions` | Returns a list of custom ticket field options for the given drop-down ticket field. | `zendesk` |
| `listTicketFields` | Returns a list of all system and custom ticket fields in your account. | `zendesk` |
| `listTicketFollowers` | Returns any users who follow the ticket. | `zendesk` |
| `listTicketForms` | Returns a list of all ticket forms for your account if accessed as an admin or agent. | `zendesk` |
| `listTicketFormStatuses` | Fetches all of the ticket form statuses for the account. | `zendesk` |
| `listTicketIncidents` | Allowed For * Agents Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listTicketMetricEvents` | Returns ticket metric events that occurred on or after the start time. | `zendesk` |
| `listTicketMetrics` | Returns a list of tickets with their metrics. | `zendesk` |
| `listTicketProblems` | The response is always ordered by `updated_at` in descending order Allowed For * Agents Pagination * Cursor pagination (recommended) * Offset pagination See Pa… | `zendesk` |
| `listTickets` | — | `zendesk` |
| `listTicketsFromView` | Allowed For * Agents Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listTicketsFullfilledByUser` | Returns a list of ticket ids that contain attributes matching the current user's attributes. | `zendesk` |
| `listTicketSkips` | Archived tickets are not included in the response. | `zendesk` |
| `listTicketSkipsByTicket` | Returns the skips for a specific ticket. | `zendesk` |
| `listTriggerActionConditionDefinitions` | Returns the definitions of the actions a ticket trigger can perform and the definitions of the conditions under which a ticket trigger can execute. | `zendesk` |
| `listTriggerCategories` | Returns all the ticket trigger categories in the account. | `zendesk` |
| `listTriggerRevisions` | List the revisions associated with a ticket trigger. | `zendesk` |
| `listTriggers` | Lists all ticket triggers for the current account. | `zendesk` |
| `listUserAssignedTickets` | Lists tickets assigned to the specified user. | `zendesk` |
| `listUserBrandAgents` | Returns a list of all brand agent memberships for a specific user. | `zendesk` |
| `listUserCCDTickets` | Lists tickets where the specified user is CC'd. | `zendesk` |
| `listUserFieldOptions` | Returns a list of custom user field options for the given dropdown user field. | `zendesk` |
| `listUserFields` | Returns a list of custom user fields in your account. | `zendesk` |
| `listUserFollowedTickets` | Lists tickets the specified user is following. | `zendesk` |
| `listUserGroupMemberships` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listUserGroups` | Returns a list of groups for the specified user. | `zendesk` |
| `listUserIdentities` | Returns a list of identities for the given user. | `zendesk` |
| `listUserOrganizationMemberships` | Returns a list of organization memberships for the account, user or organization in question. | `zendesk` |
| `listUserOrganizations` | Returns a list of organizations associated with the specified user. | `zendesk` |
| `listUserOrganizationSubscriptions` | Returns a list of organization subscriptions for a specific user. | `zendesk` |
| `listUserRequestedTickets` | — | `zendesk` |
| `listUserRequests` | Lists requests for the specified user. | `zendesk` |
| `listUsers` | Pagination * Cursor pagination (recommended) * Offset pagination See Pagination. | `zendesk` |
| `listUserSessions` | Lists all sessions for a specific user. | `zendesk` |
| `listUserTags` | Allowed For * Agents | `zendesk` |
| `listViewDefinitions` | Returns the definitions of the conditions and actions a view can perform. | `zendesk` |
| `listViews` | Lists shared and personal views available to the current user. | `zendesk` |
| `listViewsById` | Allowed For * Agents Sideloads The following sideloads are supported: \| Name \| Will sideload \| ---------------- \| ------------- \| app_installation \| The app in… | `zendesk` |
| `listWorkspaces` | Allowed For * Admins, Agents | `zendesk` |
| `logoutManyUsers` | Accepts a comma-separated list of up to 100 user ids. | `zendesk` |
| `makeEndUserIdentityPrimary` | Sets the specified identity as primary for the end user. | `zendesk` |
| `makeTicketCommentPrivate` | Allowed For * Agents | `zendesk` |
| `makeTicketCommentPrivateFromAudits` | Allowed for * Agents | `zendesk` |
| `makeUserIdentityPrimary` | Sets the specified identity as primary. | `zendesk` |
| `markManyTicketsAsSpam` | Accepts a comma-separated list of up to 100 ticket ids. | `zendesk` |
| `markTicketAsSpamAndSuspendRequester` | Allowed For * Agents | `zendesk` |
| `mergeEndUsers` | Merges the end user specified in the path parameter into the existing end user specified in the request body. | `zendesk` |
| `mergeTicketsIntoTargetTicket` | Merges one or more tickets into the ticket with the specified id. | `zendesk` |
| `openTicketInAgentBrowser` | Allows you to instruct an agent's browser to open a ticket. | `zendesk` |
| `openUsersProfileInAgentBrowser` | Allows you to instruct an agent's browser to open a user's profile. | `zendesk` |
| `organizationRelated` | Allowed For * Agents | `zendesk` |
| `permanentlyDeleteUser` | Before permanently deleting a user, you must delete the user first. | `zendesk` |
| `previewCount` | Returns the ticket count for a single preview. | `zendesk` |
| `previewViews` | You can preview views by constructing the conditions in the proper format and nesting them under the `view` property. | `zendesk` |
| `pushContentToSupport` | Pushes Channel framework content to Zendesk. | `zendesk` |
| `pushNotificationDevices` | Unregisters the mobile devices that are receiving push notifications. | `zendesk` |
| `putTagsTicket` | You can also add tags to multiple tickets with the Update Many Tickets endpoint. | `zendesk` |
| `putUserTags` | Allowed For * Agents | `zendesk` |
| `recordNewSkip` | Record a new ticket skip for the current user. | `zendesk` |
| `recoverSuspendedTicket` | **Note**: During recovery, the API sets the requester to the authenticated agent who called the API, not the original requester. | `zendesk` |
| `recoverSuspendedTickets` | Accepts up to 100 ids (the auto-generated id, not the ticket id.) Note that suspended tickets that fail to be recovered are still included in the response. | `zendesk` |
| `redactChatComment` | Permanently removes words or strings from a chat ticket's comment. | `zendesk` |
| `redactChatCommentAttachment` | Permanently removes one or more chat attachments from a chat ticket. | `zendesk` |
| `redactCommentAttachment` | Redaction allows you to permanently remove attachments from an existing comment on a ticket. | `zendesk` |
| `redactStringInComment` | Permanently removes words or strings from a ticket comment. | `zendesk` |
| `redactTicketCommentInAgentWorkspace` | Redaction allows you to permanently remove words, strings, or attachments from a ticket comment. | `zendesk` |
| `removeOrganizationTags` | Allowed For * Agents | `zendesk` |
| `renewCurrentSession` | Allowed For * Admins, Agents, End users | `zendesk` |
| `reorderCustomObjectFields` | Sets a preferred order of custom fields for a specific object by providing field ids in the desired order. | `zendesk` |
| `reorderGroupSLAPolicies` | Allowed For * Admins | `zendesk` |
| `reorderOrganizationField` | Allowed For * Admins | `zendesk` |
| `reorderQueues` | Alters the evaluation order of OCR queues in the account. | `zendesk` |
| `reorderSLAPolicies` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `reorderTicketFields` | Allowed For * Admins Request Parameters You can pass in the following parameter in the payload: \| Name \| Type \| Comment \| ------------------- \| ------ \| ------… | `zendesk` |
| `reorderTicketForms` | Allowed For * Admins Request Parameters You can pass in the following parameter in the payload: \| Name \| Type \| Comment \| ------------------- \| ------ \| ------… | `zendesk` |
| `reorderTriggers` | Alters the firing order of ticket triggers in the account. | `zendesk` |
| `reorderUserField` | Allowed For * Admins | `zendesk` |
| `reorderWorkspaces` | Allowed For * Admins | `zendesk` |
| `reportChannelbackError` | Allowed For * Admins Request parameters The POST request takes a JSON object parameter which contains information about the problematic channelback. | `zendesk` |
| `requestEndUserVerification` | Sends the end user a verification email with a link to verify ownership of the email address. | `zendesk` |
| `requestUserCreate` | Sends the owner a reminder email to update their subscription so more agents can be created. | `zendesk` |
| `requestUserVerification` | Sends the user a verification email with a link to verify ownership of the email address. | `zendesk` |
| `restoreDeletedTicket` | Allowed For * Agents | `zendesk` |
| `retrieveGroupSLAPolicyFilterDefinitionItems` | Allowed For * Admins | `zendesk` |
| `retrieveResourceCollection` | Retrieves details for a specified resource collection. | `zendesk` |
| `retrieveSLAPolicyFilterDefinitionItems` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `revokeCurrentOAuthToken` | Revokes the current OAuth token. | `zendesk` |
| `revokeOAuthToken` | Allowed for * Admins, Agents, End Users | `zendesk` |
| `searchAutomations` | Pagination * Offset pagination only See Using Offset Pagination. | `zendesk` |
| `searchCustomObjectRecords` | Returns an array of custom object records where the search query matches the values in Text Fields, Multi Line Text fields, and RegExp fields. | `zendesk` |
| `searchItamAssets` | Returns an array of assets with values in text-based fields that match the search query. | `zendesk` |
| `searchMacro` | Pagination * Offset pagination only See Using Offset Pagination. | `zendesk` |
| `searchObjectTriggers` | Returns a list of object triggers that meet your filter or search criteria. | `zendesk` |
| `searchOrganizations` | Returns an array of organizations matching the criteria. | `zendesk` |
| `searchRequests` | Examples: * `GET /api/v2/requests/search?query=printer` * `GET /api/v2/requests/search?query=printer&organization_id=1` * `GET /api/v2/requests/search?query=pr… | `zendesk` |
| `searchTriggers` | Pagination * Offset pagination only See Using Offset Pagination. | `zendesk` |
| `searchUsers` | Returns an array of users who meet the search criteria. | `zendesk` |
| `searchViews` | Pagination * Offset pagination only See Using Offset Pagination. | `zendesk` |
| `setAgentAttributeValues` | Adds the specified attributes if no attributes exists, or replaces all existing attributes with the specified attributes. | `zendesk` |
| `setOrganizationAsDefault` | Sets the default organization membership of a given user. | `zendesk` |
| `setOrganizationMembershipAsDefault` | Sets the default organization membership of a given user. | `zendesk` |
| `setOrganizationTags` | Allowed For * Agents | `zendesk` |
| `setTagsTicket` | Allowed For * Agents | `zendesk` |
| `setTicketAttributeValues` | Adds the specified attributes if no attributes exists, or replaces all existing attributes with the specified attributes. | `zendesk` |
| `setUserPassword` | An admin can set a user's password only if the setting is enabled in Zendesk Support under **Settings** > **Security** > **Global**. | `zendesk` |
| `setUserTags` | Allowed For * Agents | `zendesk` |
| `showAccessRule` | Returns a specific access rule for a custom object. | `zendesk` |
| `showAccountSettings` | Shows the settings that are available for the account. | `zendesk` |
| `showActivity` | Lists a specific activity. | `zendesk` |
| `showAttachment` | Shows attachment details. | `zendesk` |
| `showAttribute` | Returns an attribute. | `zendesk` |
| `showAttributeValue` | Returns an attribute value. | `zendesk` |
| `showAuditLog` | Allowed For * Admins on accounts that have audit-log access | `zendesk` |
| `showAutomation` | Allowed For * Agents | `zendesk` |
| `showBrand` | Returns a brand for your account. | `zendesk` |
| `showBrandAgentById` | Returns a brand agent membership for your account. | `zendesk` |
| `showChangesToTicket` | Returns the changes the macro would make to a ticket. | `zendesk` |
| `showClient` | Allowed for * Admins | `zendesk` |
| `showComment` | Allowed For * End Users | `zendesk` |
| `showCurrentLocale` | This works like Show Locale, but instead of taking a locale id as an argument, it renders the locale of the user performing the request. | `zendesk` |
| `showCurrentlyAuthenticatedSession` | Allowed For * Admins, Agents, End users | `zendesk` |
| `showCurrentToken` | Returns the properties of the current token. | `zendesk` |
| `showCurrentUser` | The endpoint returns user information and an `authenticity_token`. | `zendesk` |
| `showCurrentUserSettings` | Returns the settings for the currently authenticated user. | `zendesk` |
| `showCustomObject` | Returns an object with the specified key Allowed For * Agents | `zendesk` |
| `showCustomObjectField` | Returns a custom field for a specific object using a provided key or id of the field. | `zendesk` |
| `showCustomObjectRecord` | Returns a custom record for a specific object using a provided id. | `zendesk` |
| `showCustomRoleById` | Availability * Accounts on the Enterprise plan or above Allowed for * Administrators * Agents with the `manage_roles` permission | `zendesk` |
| `showCustomStatus` | Returns the custom ticket status object. | `zendesk` |
| `showDeletedUser` | Returns users that have been deleted but not permanently yet. | `zendesk` |
| `showDerivedMacro` | Returns an unpersisted macro representation derived from a ticket or macro. | `zendesk` |
| `showDynamicContentItem` | Allowed For * Admins, Agents | `zendesk` |
| `showDynamicContentVariant` | Allowed For * Admins, Agents | `zendesk` |
| `showEmailNotification` | Shows details on an email notification. | `zendesk` |
| `showEndUserIdentity` | Shows the identity with the given id for a given end user. | `zendesk` |
| `showGlobalClient` | Returns the global OAuth client associated with the ID sent on the request. | `zendesk` |
| `showGroupById` | Allowed For * Admins * Agents | `zendesk` |
| `showGroupMembershipById` | The 'id' is the group membership id, not a group id. | `zendesk` |
| `showGroupSLAPolicy` | Allowed For * Admins | `zendesk` |
| `showItamAsset` | Returns the asset with the specified id. | `zendesk` |
| `showItamAssetType` | Returns an asset type with the specified id. | `zendesk` |
| `showItamAssetTypeField` | Returns an asset field with the specified id. | `zendesk` |
| `showItamLocation` | Returns the location with the specified id. | `zendesk` |
| `showItamStatus` | Returns the status with the specified id. | `zendesk` |
| `showJobStatus` | Shows the status of a background job. | `zendesk` |
| `showLocaleById` | Allowed For * Anyone | `zendesk` |
| `showMacro` | Allowed For * Agents | `zendesk` |
| `showMacroAttachment` | Shows the properties of the specified macro attachment. | `zendesk` |
| `showManyDynamicContents` | Stability * Development Allowed For * Admins, Agents | `zendesk` |
| `showManyEmailNotifications` | Shows details of many email notifications. | `zendesk` |
| `showManyJobStatuses` | Accepts a comma-separated list of job status ids. | `zendesk` |
| `showManyOrganizations` | Accepts a comma-separated list of up to 100 organization ids or external ids. | `zendesk` |
| `showManyTicketFields` | Returns multiple ticket fields in a single request. | `zendesk` |
| `showManyTicketForms` | Takes an `ids` query parameter that accepts a comma-separated list of up to 100 ticket form ids. | `zendesk` |
| `showManyTicketFormStatuses` | Fetches all of the ticket form statuses specified by a comma separated list of ids. | `zendesk` |
| `showManyUserFields` | Returns multiple user fields by their keys. | `zendesk` |
| `showManyUsers` | Accepts a comma-separated list of up to 100 user ids or external ids. | `zendesk` |
| `showMonitoredTwitterHandle` | Allowed For * Admins * Agents | `zendesk` |
| `showOrganization` | Allowed For * Admins * Agents | `zendesk` |
| `showOrganizationField` | Allowed for * Agents | `zendesk` |
| `showOrganizationMembershipById` | Allowed for * Agents | `zendesk` |
| `showOrganizationMembershipByUserId` | Allowed for * Agents | `zendesk` |
| `showOrganizationMerge` | Retrieves the details of a specific organization merge operation. | `zendesk` |
| `showOrganizationSubscription` | Allowed For: * Agents * End users For end users, the response will only list the subscriptions created by the requesting end user. | `zendesk` |
| `showPermissionPolicy` | Returns a permission policy for a specific role on a custom object. | `zendesk` |
| `showQueueById` | Returns a queue for the given queue id. | `zendesk` |
| `showRequest` | Sideloads The following sideloads are supported: \| Name \| Will sideload \| ---------------- \| ------------- \| users \| The email ccs for a request by side-loadin… | `zendesk` |
| `showSatisfactionRating` | Returns a specific satisfaction rating. | `zendesk` |
| `showSatisfactionRatings` | Allowed For * Admins | `zendesk` |
| `showSecuritySettings` | Allowed For * Admins | `zendesk` |
| `showSession` | Allowed For * Admins, Agents, End users | `zendesk` |
| `showSharingAgreement` | Returns a sharing agreement for your account. | `zendesk` |
| `showSLAPolicy` | Availability * Accounts on the Support Professional or Suite Growth plan or above Allowed For * Admins | `zendesk` |
| `showSupportAddress` | Allowed For * Admins * Agents | `zendesk` |
| `showSuspendedTickets` | Allowed For * Admins and agents in custom roles with permission to manage suspended tickets on Enterprise plans * Unrestricted agents on all other plans | `zendesk` |
| `showTarget` | Allowed For * Agents | `zendesk` |
| `showTargetFailure` | Stability * Development Allowed For * Admins | `zendesk` |
| `showTaskList` | Returns the task list attached to the specified ticket. | `zendesk` |
| `showTaskListTemplate` | Returns the task list template with the specified id. | `zendesk` |
| `showTicket` | Returns a number of ticket properties, but doesn't include the full comment thread. | `zendesk` |
| `showTicketAfterChanges` | Returns the full ticket object as it would be after applying the macro to the ticket. | `zendesk` |
| `showTicketAudit` | Allowed for * Agents | `zendesk` |
| `showTicketByMessagingConversationId` | Returns the active ticket associated with the given Sunshine Conversations conversation id. | `zendesk` |
| `showTicketfield` | Allowed for * Agents Sideloads The following sideloads are supported: \| Name \| Will sideload \| ---------------- \| ------------- \| users \| The user or users tha… | `zendesk` |
| `showTicketFieldOption` | Allowed for * Agents | `zendesk` |
| `showTicketForm` | Allowed For * Admins, Agents, and End Users | `zendesk` |
| `showTicketMetrics` | Returns a specific metric, or the metrics of a specific ticket. | `zendesk` |
| `showTicketMetricsByTicket` | Returns the metrics for a specific ticket. | `zendesk` |
| `showToken` | Returns the properties of the specified token. | `zendesk` |
| `showTriggerCategoryById` | Returns the ticket trigger category with the specified ID. | `zendesk` |
| `showUser` | Allowed For * Agents | `zendesk` |
| `showUserBrandAgentById` | Returns a specific brand agent membership for a user. | `zendesk` |
| `showUserComplianceDeletionStatuses` | Returns the GDPR status for each user per area of compliance. | `zendesk` |
| `showUserField` | Allowed for * Agents | `zendesk` |
| `showUserFieldOption` | Allowed for * Agents | `zendesk` |
| `showUserGroupMembershipById` | Returns a specific group membership for a user. | `zendesk` |
| `showUserIdentity` | Shows the identity with the given id for a given user. | `zendesk` |
| `showUserRelated` | — | `zendesk` |
| `showView` | Allowed For * Agents | `zendesk` |
| `showWorkspace` | Allowed For * Admins | `zendesk` |
| `suspendedTicketsAttachments` | Makes copies of any attachments on a suspended ticket and returns them as attachment tokens. | `zendesk` |
| `ticketBulkImport` | Accepts an array of up to 100 ticket objects. | `zendesk` |
| `ticketFormTicketFormStatuses` | Fetches all of the associated ticket form statuses of a ticket form. | `zendesk` |
| `ticketImport` | Allowed For * Admins | `zendesk` |
| `ticketRelatedInformation` | The request returns a data object with the following properties: \| Name \| Type \| Comment \| ------------------- \| ------- \| ------- \| topic_id \| string \| Relate… | `zendesk` |
| `ticketsCreateMany` | Accepts an array of up to 100 ticket objects. | `zendesk` |
| `ticketsShowMany` | Accepts a comma-separated list of ticket ids to return. | `zendesk` |
| `ticketsUpdateMany` | Accepts an array of up to 100 ticket objects, or a comma-separated list of up to 100 ticket ids. | `zendesk` |
| `triggerRevision` | Fetches a revision associated with a ticket trigger. | `zendesk` |
| `unassignOrganization` | Immediately removes a user from an organization and schedules a job to unassign all working tickets currently assigned to the user and organization combination. | `zendesk` |
| `updateAccessRule` | Updates an existing access rule for a custom object. | `zendesk` |
| `updateAccountEmailSettings` | Updates email settings for the account. | `zendesk` |
| `updateAccountSettings` | Updates settings for the account. | `zendesk` |
| `updateAttachment` | Toggles enabling or restricting agent access to attachments with detected malware. | `zendesk` |
| `updateAttribute` | Updates an attribute. | `zendesk` |
| `updateAttributeValue` | Updates the name and ticket conditions of a skill. | `zendesk` |
| `updateAutomation` | Updates an automation. | `zendesk` |
| `updateBrand` | Returns an updated brand. | `zendesk` |
| `updateBrandLogo` | Sets or replaces the logo on a brand using a multipart file upload. | `zendesk` |
| `updateClient` | Allowed for * Admins | `zendesk` |
| `updateCurrentUserSettings` | Updates the settings for the currently authenticated user. | `zendesk` |
| `updateCustomObject` | Updates an individual custom object. | `zendesk` |
| `updateCustomObjectField` | Updates individual custom object fields. | `zendesk` |
| `updateCustomObjectRecord` | Updates an individual custom object record. | `zendesk` |
| `updateCustomObjectRecordAttachment` | Updates malware access settings for the specified attachment. | `zendesk` |
| `updateCustomRoleById` | Availability * Accounts on the Enterprise plan or above Allowed for * Administrators Agents with the `manage_roles` permission | `zendesk` |
| `updateCustomStatus` | Takes a `custom_status` object that specifies the properties to update. | `zendesk` |
| `updateDeletionSchedule` | Updates a deletion schedule by its id. | `zendesk` |
| `updateDynamicContentItem` | The only attribute you can change is the name. | `zendesk` |
| `updateDynamicContentVariant` | Updates the specified variant. | `zendesk` |
| `updateGroup` | Allowed For * Admins | `zendesk` |
| `updateGroupSLAPolicy` | Updates the specified policy. | `zendesk` |
| `updateItamAsset` | Updates an individual asset. | `zendesk` |
| `updateItamAssetType` | Updates an existing asset type. | `zendesk` |
| `updateItamAssetTypeField` | Updates an existing asset field with the specified id. | `zendesk` |
| `updateItamLocation` | Updates an existing location. | `zendesk` |
| `updateMacro` | Allowed For * Agents | `zendesk` |
| `updateManyAutomations` | **Note**: You might be restricted from updating some default automations. | `zendesk` |
| `updateManyDynamicContentVariants` | Updates one or more variants. | `zendesk` |
| `updateManyMacros` | Updates the provided macros with the specified changes. | `zendesk` |
| `updateManyObjectTriggers` | Updates the position or the active status of multiple object triggers. | `zendesk` |
| `updateManyOrganizations` | Bulk or batch updates up to 100 organizations. | `zendesk` |
| `updateManyTriggers` | Updates the position or the active status of multiple ticket triggers. | `zendesk` |
| `updateManyUsers` | — | `zendesk` |
| `updateManyViews` | Allowed For * Agents Request Parameters The PUT request expects a `views` object that lists the views to update. | `zendesk` |
| `updateObjectTrigger` | Updates a specified object trigger. | `zendesk` |
| `updateOrganization` | Allowed For * Admins * Agents Agents with no permissions restrictions can only update "notes" on organizations. | `zendesk` |
| `updateOrganizationField` | Updating a Dropdown (Tagger) or Multiselect Field Dropdown and multiselect fields return an array of `custom_field_options` which specify the name, value, and… | `zendesk` |
| `updatePermissionPolicy` | Updates a permission policy for a specific role on a custom object. | `zendesk` |
| `updateQueue` | Updates the queue definition for a given queue id. | `zendesk` |
| `updateRequest` | Updates a request with a comment or collaborators (cc's). | `zendesk` |
| `updateResourceCollection` | Updates a resource collection using a provided `payload` object. | `zendesk` |
| `updateSavedSearch` | Updates the name, type, and query of the saved search with the specified id for the requesting agent. | `zendesk` |
| `updateSharingAgreement` | Returns an updated sharing agreement. | `zendesk` |
| `updateSLAPolicy` | Updates the specified policy. | `zendesk` |
| `updateSupportAddress` | Updates an existing support address for your account. | `zendesk` |
| `updateTarget` | Allowed For * Admins | `zendesk` |
| `updateTaskListTemplate` | Creates, modifies, or deletes tasks in a task list template. | `zendesk` |
| `updateTicket` | — | `zendesk` |
| `updateTicketField` | Updating drop-down field options You can also use the update endpoint to add, update, or remove options in a drop-down custom field. | `zendesk` |
| `updateTicketForm` | Allowed For * Admins | `zendesk` |
| `updateTicketFormStatusById` | Updates or deletes ticket form status association by id. | `zendesk` |
| `updateTicketFormStatuses` | Updates or deletes ticket form status associations. | `zendesk` |
| `updateTrigger` | Allowed For * Agents Note Updating a condition or action updates both the conditions and actions arrays, clearing all existing values of both arrays. | `zendesk` |
| `updateTriggerCategory` | Updates the ticket trigger category with the specified ID. | `zendesk` |
| `updateUser` | — | `zendesk` |
| `updateUserField` | Updating a Dropdown (Tagger) or Multiselect Field Dropdown and multiselect fields return an array of `custom_field_options` which specify the name, value, and… | `zendesk` |
| `updateUserIdentity` | This endpoint allows you to: * Set the specified identity as verified (by setting `verified` to "true" or `verification_method` to "low") * Unverify a verified… | `zendesk` |
| `updateView` | Allowed For * Agents JSON Format The PUT request takes one property, a `view` object that lists the values to update. | `zendesk` |
| `updateWorkspace` | Allowed For * Admins | `zendesk` |
| `uploadFiles` | Uploads a file that can be attached to a ticket comment. | `zendesk` |
| `upsertCustomObjectRecordByExternalIdOrName` | Creates or updates a custom object record based on the provided external id or name. | `zendesk` |
| `validateToken` | Allowed For * Admins Request parameters The POST request takes a JSON object parameter which contains the token to be validated. | `zendesk` |
| `verifySubdomainAvailability` | Zendesk Support credentials are not required to access this endpoint. | `zendesk` |
| `verifySupportAddressForwarding` | Sends a test email to the specified support address to verify that email forwarding for the address works. | `zendesk` |
| `verifyUserIdentity` | Sets the specified identity as verified. | `zendesk` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'zendesk',
  package: '@pikku/addon-zendesk',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
