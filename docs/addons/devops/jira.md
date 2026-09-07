---
format: md
title: Jira
description: "Jira integration for Pikku"
sidebar_label: Jira
---

# Jira

Jira integration for Pikku

```bash
npm install @pikku/addon-jira
```

Category: **DevOps** · Version: `0.0.7` · Package: `@pikku/addon-jira`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `addActorUsers` | Adds actors to a project role for the project. | `jira` |
| `addAttachment` | Adds one or more attachments to an issue. | `jira` |
| `addComment` | Adds a comment to an issue. | `jira` |
| `addFieldToDefaultScreen` | Adds a field to the default tab of the default screen. | `jira` |
| `addGadget` | Adds a gadget to a dashboard. | `jira` |
| `addIssueTypesToContext` | Adds issue types to a custom field context, appending the issue types to the issue types list. | `jira` |
| `addIssueTypesToIssueTypeScheme` | Adds issue types to an issue type scheme. | `jira` |
| `addNotifications` | Adds notifications to a notification scheme. | `jira` |
| `addonPropertiesResourceDeleteAddonPropertyDelete` | Deletes an app's property. | `jira` |
| `addonPropertiesResourceGetAddonPropertiesGet` | Gets all the properties of an app. | `jira` |
| `addonPropertiesResourceGetAddonPropertyGet` | Returns the key and value of an app's property. | `jira` |
| `addonPropertiesResourcePutAddonPropertyPut` | Sets the value of an app's property. | `jira` |
| `addProjectRoleActorsToRole` | Adds default actors to a role. | `jira` |
| `addScreenTab` | Creates a tab for a screen. | `jira` |
| `addScreenTabField` | Adds a field to a screen tab. | `jira` |
| `addSharePermission` | Add a share permissions to a filter. | `jira` |
| `addUserToGroup` | Adds a user to a group. | `jira` |
| `addVote` | Adds the user's vote to an issue. | `jira` |
| `addWatcher` | Adds a user as a watcher of an issue by passing the account ID of the user. | `jira` |
| `addWorklog` | Adds a worklog to an issue. | `jira` |
| `analyseExpression` | Analyses and validates Jira expressions. | `jira` |
| `appendMappingsForIssueTypeScreenScheme` | Appends issue type to screen scheme mappings to an issue type screen scheme. | `jira` |
| `appIssueFieldValueUpdateResourceUpdateIssueFieldsPut` | Updates the value of a custom field added by Connect apps on one or more issues. | `jira` |
| `archiveProject` | Archives a project. | `jira` |
| `assignFieldConfigurationSchemeToProject` | Assigns a field configuration scheme to a project. | `jira` |
| `assignIssue` | Assigns an issue to a user. | `jira` |
| `assignIssueTypeSchemeToProject` | Assigns an issue type scheme to a project. | `jira` |
| `assignIssueTypeScreenSchemeToProject` | Assigns an issue type screen scheme to a project. | `jira` |
| `assignPermissionScheme` | Assigns a permission scheme with a project. | `jira` |
| `assignProjectsToCustomFieldContext` | Assigns a custom field context to projects. | `jira` |
| `assignSchemeToProject` | Assigns a workflow scheme to a project. | `jira` |
| `bulkDeleteIssueProperty` | Deletes a property value from multiple issues. | `jira` |
| `bulkGetGroups` | Returns a paginated list of groups. | `jira` |
| `bulkGetUsers` | Returns a paginated list of the users specified by one or more account IDs. | `jira` |
| `bulkGetUsersMigration` | Returns the account IDs for the users specified in the `key` or `username` parameters. | `jira` |
| `bulkSetIssuePropertiesByIssue` | Sets or updates entity property values on issues. | `jira` |
| `bulkSetIssueProperty` | Sets a property value on multiple issues. | `jira` |
| `bulkSetIssuesPropertiesList` | Sets or updates a list of entity property values on issues. | `jira` |
| `cancelTask` | Cancels a task. | `jira` |
| `changeFilterOwner` | Changes the owner of the filter. | `jira` |
| `copyDashboard` | Copies a dashboard. | `jira` |
| `createComponent` | Creates a component. | `jira` |
| `createCustomField` | Creates a custom field. | `jira` |
| `createCustomFieldContext` | Creates a custom field context. | `jira` |
| `createCustomFieldOption` | Creates options and, where the custom select field is of the type Select List (cascading), cascading options for a custom select field. | `jira` |
| `createDashboard` | Creates a dashboard. | `jira` |
| `createFieldConfiguration` | Creates a field configuration. | `jira` |
| `createFieldConfigurationScheme` | Creates a field configuration scheme. | `jira` |
| `createFilter` | Creates a filter. | `jira` |
| `createGroup` | Creates a group. | `jira` |
| `createIssue` | Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. | `jira` |
| `createIssueFieldOption` | Creates an option for a select list issue field. | `jira` |
| `createIssueLinkType` | Creates an issue link type. | `jira` |
| `createIssues` | Creates upto **50** issues and, where the option to create subtasks is enabled in Jira, subtasks. | `jira` |
| `createIssueType` | Creates an issue type and adds it to the default issue type scheme. | `jira` |
| `createIssueTypeAvatar` | Loads an avatar for the issue type. | `jira` |
| `createIssueTypeScheme` | Creates an issue type scheme. | `jira` |
| `createIssueTypeScreenScheme` | Creates an issue type screen scheme. | `jira` |
| `createNotificationScheme` | Creates a notification scheme with notifications. | `jira` |
| `createOrUpdateRemoteIssueLink` | Creates or updates a remote issue link for an issue. | `jira` |
| `createPermissionGrant` | Creates a permission grant in a permission scheme. | `jira` |
| `createPermissionScheme` | Creates a new permission scheme. | `jira` |
| `createPriority` | Creates an issue priority. | `jira` |
| `createProject` | Creates a project based on a project type template, as shown in the following table: \| Project Type Key \| Project Template Key \| \|--\|--\| \| `business` \| `com.at… | `jira` |
| `createProjectAvatar` | Loads an avatar for a project. | `jira` |
| `createProjectCategory` | Creates a project category. | `jira` |
| `createProjectRole` | Creates a new project role with no default actors. | `jira` |
| `createResolution` | Creates an issue resolution. | `jira` |
| `createScreen` | Creates a screen with a default field tab. | `jira` |
| `createScreenScheme` | Creates a screen scheme. | `jira` |
| `createStatuses` | Creates statuses for a global or project scope. | `jira` |
| `createUiModification` | Creates a UI modification. | `jira` |
| `createUser` | Creates a user. | `jira` |
| `createVersion` | Creates a project version. | `jira` |
| `createWorkflow` | Creates a workflow. | `jira` |
| `createWorkflowScheme` | Creates a workflow scheme. | `jira` |
| `createWorkflowSchemeDraftFromParent` | Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. | `jira` |
| `createWorkflowTransitionProperty` | Adds a property to a workflow transition. | `jira` |
| `deleteActor` | Deletes actors from a project role for the project. | `jira` |
| `deleteAndReplaceVersion` | Deletes a project version. | `jira` |
| `deleteAvatar` | Deletes an avatar from a project or issue type. | `jira` |
| `deleteComment` | Deletes a comment. | `jira` |
| `deleteCommentProperty` | Deletes a comment property. | `jira` |
| `deleteComponent` | Deletes a component. | `jira` |
| `deleteCustomField` | Deletes a custom field. | `jira` |
| `deleteCustomFieldContext` | Deletes a custom field context. | `jira` |
| `deleteCustomFieldOption` | Deletes a custom field option. | `jira` |
| `deleteDashboard` | Deletes a dashboard. | `jira` |
| `deleteDashboardItemProperty` | Deletes a dashboard item property. | `jira` |
| `deleteDefaultWorkflow` | Resets the default workflow for a workflow scheme. | `jira` |
| `deleteDraftDefaultWorkflow` | Resets the default workflow for a workflow scheme's draft. | `jira` |
| `deleteDraftWorkflowMapping` | Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft. | `jira` |
| `deleteFavouriteForFilter` | Removes a filter as a favorite for the user. | `jira` |
| `deleteFieldConfiguration` | Deletes a field configuration. | `jira` |
| `deleteFieldConfigurationScheme` | Deletes a field configuration scheme. | `jira` |
| `deleteFilter` | Delete a filter. | `jira` |
| `deleteInactiveWorkflow` | Deletes a workflow. | `jira` |
| `deleteIssue` | Deletes an issue. | `jira` |
| `deleteIssueFieldOption` | Deletes an option from a select list issue field. | `jira` |
| `deleteIssueLink` | Deletes an issue link. | `jira` |
| `deleteIssueLinkType` | Deletes an issue link type. | `jira` |
| `deleteIssueProperty` | Deletes an issue's property. | `jira` |
| `deleteIssueType` | Deletes the issue type. | `jira` |
| `deleteIssueTypeProperty` | Deletes the issue type property. | `jira` |
| `deleteIssueTypeScheme` | Deletes an issue type scheme. | `jira` |
| `deleteIssueTypeScreenScheme` | Deletes an issue type screen scheme. | `jira` |
| `deleteNotificationScheme` | Deletes a notification scheme. | `jira` |
| `deletePermissionScheme` | Deletes a permission scheme. | `jira` |
| `deletePermissionSchemeEntity` | Deletes a permission grant from a permission scheme. | `jira` |
| `deletePriority` | Deletes an issue priority. | `jira` |
| `deleteProject` | Deletes a project. | `jira` |
| `deleteProjectAsynchronously` | Deletes a project asynchronously. | `jira` |
| `deleteProjectAvatar` | Deletes a custom avatar from a project. | `jira` |
| `deleteProjectProperty` | Deletes the property from a project. | `jira` |
| `deleteProjectRole` | Deletes a project role. | `jira` |
| `deleteProjectRoleActorsFromRole` | Deletes the default actors from a project role. | `jira` |
| `deleteRemoteIssueLinkByGlobalId` | Deletes the remote issue link from the issue using the link's global ID. | `jira` |
| `deleteRemoteIssueLinkById` | Deletes a remote issue link from an issue. | `jira` |
| `deleteResolution` | Deletes an issue resolution. | `jira` |
| `deleteScreen` | Deletes a screen. | `jira` |
| `deleteScreenScheme` | Deletes a screen scheme. | `jira` |
| `deleteScreenTab` | Deletes a screen tab. | `jira` |
| `deleteSharePermission` | Deletes a share permission from a filter. | `jira` |
| `deleteStatusesById` | Deletes statuses by ID. | `jira` |
| `deleteUiModification` | Deletes a UI modification. | `jira` |
| `deleteUserProperty` | Deletes a property from a user. | `jira` |
| `deleteWebhookById` | Removes webhooks by ID. | `jira` |
| `deleteWorkflowMapping` | Deletes the workflow-issue type mapping for a workflow in a workflow scheme. | `jira` |
| `deleteWorkflowScheme` | Deletes a workflow scheme. | `jira` |
| `deleteWorkflowSchemeDraft` | Deletes a draft workflow scheme. | `jira` |
| `deleteWorkflowSchemeDraftIssueType` | Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft. | `jira` |
| `deleteWorkflowSchemeIssueType` | Deletes the issue type-workflow mapping for an issue type in a workflow scheme. | `jira` |
| `deleteWorkflowTransitionProperty` | Deletes a property from a workflow transition. | `jira` |
| `deleteWorkflowTransitionRuleConfigurations` | Deletes workflow transition rules from one or more workflows. | `jira` |
| `deleteWorklog` | Deletes a worklog from an issue. | `jira` |
| `deleteWorklogProperty` | Deletes a worklog property. | `jira` |
| `doTransition` | Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. | `jira` |
| `dynamicModulesResourceGetModulesGet` | Returns all modules registered dynamically by the calling app. | `jira` |
| `dynamicModulesResourceRegisterModulesPost` | Registers a list of modules. | `jira` |
| `dynamicModulesResourceRemoveModulesDelete` | Remove all or a list of modules registered by the calling app. | `jira` |
| `editIssue` | Edits an issue. | `jira` |
| `evaluateJiraExpression` | Evaluates a Jira expression and returns its value. | `jira` |
| `expandAttachmentForHumans` | Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. | `jira` |
| `expandAttachmentForMachines` | Returns the metadata for the contents of an attachment, if it is an archive. | `jira` |
| `findAssignableUsers` | Returns a list of users that can be assigned to an issue. | `jira` |
| `findBulkAssignableUsers` | Returns a list of users who can be assigned issues in one or more projects. | `jira` |
| `findGroups` | Returns a list of groups whose names contain a query string. | `jira` |
| `findUserKeysByQuery` | Finds users with a structured query and returns a paginated list of user keys. | `jira` |
| `findUsers` | Returns a list of users that match the search string and property. | `jira` |
| `findUsersAndGroups` | Returns a list of users and groups matching a string. | `jira` |
| `findUsersByQuery` | Finds users with a structured query and returns a paginated list of user details. | `jira` |
| `findUsersForPicker` | Returns a list of users whose attributes match the query term. | `jira` |
| `findUsersWithAllPermissions` | Returns a list of users who fulfill these criteria: * their user attributes match a search string. | `jira` |
| `findUsersWithBrowsePermission` | Returns a list of users who fulfill these criteria: * their user attributes match a search string. | `jira` |
| `fullyUpdateProjectRole` | Updates the project role's name and description. | `jira` |
| `getAccessibleProjectTypeByKey` | Returns a project type if it is accessible to the user. | `jira` |
| `getAdvancedSettings` | Returns the application properties that are accessible on the *Advanced Settings* page. | `jira` |
| `getAllAccessibleProjectTypes` | Returns all project types with a valid license. | `jira` |
| `getAllApplicationRoles` | Returns all application roles. | `jira` |
| `getAllAvailableDashboardGadgets` | Gets a list of all available gadgets that can be added to all dashboards. | `jira` |
| `getAllDashboards` | Returns a list of dashboards owned by or shared with the user. | `jira` |
| `getAllFieldConfigurations` | Returns a paginated list of field configurations. | `jira` |
| `getAllFieldConfigurationSchemes` | Returns a paginated list of field configuration schemes. | `jira` |
| `getAllGadgets` | Returns a list of dashboard gadgets on a dashboard. | `jira` |
| `getAllIssueFieldOptions` | Returns a paginated list of all the options of a select list issue field. | `jira` |
| `getAllIssueTypeSchemes` | Returns a paginated list of issue type schemes. | `jira` |
| `getAllLabels` | Returns a paginated list of labels. | `jira` |
| `getAllPermissions` | Returns all permissions, including: * global permissions. | `jira` |
| `getAllPermissionSchemes` | Returns all permission schemes. | `jira` |
| `getAllProjectAvatars` | Returns all project avatars, grouped by system and custom avatars. | `jira` |
| `getAllProjectCategories` | Returns all project categories. | `jira` |
| `getAllProjectRoles` | Gets a list of all project roles, complete with project role details and default actors. | `jira` |
| `getAllProjectTypes` | Returns all project types, whether or not the instance has a valid license for each type. | `jira` |
| `getAllScreenTabFields` | Returns all fields for a screen tab. | `jira` |
| `getAllScreenTabs` | Returns the list of tabs for a screen. | `jira` |
| `getAllStatuses` | Returns the valid statuses for a project. | `jira` |
| `getAllSystemAvatars` | Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user. | `jira` |
| `getAllUsers` | Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account. | `jira` |
| `getAllUsersDefault` | Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account. | `jira` |
| `getAllWorkflowSchemes` | Returns a paginated list of all workflow schemes, not including draft workflow schemes. | `jira` |
| `getAlternativeIssueTypes` | Returns a list of issue types that can be used to replace the issue type. | `jira` |
| `getApplicationProperty` | Returns all application properties or an application property. | `jira` |
| `getApplicationRole` | Returns an application role. | `jira` |
| `getApproximateApplicationLicenseCount` | Returns the total approximate user account for a specific `jira licence application key`. | `jira` |
| `getApproximateLicenseCount` | Returns the total approximate user account across all jira licenced application keys. | `jira` |
| `getAssignedPermissionScheme` | Gets the permission scheme associated with the project. | `jira` |
| `getAttachment` | Returns the metadata for an attachment. | `jira` |
| `getAttachmentContent` | Returns the contents of an attachment. | `jira` |
| `getAttachmentMeta` | Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed. | `jira` |
| `getAttachmentThumbnail` | Returns the thumbnail of an attachment. | `jira` |
| `getAuditRecords` | Returns a list of audit records. | `jira` |
| `getAutoComplete` | Returns reference data for JQL searches. | `jira` |
| `getAutoCompletePost` | Returns reference data for JQL searches. | `jira` |
| `getAvailableScreenFields` | Returns the fields that can be added to a tab on a screen. | `jira` |
| `getAvailableTimeTrackingImplementations` | Returns all time tracking providers. | `jira` |
| `getAvatarImageByID` | Returns a project or issue type avatar image by ID. | `jira` |
| `getAvatarImageByOwner` | Returns the avatar image for a project or issue type. | `jira` |
| `getAvatarImageByType` | Returns the default project or issue type avatar image. | `jira` |
| `getAvatars` | Returns the system and custom avatars for a project or issue type. | `jira` |
| `getBanner` | Returns the current announcement banner configuration. | `jira` |
| `getBulkPermissions` | Returns: * for a list of global permissions, the global permissions granted to a user. | `jira` |
| `getChangeLogs` | Returns a paginated list of all changelogs for an issue sorted by date, starting from the oldest. | `jira` |
| `getChangeLogsByIds` | Returns changelogs for an issue specified by a list of changelog IDs. | `jira` |
| `getColumns` | Returns the columns configured for a filter. | `jira` |
| `getComment` | Returns a comment. | `jira` |
| `getCommentProperty` | Returns the value of a comment property. | `jira` |
| `getCommentPropertyKeys` | Returns the keys of all the properties of a comment. | `jira` |
| `getComments` | Returns all comments for an issue. | `jira` |
| `getCommentsByIds` | Returns a paginated list of comments specified by a list of comment IDs. | `jira` |
| `getComponent` | Returns a component. | `jira` |
| `getComponentRelatedIssues` | Returns the counts of issues assigned to the component. | `jira` |
| `getConfiguration` | Returns the global settings in Jira. | `jira` |
| `getContextsForField` | Returns a paginated list of contexts for a custom field. | `jira` |
| `getCreateIssueMeta` | Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. | `jira` |
| `getCurrentUser` | Returns details for the current user. | `jira` |
| `getCustomFieldConfiguration` | Returns a paginated list of configurations for a custom field created by a Forge app. | `jira` |
| `getCustomFieldContextsForProjectsAndIssueTypes` | Returns a paginated list of project and issue type mappings and, for each mapping, the ID of a custom field context that applies to the project and issue type. | `jira` |
| `getCustomFieldOption` | Returns a custom field option. | `jira` |
| `getDashboard` | Returns a dashboard. | `jira` |
| `getDashboardItemProperty` | Returns the key and value of a dashboard item property. | `jira` |
| `getDashboardItemPropertyKeys` | Returns the keys of all properties for a dashboard item. | `jira` |
| `getDashboardsPaginated` | Returns a paginated list of dashboards. | `jira` |
| `getDefaultShareScope` | Returns the default sharing settings for new filters and dashboards for a user. | `jira` |
| `getDefaultValues` | Returns a paginated list of defaults for a custom field. | `jira` |
| `getDefaultWorkflow` | Returns the default workflow for a workflow scheme. | `jira` |
| `getDraftDefaultWorkflow` | Returns the default workflow for a workflow scheme's draft. | `jira` |
| `getDraftWorkflow` | Returns the workflow-issue type mappings for a workflow scheme's draft. | `jira` |
| `getDynamicWebhooksForApp` | Returns a paginated list of the webhooks registered by the calling app. | `jira` |
| `getEditIssueMeta` | Returns the edit screen fields for an issue that are visible to and editable by the user. | `jira` |
| `getEvents` | Returns all issue events. | `jira` |
| `getFailedWebhooks` | Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries. | `jira` |
| `getFavouriteFilters` | Returns the visible favorite filters of the user. | `jira` |
| `getFeaturesForProject` | Returns the list of features for a project. | `jira` |
| `getFieldAutoCompleteForQueryString` | Returns the JQL search auto complete suggestions for a field. | `jira` |
| `getFieldConfigurationItems` | Returns a paginated list of all fields for a configuration. | `jira` |
| `getFieldConfigurationSchemeMappings` | Returns a paginated list of field configuration issue type items. | `jira` |
| `getFieldConfigurationSchemeProjectMapping` | Returns a paginated list of field configuration schemes and, for each scheme, a list of the projects that use it. | `jira` |
| `getFields` | Returns system and custom issue fields according to the following rules: * Fields that cannot be added to the issue navigator are always returned. | `jira` |
| `getFieldsPaginated` | Returns a paginated list of fields for Classic Jira projects. | `jira` |
| `getFilter` | Returns a filter. | `jira` |
| `getFiltersPaginated` | Returns a paginated list of filters. | `jira` |
| `getIdsOfWorklogsDeletedSince` | Returns a list of IDs and delete timestamps for worklogs deleted after a date and time. | `jira` |
| `getIdsOfWorklogsModifiedSince` | Returns a list of IDs and update timestamps for worklogs updated after a date and time. | `jira` |
| `getIssue` | Returns the details for an issue. | `jira` |
| `getIssueAllTypes` | Returns all issue types. | `jira` |
| `getIssueFieldOption` | Returns an option from a select list issue field. | `jira` |
| `getIssueLink` | Returns an issue link. | `jira` |
| `getIssueLinkType` | Returns an issue link type. | `jira` |
| `getIssueLinkTypes` | Returns a list of all issue link types. | `jira` |
| `getIssueNavigatorDefaultColumns` | Returns the default issue navigator columns. | `jira` |
| `getIssuePickerResource` | Returns lists of issues matching a query string. | `jira` |
| `getIssueProperty` | Returns the key and value of an issue's property. | `jira` |
| `getIssuePropertyKeys` | Returns the URLs and keys of an issue's properties. | `jira` |
| `getIssueSecurityLevel` | Returns details of an issue security level. | `jira` |
| `getIssueSecurityLevelMembers` | Returns issue security level members. | `jira` |
| `getIssueSecurityScheme` | Returns an issue security scheme along with its security levels. | `jira` |
| `getIssueSecuritySchemes` | Returns all issue security schemes. | `jira` |
| `getIssueType` | Returns an issue type. | `jira` |
| `getIssueTypeMappingsForContexts` | Returns a paginated list of context to issue type mappings for a custom field. | `jira` |
| `getIssueTypeProperty` | Returns the key and value of the issue type property. | `jira` |
| `getIssueTypePropertyKeys` | Returns all the issue type property keys of the issue type. | `jira` |
| `getIssueTypeSchemeForProjects` | Returns a paginated list of issue type schemes and, for each issue type scheme, a list of the projects that use it. | `jira` |
| `getIssueTypeSchemesMapping` | Returns a paginated list of issue type scheme items. | `jira` |
| `getIssueTypeScreenSchemeMappings` | Returns a paginated list of issue type screen scheme items. | `jira` |
| `getIssueTypeScreenSchemeProjectAssociations` | Returns a paginated list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it. | `jira` |
| `getIssueTypeScreenSchemes` | Returns a paginated list of issue type screen schemes. | `jira` |
| `getIssueTypesForProject` | Returns issue types for a project. | `jira` |
| `getIssueWatchers` | Returns the watchers for an issue. | `jira` |
| `getIssueWorklog` | Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time. | `jira` |
| `getIsWatchingIssueBulk` | Returns, for the user, details of the watched status of issues from a list. | `jira` |
| `getLicense` | Returns licensing information about the Jira instance. | `jira` |
| `getLocale` | Returns the locale for the user. | `jira` |
| `getMyFilters` | Returns the filters owned by the user. | `jira` |
| `getMyPermissions` | Returns a list of permissions indicating which permissions the user has. | `jira` |
| `getNotificationScheme` | Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events. | `jira` |
| `getNotificationSchemes` | Returns a paginated list of notification schemes ordered by the display name. | `jira` |
| `getNotificationSchemeToProjectMappings` | Returns a paginated mapping of project that have notification scheme assigned. | `jira` |
| `getOptionsForContext` | Returns a paginated list of all custom field option for a context. | `jira` |
| `getPermissionScheme` | Returns a permission scheme. | `jira` |
| `getPermissionSchemeGrant` | Returns a permission grant. | `jira` |
| `getPermissionSchemeGrants` | Returns all permission grants for a permission scheme. | `jira` |
| `getPermittedProjects` | Returns all the projects where the user is granted a list of project permissions. | `jira` |
| `getPrecomputations` | — | `jira` |
| `getPreference` | Returns the value of a preference of the current user. | `jira` |
| `getPriority` | Returns an issue priority. | `jira` |
| `getProject` | Returns the project details for a project. | `jira` |
| `getProjectCategoryById` | Returns a project category. | `jira` |
| `getProjectComponents` | Returns all components in a project. | `jira` |
| `getProjectComponentsPaginated` | Returns a paginated list of all components in a project. | `jira` |
| `getProjectContextMapping` | Returns a paginated list of context to project mappings for a custom field. | `jira` |
| `getProjectEmail` | Returns the project's sender email address. | `jira` |
| `getProjectIssueSecurityScheme` | Returns the issue security scheme associated with the project. | `jira` |
| `getProjectProperty` | Returns the value of a project property. | `jira` |
| `getProjectPropertyKeys` | Returns all project property keys for the project. | `jira` |
| `getProjectRole` | Returns a project role's details and actors associated with the project. | `jira` |
| `getProjectRoleActorsForRole` | Returns the default actors for the project role. | `jira` |
| `getProjectRoleById` | Gets the project role details and the default actors associated with the role. | `jira` |
| `getProjectRoleDetails` | Returns all project roles and the details for each role. | `jira` |
| `getProjectRoles` | Returns a list of project roles for the project returning the name and self URL for each role. | `jira` |
| `getProjectsForIssueTypeScreenScheme` | Returns a paginated list of projects associated with an issue type screen scheme. | `jira` |
| `getProjectTypeByKey` | Returns a project type. | `jira` |
| `getProjectVersions` | Returns all versions in a project. | `jira` |
| `getProjectVersionsPaginated` | Returns a paginated list of all versions in a project. | `jira` |
| `getRecent` | Returns a list of up to 20 projects recently viewed by the user that are still visible to the user. | `jira` |
| `getRemoteIssueLinkById` | Returns a remote issue link for an issue. | `jira` |
| `getRemoteIssueLinks` | Returns the remote issue links for an issue. | `jira` |
| `getResolution` | Returns an issue resolution value. | `jira` |
| `getScreens` | Returns a paginated list of all screens or those specified by one or more screen IDs. | `jira` |
| `getScreenSchemes` | Returns a paginated list of screen schemes. | `jira` |
| `getScreensForField` | Returns a paginated list of the screens a field is used in. | `jira` |
| `getSecurityLevelsForProject` | Returns all issue security levels for the project that the user has access to. | `jira` |
| `getSelectableIssueFieldOptions` | Returns a paginated list of options for a select list issue field that can be viewed and selected by the user. | `jira` |
| `getSelectedTimeTrackingImplementation` | Returns the time tracking provider that is currently selected. | `jira` |
| `getServerInfo` | Returns information about the Jira instance. | `jira` |
| `getSharedTimeTrackingConfiguration` | Returns the time tracking settings. | `jira` |
| `getSharePermission` | Returns a share permission for a filter. | `jira` |
| `getSharePermissions` | Returns the share permissions for a filter. | `jira` |
| `getStatus` | Returns a status. | `jira` |
| `getStatusCategories` | Returns a list of all status categories. | `jira` |
| `getStatusCategory` | Returns a status category. | `jira` |
| `getStatuses` | Returns a list of all statuses associated with active workflows. | `jira` |
| `getStatusesById` | Returns a list of the statuses specified by one or more status IDs. | `jira` |
| `getTask` | Returns the status of a long-running asynchronous task. | `jira` |
| `getTransitions` | Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status. | `jira` |
| `getTrashedFieldsPaginated` | Returns a paginated list of fields in the trash. | `jira` |
| `getUiModifications` | Gets UI modifications. | `jira` |
| `getUser` | Returns a user. | `jira` |
| `getUserDefaultColumns` | Returns the default issue table columns for the user. | `jira` |
| `getUserEmail` | Returns a user's email address. | `jira` |
| `getUserEmailBulk` | Returns a user's email address. | `jira` |
| `getUserGroups` | Returns the groups to which a user belongs. | `jira` |
| `getUserProperty` | Returns the value of a user's property. | `jira` |
| `getUserPropertyKeys` | Returns the keys of all properties for a user. | `jira` |
| `getUsersFromGroup` | Returns a paginated list of all users in a group. | `jira` |
| `getValidProjectKey` | Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key. | `jira` |
| `getValidProjectName` | Checks that a project name isn't in use. | `jira` |
| `getVersion` | Returns a project version. | `jira` |
| `getVersionRelatedIssues` | Returns the following counts for a version: * Number of issues where the `fixVersion` is set to the version. | `jira` |
| `getVersionUnresolvedIssues` | Returns counts of the issues and unresolved issues for the project version. | `jira` |
| `getVisibleIssueFieldOptions` | Returns a paginated list of options for a select list issue field that can be viewed by the user. | `jira` |
| `getVotes` | Returns details about the votes on an issue. | `jira` |
| `getWorkflow` | Returns the workflow-issue type mappings for a workflow scheme. | `jira` |
| `getWorkflowScheme` | Returns a workflow scheme. | `jira` |
| `getWorkflowSchemeDraft` | Returns the draft workflow scheme for an active workflow scheme. | `jira` |
| `getWorkflowSchemeDraftIssueType` | Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft. | `jira` |
| `getWorkflowSchemeIssueType` | Returns the issue type-workflow mapping for an issue type in a workflow scheme. | `jira` |
| `getWorkflowSchemeProjectAssociations` | Returns a list of the workflow schemes associated with a list of projects. | `jira` |
| `getWorkflowsPaginated` | Returns a paginated list of published classic workflows. | `jira` |
| `getWorkflowTransitionProperties` | Returns the properties on a workflow transition. | `jira` |
| `getWorkflowTransitionRuleConfigurations` | Returns a paginated list of workflows with transition rules. | `jira` |
| `getWorklog` | Returns a worklog. | `jira` |
| `getWorklogProperty` | Returns the value of a worklog property. | `jira` |
| `getWorklogPropertyKeys` | Returns the keys of all properties for a worklog. | `jira` |
| `getWorklogsForIds` | Returns worklog details for a list of worklog IDs. | `jira` |
| `linkIssues` | Creates a link between two issues. | `jira` |
| `matchIssues` | Checks whether one or more issues would be returned by one or more JQL queries. | `jira` |
| `mergeVersions` | Merges two project versions. | `jira` |
| `migrateQueries` | Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs. | `jira` |
| `migrationResourceUpdateEntityPropertiesValuePut` | Updates the values of multiple entity properties for an object, up to 50 updates per request. | `jira` |
| `migrationResourceWorkflowRuleSearchPost` | Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app. | `jira` |
| `movePriorities` | Changes the order of issue priorities. | `jira` |
| `moveResolutions` | Changes the order of issue resolutions. | `jira` |
| `moveScreenTab` | Moves a screen tab. | `jira` |
| `moveScreenTabField` | Moves a screen tab field. | `jira` |
| `moveVersion` | Modifies the version's sequence within the project, which affects the display order of the versions in Jira. | `jira` |
| `notify` | Creates an email notification for an issue and adds it to the mail queue. | `jira` |
| `parseJqlQueries` | Parses and validates JQL queries. | `jira` |
| `partialUpdateProjectRole` | Updates either the project role's name or its description. | `jira` |
| `publishDraftWorkflowScheme` | Publishes a draft workflow scheme. | `jira` |
| `refreshWebhooks` | Extends the life of webhook. | `jira` |
| `registerDynamicWebhooks` | Registers webhooks. | `jira` |
| `removeAttachment` | Deletes an attachment from an issue. | `jira` |
| `removeCustomFieldContextFromProjects` | Removes a custom field context from projects. | `jira` |
| `removeGadget` | Removes a dashboard gadget from a dashboard. | `jira` |
| `removeGroup` | Deletes a group. | `jira` |
| `removeIssueTypeFromIssueTypeScheme` | Removes an issue type from an issue type scheme. | `jira` |
| `removeIssueTypesFromContext` | Removes issue types from a custom field context. | `jira` |
| `removeIssueTypesFromGlobalFieldConfigurationScheme` | Removes issue types from the field configuration scheme. | `jira` |
| `removeMappingsFromIssueTypeScreenScheme` | Removes issue type to screen scheme mappings from an issue type screen scheme. | `jira` |
| `removeNotificationFromNotificationScheme` | Removes a notification from a notification scheme. | `jira` |
| `removePreference` | Deletes a preference of the user, which restores the default value of system defined settings. | `jira` |
| `removeProjectCategory` | Deletes a project category. | `jira` |
| `removeScreenTabField` | Removes a field from a screen tab. | `jira` |
| `removeUser` | Deletes a user. | `jira` |
| `removeUserFromGroup` | Removes a user from a group. | `jira` |
| `removeVote` | Deletes a user's vote from an issue. | `jira` |
| `removeWatcher` | Deletes a user as a watcher of an issue. | `jira` |
| `renameScreenTab` | Updates the name of a screen tab. | `jira` |
| `reorderCustomFieldOptions` | Changes the order of custom field options or cascading options in a context. | `jira` |
| `reorderIssueTypesInIssueTypeScheme` | Changes the order of issue types in an issue type scheme. | `jira` |
| `replaceIssueFieldOption` | Deselects an issue-field select-list option from all issues where it is selected. | `jira` |
| `resetColumns` | Reset the user's column configuration for the filter to the default. | `jira` |
| `resetUserColumns` | Resets the default issue table columns for the user to the system default. | `jira` |
| `restore` | Restores a project that has been archived or placed in the Jira recycle bin. | `jira` |
| `restoreCustomField` | Restores a custom field from trash. | `jira` |
| `sanitiseJqlQueries` | Sanitizes one or more JQL queries by converting readable details into IDs where a user doesn't have permission to view the entity. | `jira` |
| `search` | Returns a paginated list of statuses that match a search on name or project. | `jira` |
| `searchForIssuesUsingJql` | Searches for issues using JQL. | `jira` |
| `searchForIssuesUsingJqlPost` | Searches for issues using JQL. | `jira` |
| `searchPriorities` | Returns a paginated list of priorities. | `jira` |
| `searchProjects` | Returns a paginated list of projects visible to the user. | `jira` |
| `searchResolutions` | Returns a paginated list of resolutions. | `jira` |
| `selectTimeTrackingImplementation` | Selects a time tracking provider. | `jira` |
| `setActors` | Sets the actors for a project role for a project, replacing all existing actors. | `jira` |
| `setApplicationProperty` | Changes the value of an application property. | `jira` |
| `setBanner` | Updates the announcement banner configuration. | `jira` |
| `setColumns` | Sets the columns for a filter. | `jira` |
| `setCommentProperty` | Creates or updates the value of a property for a comment. | `jira` |
| `setDashboardItemProperty` | Sets the value of a dashboard item property. | `jira` |
| `setDefaultPriority` | Sets default issue priority. | `jira` |
| `setDefaultResolution` | Sets default issue resolution. | `jira` |
| `setDefaultShareScope` | Sets the default sharing for new filters and dashboards for a user. | `jira` |
| `setDefaultValues` | Sets default for contexts of a custom field. | `jira` |
| `setFavouriteForFilter` | Add a filter as a favorite for the user. | `jira` |
| `setFieldConfigurationSchemeMapping` | Assigns issue types to field configurations on field configuration scheme. | `jira` |
| `setIssueNavigatorDefaultColumns` | Sets the default issue navigator columns. | `jira` |
| `setIssueProperty` | Sets the value of an issue's property. | `jira` |
| `setIssueTypeProperty` | Creates or updates the value of the issue type property. | `jira` |
| `setPreference` | Creates a preference for the user or updates a preference's value by sending a plain text string. | `jira` |
| `setProjectProperty` | Sets the value of the project property. | `jira` |
| `setSharedTimeTrackingConfiguration` | Sets the time tracking settings. | `jira` |
| `setUserColumns` | Sets the default issue table columns for the user. | `jira` |
| `setUserProperty` | Sets the value of a user's property. | `jira` |
| `setWorkflowSchemeDraftIssueType` | Sets the workflow for an issue type in a workflow scheme's draft. | `jira` |
| `setWorkflowSchemeIssueType` | Sets the workflow for an issue type in a workflow scheme. | `jira` |
| `setWorklogProperty` | Sets the value of a worklog property. | `jira` |
| `storeAvatar` | Loads a custom avatar for a project or issue type. | `jira` |
| `toggleFeatureForProject` | Sets the state of a project feature. | `jira` |
| `trashCustomField` | Moves a custom field to trash. | `jira` |
| `updateComment` | Updates a comment. | `jira` |
| `updateComponent` | Updates a component. | `jira` |
| `updateCustomField` | Updates a custom field. | `jira` |
| `updateCustomFieldConfiguration` | Update the configuration for contexts of a custom field created by a Forge app. | `jira` |
| `updateCustomFieldContext` | Updates a custom field context. | `jira` |
| `updateCustomFieldOption` | Updates the options of a custom field. | `jira` |
| `updateCustomFieldValue` | Updates the value of a custom field on one or more issues. | `jira` |
| `updateDashboard` | Updates a dashboard, replacing all the dashboard details with those provided. | `jira` |
| `updateDefaultScreenScheme` | Updates the default screen scheme of an issue type screen scheme. | `jira` |
| `updateDefaultWorkflow` | Sets the default workflow for a workflow scheme. | `jira` |
| `updateDraftDefaultWorkflow` | Sets the default workflow for a workflow scheme's draft. | `jira` |
| `updateDraftWorkflowMapping` | Sets the issue types for a workflow in a workflow scheme's draft. | `jira` |
| `updateFieldConfiguration` | Updates a field configuration. | `jira` |
| `updateFieldConfigurationItems` | Updates fields in a field configuration. | `jira` |
| `updateFieldConfigurationScheme` | Updates a field configuration scheme. | `jira` |
| `updateFilter` | Updates a filter. | `jira` |
| `updateGadget` | Changes the title, position, and color of the gadget on a dashboard. | `jira` |
| `updateIssueFieldOption` | Updates or creates an option for a select list issue field. | `jira` |
| `updateIssueLinkType` | Updates an issue link type. | `jira` |
| `updateIssueType` | Updates the issue type. | `jira` |
| `updateIssueTypeScheme` | Updates an issue type scheme. | `jira` |
| `updateIssueTypeScreenScheme` | Updates an issue type screen scheme. | `jira` |
| `updateMultipleCustomFieldValues` | Updates the value of one or more custom fields on one or more issues. | `jira` |
| `updateNotificationScheme` | Updates a notification scheme. | `jira` |
| `updatePermissionScheme` | Updates a permission scheme. | `jira` |
| `updatePrecomputations` | — | `jira` |
| `updatePriority` | Updates an issue priority. | `jira` |
| `updateProject` | Updates the project details of a project. | `jira` |
| `updateProjectAvatar` | Sets the avatar displayed for a project. | `jira` |
| `updateProjectCategory` | Updates a project category. | `jira` |
| `updateProjectEmail` | Sets the project's sender email address. | `jira` |
| `updateRemoteIssueLink` | Updates a remote issue link for an issue. | `jira` |
| `updateResolution` | Updates an issue resolution. | `jira` |
| `updateScreen` | Updates a screen. | `jira` |
| `updateScreenScheme` | Updates a screen scheme. | `jira` |
| `updateStatuses` | Updates statuses by ID. | `jira` |
| `updateUiModification` | Updates a UI modification. | `jira` |
| `updateVersion` | Updates a project version. | `jira` |
| `updateWorkflowMapping` | Sets the issue types for a workflow in a workflow scheme. | `jira` |
| `updateWorkflowScheme` | Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. | `jira` |
| `updateWorkflowSchemeDraft` | Updates a draft workflow scheme. | `jira` |
| `updateWorkflowTransitionProperty` | Updates a workflow transition by changing the property value. | `jira` |
| `updateWorkflowTransitionRuleConfigurations` | Updates configuration of workflow transition rules. | `jira` |
| `updateWorklog` | Updates a worklog. | `jira` |
| `validateProjectKey` | Validates a project key by confirming the key is a valid string and not in use. | `jira` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'jira',
  package: '@pikku/addon-jira',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
