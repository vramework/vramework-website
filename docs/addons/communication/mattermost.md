---
format: md
title: Mattermost
description: "Mattermost integration for Pikku"
sidebar_label: Mattermost
---

# Mattermost

Mattermost integration for Pikku

```bash
npm install @pikku/addon-mattermost
```

Category: **Communication** · Version: `0.0.7` · Package: `@pikku/addon-mattermost`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `createActionsDialogsOpen` | Open an interactive dialog using a trigger ID provided by a slash command, or some other action payload. | `mattermost` |
| `createActionsDialogsSubmit` | Endpoint used by the Mattermost clients to submit a dialog. | `mattermost` |
| `createBots` | Create a new bot account on the system. | `mattermost` |
| `createBotsAssign` | Assign a bot to a specified user. | `mattermost` |
| `createBotsDisable` | Disable a bot. | `mattermost` |
| `createBotsEnable` | Enable a bot. | `mattermost` |
| `createBotsIcon` | Set a bot's LHS icon image based on bot_user_id string parameter. | `mattermost` |
| `createBrandImage` | Uploads a brand image. | `mattermost` |
| `createCachesInvalidate` | Purge all the in-memory caches for the Mattermost server. | `mattermost` |
| `createChannels` | Create a new channel. | `mattermost` |
| `createChannelsConvert` | Convert into private channel from the provided channel id string. | `mattermost` |
| `createChannelsDirect` | Create a new direct message channel between two users. | `mattermost` |
| `createChannelsGroup` | Create a new group message channel to group of users. | `mattermost` |
| `createChannelsMembers` | Add a user to a channel by creating a channel member object. | `mattermost` |
| `createChannelsMembersIds` | Get a list of channel members based on the provided user ids. | `mattermost` |
| `createChannelsMembersView` | Perform all the actions involved in viewing a channel. | `mattermost` |
| `createChannelsRestore` | Restore channel from the provided channel id string. | `mattermost` |
| `createCommands` | Create a command for a team. | `mattermost` |
| `createCommandsExecute` | Execute a command on a team. | `mattermost` |
| `createComplianceReports` | Create and save a compliance report. | `mattermost` |
| `createConfigReload` | Reload the configuration file to pick up on any changes made to it. | `mattermost` |
| `createDatabaseRecycle` | Recycle database connections by closing and reconnecting all connections to master and read replica databases. | `mattermost` |
| `createElasticsearchPurgeIndexes` | Deletes all Elasticsearch indexes and their contents. | `mattermost` |
| `createElasticsearchTest` | Test the current Elasticsearch configuration to see if the Elasticsearch server can be contacted successfully. | `mattermost` |
| `createEmailTest` | Send a test email to make sure you have your email settings configured correctly. | `mattermost` |
| `createEmoji` | Create a custom emoji for the team. | `mattermost` |
| `createEmojiSearch` | Search for custom emoji by name based on search criteria provided in the request body. | `mattermost` |
| `createFiles` | Uploads a file that can later be attached to a post. | `mattermost` |
| `createFileS3Test` | Send a test to validate if can connect to AWS S3. | `mattermost` |
| `createGroupSearch` | Get a list of group channels for a user which members' usernames match the search term. | `mattermost` |
| `createHooksIncoming` | Create an incoming webhook for a channel. | `mattermost` |
| `createHooksOutgoing` | Create an outgoing webhook for a team. | `mattermost` |
| `createHooksOutgoingRegenToken` | Regenerate the token for the outgoing webhook. | `mattermost` |
| `createJobs` | Create a new job. | `mattermost` |
| `createJobsCancel` | Cancel a job. | `mattermost` |
| `createLdapSync` | Synchronize any user attribute changes in the configured AD/LDAP server with Mattermost. | `mattermost` |
| `createLdapTest` | Test the current AD/LDAP configuration to see if the AD/LDAP server can be contacted successfully. | `mattermost` |
| `createLicense` | Upload a license to enable enterprise features. | `mattermost` |
| `createLogs` | Add log messages to the server logs. | `mattermost` |
| `createOauthApps` | Register an OAuth 2.0 client application with Mattermost as the service provider. | `mattermost` |
| `createOauthAppsRegenSecret` | Regenerate the client secret for an OAuth 2.0 client application registered with Mattermost. | `mattermost` |
| `createOpengraph` | Get Open Graph Metadata for a specif URL. | `mattermost` |
| `createPlugins` | Upload a plugin compressed in a .tar.gz file. | `mattermost` |
| `createPluginsDisable` | Disable a previously enabled plugin. | `mattermost` |
| `createPluginsEnable` | Enable a previously uploaded plugin. | `mattermost` |
| `createPosts` | Create a new post in a channel. | `mattermost` |
| `createPostsAction` | Perform a post action, which allows users to interact with integrations through posts. | `mattermost` |
| `createPostsEphemeral` | Create a new ephemeral post in a channel. | `mattermost` |
| `createPostsIdsReactions` | Get a list of reactions made by all users to a given post. | `mattermost` |
| `createPostsPin` | Pin a post to a channel it is in based from the provided post id string. | `mattermost` |
| `createPostsUnpin` | Unpin a post to a channel it is in based from the provided post id string. | `mattermost` |
| `createReactions` | Create a reaction. | `mattermost` |
| `createRolesNames` | Get a list of roles from their names. | `mattermost` |
| `createSamlCertificateIdp` | Upload the IDP certificate to be used with your SAML configuration. | `mattermost` |
| `createSamlCertificatePrivate` | Upload the private key to be used for encryption with your SAML configuration. | `mattermost` |
| `createSamlCertificatePublic` | Upload the public certificate to be used for encryption with your SAML configuration. | `mattermost` |
| `createSchemes` | Create a new scheme. | `mattermost` |
| `createTeams` | Create a new team on the system. | `mattermost` |
| `createTeamsChannelsIds` | Get a list of public channels on a team by id. | `mattermost` |
| `createTeamsChannelsSearch` | Search public channels on a team based on the search term provided in the request body. | `mattermost` |
| `createTeamsImage` | Sets the team icon for the team. | `mattermost` |
| `createTeamsImport` | Import a team into a existing team. | `mattermost` |
| `createTeamsInviteEmail` | Invite users to the existing team usign the user's email. | `mattermost` |
| `createTeamsMembers` | Add user to the team by user_id. | `mattermost` |
| `createTeamsMembersBatch` | Add a number of users to the team by user_id. | `mattermost` |
| `createTeamsMembersIds` | Get a list of team members based on a provided array of user ids. | `mattermost` |
| `createTeamsMembersInvite` | Using either an invite id or hash/data pair from an email invite link, add a user to a team. | `mattermost` |
| `createTeamsPostsSearch` | Search posts in the team and from the provided terms string. | `mattermost` |
| `createTeamsRegenerateInviteId` | Regenerates the invite ID used in invite links of a team Permissions Must be authenticated and have the `manage_team` permission. | `mattermost` |
| `createTeamsSearch` | Search teams based on search term provided in the request body. | `mattermost` |
| `createUsers` | Create a new user on the system. | `mattermost` |
| `createUsersEmailVerify` | Verify the email used by a user to sign-up their account with. | `mattermost` |
| `createUsersEmailVerifySend` | Send an email with a verification link to a user that has an email matching the one in the request body. | `mattermost` |
| `createUsersGroupChannels` | Get an object containing a key per group channel id in the query and its value as a list of users members of that group channel. | `mattermost` |
| `createUsersIds` | Get a list of users based on a provided list of user ids. | `mattermost` |
| `createUsersImage` | Set a user's profile image based on user_id string parameter. | `mattermost` |
| `createUsersLoginSwitch` | Switch a user's login method from using email to OAuth2/SAML/LDAP or back to email. | `mattermost` |
| `createUsersMfa` | Check if a user has multi-factor authentication active on their account by providing a login id. | `mattermost` |
| `createUsersMfaGenerate` | Generates an multi-factor authentication secret for a user and returns it as a string and as base64 encoded QR code image. | `mattermost` |
| `createUsersPasswordReset` | Update the password for a user using a one-use, timed recovery code tied to the user's account. | `mattermost` |
| `createUsersPasswordResetSend` | Send an email containing a link for resetting the user's password. | `mattermost` |
| `createUsersPreferencesDelete` | Delete a list of the user's preferences. | `mattermost` |
| `createUsersSearch` | Get a list of users based on search criteria provided in the request body. | `mattermost` |
| `createUsersSessionsRevoke` | Revokes a user session from the provided user id and session id strings. | `mattermost` |
| `createUsersSessionsRevokeAll` | Revokes all user sessions from the provided user id and session id strings. | `mattermost` |
| `createUsersStatusIds` | Get a list of user statuses by id from the server. | `mattermost` |
| `createUsersTermsOfService` | Records user action when they accept or decline custom terms of service. | `mattermost` |
| `createUsersTokens` | Generate a user access token that can be used to authenticate with the Mattermost REST API. | `mattermost` |
| `createUsersTokensDisable` | Disable a personal access token and delete any sessions using the token. | `mattermost` |
| `createUsersTokensEnable` | Re-enable a personal access token that has been disabled. | `mattermost` |
| `createUsersTokensRevoke` | Revoke a user access token and delete any sessions using the token. | `mattermost` |
| `createUsersTokensSearch` | Get a list of tokens based on search criteria provided in the request body. | `mattermost` |
| `createUsersUsernames` | Get a list of users based on a provided list of usernames. | `mattermost` |
| `deleteBotsIcon` | Delete bot's LHS icon image based on bot_user_id string parameter. | `mattermost` |
| `deleteBrandImage` | Deletes the previously uploaded brand image. | `mattermost` |
| `deleteChannel` | Soft deletes a channel, by marking the channel as deleted in the database. | `mattermost` |
| `deleteChannelsMember` | Delete a channel member, effectively removing them from a channel. | `mattermost` |
| `deleteCommand` | Delete a command based on command id string. | `mattermost` |
| `deleteEmoji` | Delete a custom emoji. | `mattermost` |
| `deleteHooksOutgoing` | Delete an outgoing webhook given the hook id. | `mattermost` |
| `deleteLicense` | Remove the license file from the server. | `mattermost` |
| `deleteOauthApp` | Delete and unregister an OAuth 2.0 client application Permissions If app creator, must have `mange_oauth` permission otherwise `manage_system_wide_oauth` permi… | `mattermost` |
| `deletePlugin` | Remove the plugin with the provided ID from the server. | `mattermost` |
| `deletePost` | Soft deletes a post, by marking the post as deleted in the database. | `mattermost` |
| `deleteSamlCertificateIdp` | Delete the current IDP certificate being used with your SAML configuration. | `mattermost` |
| `deleteSamlCertificatePrivate` | Delete the current private key being used with your SAML configuration. | `mattermost` |
| `deleteSamlCertificatePublic` | Delete the current public certificate being used with your SAML configuration. | `mattermost` |
| `deleteScheme` | Soft deletes a scheme, by marking the scheme as deleted in the database. | `mattermost` |
| `deleteTeam` | Soft deletes a team, by marking the team as deleted in the database. | `mattermost` |
| `deleteTeamsImage` | Remove the team icon for the team. | `mattermost` |
| `deleteTeamsInvitesEmail` | Invalidate active email invitations that have not been accepted by the user. | `mattermost` |
| `deleteTeamsMember` | Delete the team member object for a user, effectively removing them from a team. | `mattermost` |
| `deleteUser` | Deactivates the user and revokes all its sessions by archiving its user object. | `mattermost` |
| `deleteUsersImage` | Delete user's profile image and reset to default image based on user_id string parameter. | `mattermost` |
| `deleteUsersPostsReaction` | Deletes a reaction made by a user from the given post. | `mattermost` |
| `getBot` | Get a bot specified by its bot id. | `mattermost` |
| `getChannel` | Get channel from the provided channel id string. | `mattermost` |
| `getChannelsMember` | Get a channel member. | `mattermost` |
| `getComplianceReport` | Get a compliance reports previously created. | `mattermost` |
| `getEmoji` | Get some metadata for a custom emoji. | `mattermost` |
| `getEmojiName` | Get some metadata for a custom emoji using its name. | `mattermost` |
| `getFile` | Gets a file that has been uploaded previously. | `mattermost` |
| `getHooksIncoming` | Get an incoming webhook given the hook id. | `mattermost` |
| `getHooksOutgoing` | Get an outgoing webhook given the hook id. | `mattermost` |
| `getJob` | Gets a single job. | `mattermost` |
| `getJobsType` | Get a page of jobs of the given type. | `mattermost` |
| `getOauthApp` | Get an OAuth 2.0 client application registered with Mattermost. | `mattermost` |
| `getPost` | Get a single post. | `mattermost` |
| `getRole` | Get a role from the provided role id. | `mattermost` |
| `getRolesName` | Get a role from the provided role name. | `mattermost` |
| `getScheme` | Get a scheme from the provided scheme id. | `mattermost` |
| `getTeam` | Get a team on the system. | `mattermost` |
| `getTeamsChannelsName` | Gets channel from the provided team id and channel name strings. | `mattermost` |
| `getTeamsInvite` | Get the `name`, `display_name`, `description` and `id` for a team from the invite id. | `mattermost` |
| `getTeamsMember` | Get a team member on the system. | `mattermost` |
| `getTeamsName` | Get a team based on provided name string Permissions Must be authenticated, team type is open and have the `view_team` permission. | `mattermost` |
| `getTeamsNameChannelsName` | Gets a channel from the provided team name and channel name strings. | `mattermost` |
| `getUser` | Get a user a object. | `mattermost` |
| `getUsersEmail` | Get a user object by providing a user email. | `mattermost` |
| `getUsersPreference` | Lists the current user's stored preferences in the given category. | `mattermost` |
| `getUsersPreferencesName` | Gets a single preference for the current user with the given category and name. | `mattermost` |
| `getUsersToken` | Get a user access token. | `mattermost` |
| `getUsersUsername` | Get a user object by providing a username. | `mattermost` |
| `listAnalyticsOld` | Get some analytics data about the system. | `mattermost` |
| `listAudits` | Get a page of audits for all users on the system, selected with `page` and `per_page` query parameters. | `mattermost` |
| `listBots` | Get a page of a list of bots. | `mattermost` |
| `listBotsIcon` | Get a bot's LHS icon image based on bot_user_id string parameter. | `mattermost` |
| `listBrandImage` | Get the previously uploaded brand image. | `mattermost` |
| `listChannelsGroups` | Retrieve the list of groups associated with a given channel. | `mattermost` |
| `listChannelsMembers` | Get a page of members for a channel. | `mattermost` |
| `listChannelsPinned` | Get a list of pinned posts for channel. | `mattermost` |
| `listChannelsPosts` | Get a page of posts in a channel. | `mattermost` |
| `listChannelsStats` | Get statistics for a channel. | `mattermost` |
| `listChannelsTimezones` | Get a list of timezones for the users who are in this channel. | `mattermost` |
| `listClusterStatus` | Get a set of information for each node in the cluster, useful for checking the status and health of each node. | `mattermost` |
| `listCommands` | List commands for a team. | `mattermost` |
| `listComplianceReports` | Get a list of compliance reports previously created by page, selected with `page` and `per_page` query parameters. | `mattermost` |
| `listComplianceReportsDownload` | Download the full contents of a report as a file. | `mattermost` |
| `listConfig` | Retrieve the current server configuration Permissions Must have `manage_system` permission. | `mattermost` |
| `listConfigClient` | Get a subset of the server configuration needed by the client. | `mattermost` |
| `listConfigEnvironment` | Retrieve a json object mirroring the server configuration where fields are set to true if the corresponding config setting is set through an environment variab… | `mattermost` |
| `listDataRetentionPolicy` | Gets the current data retention policy details from the server, including what data should be purged and the cutoff times for each data type that should be pur… | `mattermost` |
| `listEmoji` | Get a page of metadata for custom emoji on the system. | `mattermost` |
| `listEmojiAutocomplete` | Get a list of custom emoji with names starting with or matching the provided name. | `mattermost` |
| `listEmojiImage` | Get the image for a custom emoji. | `mattermost` |
| `listFilesInfo` | Gets a file's info. | `mattermost` |
| `listFilesLink` | Gets a public link for a file that can be accessed without logging into Mattermost. | `mattermost` |
| `listFilesPreview` | Gets a file's preview. | `mattermost` |
| `listFilesThumbnail` | Gets a file's thumbnail. | `mattermost` |
| `listHooksIncoming` | Get a page of a list of incoming webhooks. | `mattermost` |
| `listHooksOutgoing` | Get a page of a list of outgoing webhooks. | `mattermost` |
| `listJobs` | Get a page of jobs. | `mattermost` |
| `listLicenseClient` | Get a subset of the server license needed by the client. | `mattermost` |
| `listLogs` | Get a page of server logs, selected with `page` and `logs_per_page` query parameters. | `mattermost` |
| `listOauthApps` | Get a page of OAuth 2.0 client applications registered with Mattermost. | `mattermost` |
| `listOauthAppsInfo` | Get public information about an OAuth 2.0 client application registered with Mattermost. | `mattermost` |
| `listPlugins` | Get a list of inactive and a list of active plugin manifests. | `mattermost` |
| `listPluginsWebapp` | Get a list of web app plugins installed and activated on the server. | `mattermost` |
| `listPostsFilesInfo` | Gets a list of file information objects for the files attached to a post. | `mattermost` |
| `listPostsReactions` | Get a list of reactions made by all users to a given post. | `mattermost` |
| `listPostsThread` | Get a post and the rest of the posts in the same thread. | `mattermost` |
| `listSamlCertificateStatus` | Get the status of the uploaded certificates and keys in use by your SAML configuration. | `mattermost` |
| `listSamlMetadata` | Get SAML metadata from the server. | `mattermost` |
| `listSchemes` | Get a page of schemes. | `mattermost` |
| `listSchemesChannels` | Get a page of channels which use this scheme. | `mattermost` |
| `listSchemesTeams` | Get a page of teams which use this scheme. | `mattermost` |
| `listSystemPing` | Check if the server is up and healthy based on the configuration setting `GoRoutineHealthThreshold`. | `mattermost` |
| `listTeams` | For regular users only returns open teams. | `mattermost` |
| `listTeamsChannels` | Get a page of public channels on a team based on query string parameters - page and per_page. | `mattermost` |
| `listTeamsChannelsAutocomplete` | Autocomplete public channels on a team based on the search term provided in the request URL. | `mattermost` |
| `listTeamsChannelsDeleted` | Get a page of deleted channels on a team based on query string parameters - team_id, page and per_page. | `mattermost` |
| `listTeamsChannelsSearchAutocomplete` | Autocomplete your channels on a team based on the search term provided in the request URL. | `mattermost` |
| `listTeamsCommandsAutocomplete` | List autocomplete commands in the team. | `mattermost` |
| `listTeamsGroups` | Retrieve the list of groups associated with a given team. | `mattermost` |
| `listTeamsImage` | Get the team icon of the team. | `mattermost` |
| `listTeamsMembers` | Get a page team members list based on query string parameters - team id, page and per page. | `mattermost` |
| `listTeamsNameExists` | Check if the team exists based on a team name. | `mattermost` |
| `listTeamsStats` | Get a team stats on the system. | `mattermost` |
| `listUsers` | Get a page of a list of users. | `mattermost` |
| `listUsersAudits` | Get a list of audit by providing the user GUID. | `mattermost` |
| `listUsersAutocomplete` | Get a list of users for the purpose of autocompleting based on the provided search term. | `mattermost` |
| `listUsersChannelsPostsUnread` | Get posts around last unread post by a user in a channel. | `mattermost` |
| `listUsersChannelsUnread` | Get the total unread messages and mentions for a channel for a user. | `mattermost` |
| `listUsersImage` | Get a user's profile image based on user_id string parameter. | `mattermost` |
| `listUsersImageDefault` | Returns the default (generated) user profile image based on user_id string parameter. | `mattermost` |
| `listUsersOauthAppsAuthorized` | Get a page of OAuth 2.0 client applications authorized to access a user's account. | `mattermost` |
| `listUsersPostsFlagged` | Get a page of flagged posts of a user provided user id string. | `mattermost` |
| `listUsersPreferences` | Get a list of the user's preferences. | `mattermost` |
| `listUsersSessions` | Get a list of sessions by providing the user GUID. | `mattermost` |
| `listUsersStats` | Get a total count of users in the system. | `mattermost` |
| `listUsersStatus` | Get user status by id from the server. | `mattermost` |
| `listUsersTeams` | Get a list of teams that a user is on. | `mattermost` |
| `listUsersTeamsChannels` | Get all the channels on a team for a user. | `mattermost` |
| `listUsersTeamsChannelsMembers` | Get all channel members on a team for a user. | `mattermost` |
| `listUsersTeamsMembers` | Get a list of team members for a user. | `mattermost` |
| `listUsersTeamsUnread` | Get the count for unread messages and mentions in the teams the user is a member of. | `mattermost` |
| `listUsersTeamsUnread2` | Get the unread mention and message counts for a team for the specified user. | `mattermost` |
| `listUsersTermsOfService` | Will be deprecated in v6.0 Fetches user's latest terms of service action if the latest action was for acceptance. | `mattermost` |
| `listUsersTokens` | Get a list of user access tokens for a user. | `mattermost` |
| `listUsersTokens2` | Get a page of user access tokens for users on the system. | `mattermost` |
| `updateBot` | Partially update a bot by providing only the fields you want to update. | `mattermost` |
| `updateChannel` | Update a channel. | `mattermost` |
| `updateChannelsMembersNotifyProps` | Update a user's notification properties for a channel. | `mattermost` |
| `updateChannelsMembersRoles` | Update a user's roles for a channel. | `mattermost` |
| `updateChannelsMembersSchemeRoles` | Update a channel member's scheme_admin/scheme_user properties. | `mattermost` |
| `updateChannelsPatch` | Partially update a channel by providing only the fields you want to update. | `mattermost` |
| `updateChannelsScheme` | Set a channel's scheme, more specifically sets the scheme_id value of a channel record. | `mattermost` |
| `updateCommand` | Update a single command based on command id string and Command struct. | `mattermost` |
| `updateCommandsRegenToken` | Generate a new token for the command based on command id string. | `mattermost` |
| `updateConfig` | Submit a new configuration for the server to use. | `mattermost` |
| `updateHooksIncoming` | Update an incoming webhook given the hook id. | `mattermost` |
| `updateHooksOutgoing` | Update an outgoing webhook given the hook id. | `mattermost` |
| `updateOauthApp` | Update an OAuth 2.0 client application based on OAuth struct. | `mattermost` |
| `updatePost` | Update a post. | `mattermost` |
| `updatePostsPatch` | Partially update a post by providing only the fields you want to update. | `mattermost` |
| `updateRolesPatch` | Partially update a role by providing only the fields you want to update. | `mattermost` |
| `updateSchemesPatch` | Partially update a scheme by providing only the fields you want to update. | `mattermost` |
| `updateTeam` | Update a team by providing the team object. | `mattermost` |
| `updateTeamsMembersRoles` | Update a team member roles. | `mattermost` |
| `updateTeamsMembersSchemeRoles` | Update a team member's scheme_admin/scheme_user properties. | `mattermost` |
| `updateTeamsPatch` | Partially update a team by providing only the fields you want to update. | `mattermost` |
| `updateTeamsScheme` | Set a team's scheme, more specifically sets the scheme_id value of a team record. | `mattermost` |
| `updateUser` | Update a user by providing the user object. | `mattermost` |
| `updateUsersActive` | Update user active or inactive status. | `mattermost` |
| `updateUsersAuth` | Updates a user's authentication method. | `mattermost` |
| `updateUsersMfa` | Activates multi-factor authentication for the user if `activate` is true and a valid `code` is provided. | `mattermost` |
| `updateUsersPassword` | Update a user's password. | `mattermost` |
| `updateUsersPatch` | Partially update a user by providing only the fields you want to update. | `mattermost` |
| `updateUsersPreferences` | Save a list of the user's preferences. | `mattermost` |
| `updateUsersRoles` | Update a user's system-level roles. | `mattermost` |
| `updateUsersSessionsDevice` | Attach a mobile device id to the currently logged in session. | `mattermost` |
| `updateUsersStatus` | Manually set a user's status. | `mattermost` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'mattermost',
  package: '@pikku/addon-mattermost',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
