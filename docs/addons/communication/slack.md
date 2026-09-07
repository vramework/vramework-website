---
format: md
title: Slack
description: "Slack integration for Pikku"
sidebar_label: Slack
---

# Slack

Slack integration for Pikku

```bash
npm install @pikku/addon-slack
```

Category: **Communication** · Version: `0.1.8` · Package: `@pikku/addon-slack`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `adminAppsApprove` | Approve an app for installation on a workspace. | `slack` |
| `adminAppsApprovedList` | List approved apps for an org or workspace. | `slack` |
| `adminAppsRequestsList` | List app requests for a team/workspace. | `slack` |
| `adminAppsRestrict` | Restrict an app for installation on a workspace. | `slack` |
| `adminAppsRestrictedList` | List restricted apps for an org or workspace. | `slack` |
| `adminConversationsArchive` | Archive a public or private channel. | `slack` |
| `adminConversationsConvertToPrivate` | Convert a public channel to a private channel. | `slack` |
| `adminConversationsCreate` | Create a public or private channel-based conversation. | `slack` |
| `adminConversationsDelete` | Delete a public or private channel. | `slack` |
| `adminConversationsDisconnectShared` | Disconnect a connected channel from one or more workspaces. | `slack` |
| `adminConversationsEkmListOriginalConnectedChannelInfo` | List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for… | `slack` |
| `adminConversationsGetConversationPrefs` | Get conversation preferences for a public or private channel. | `slack` |
| `adminConversationsGetTeams` | Get all the workspaces a given public or private channel is connected to within this Enterprise org. | `slack` |
| `adminConversationsInvite` | Invite a user to a public or private channel. | `slack` |
| `adminConversationsRename` | Rename a public or private channel. | `slack` |
| `adminConversationsRestrictAccessAddGroup` | Add an allowlist of IDP groups for accessing a channel | `slack` |
| `adminConversationsRestrictAccessListGroups` | List all IDP Groups linked to a channel | `slack` |
| `adminConversationsRestrictAccessRemoveGroup` | Remove a linked IDP group linked from a private channel | `slack` |
| `adminConversationsSearch` | Search for public or private channels in an Enterprise organization. | `slack` |
| `adminConversationsSetConversationPrefs` | Set the posting permissions for a public or private channel. | `slack` |
| `adminConversationsSetTeams` | Set the workspaces in an Enterprise grid org that connect to a public or private channel. | `slack` |
| `adminConversationsUnarchive` | Unarchive a public or private channel. | `slack` |
| `adminEmojiAdd` | Add an emoji. | `slack` |
| `adminEmojiAddAlias` | Add an emoji alias. | `slack` |
| `adminEmojiList` | List emoji for an Enterprise Grid organization. | `slack` |
| `adminEmojiRemove` | Remove an emoji across an Enterprise Grid organization | `slack` |
| `adminEmojiRename` | Rename an emoji. | `slack` |
| `adminInviteRequestsApprove` | Approve a workspace invite request. | `slack` |
| `adminInviteRequestsApprovedList` | List all approved workspace invite requests. | `slack` |
| `adminInviteRequestsDeniedList` | List all denied workspace invite requests. | `slack` |
| `adminInviteRequestsDeny` | Deny a workspace invite request. | `slack` |
| `adminInviteRequestsList` | List all pending workspace invite requests. | `slack` |
| `adminTeamsAdminsList` | List all of the admins on a given workspace. | `slack` |
| `adminTeamsCreate` | Create an Enterprise team. | `slack` |
| `adminTeamsList` | List all teams on an Enterprise organization | `slack` |
| `adminTeamsOwnersList` | List all of the owners on a given workspace. | `slack` |
| `adminTeamsSettingsInfo` | Fetch information about settings in a workspace | `slack` |
| `adminTeamsSettingsSetDefaultChannels` | Set the default channels of a workspace. | `slack` |
| `adminTeamsSettingsSetDescription` | Set the description of a given workspace. | `slack` |
| `adminTeamsSettingsSetDiscoverability` | An API method that allows admins to set the discoverability of a given workspace | `slack` |
| `adminTeamsSettingsSetIcon` | Sets the icon of a workspace. | `slack` |
| `adminTeamsSettingsSetName` | Set the name of a given workspace. | `slack` |
| `adminUsergroupsAddChannels` | Add one or more default channels to an IDP group. | `slack` |
| `adminUsergroupsAddTeams` | Associate one or more default workspaces with an organization-wide IDP group. | `slack` |
| `adminUsergroupsListChannels` | List the channels linked to an org-level IDP group (user group). | `slack` |
| `adminUsergroupsRemoveChannels` | Remove one or more default channels from an org-level IDP group (user group). | `slack` |
| `adminUsersAssign` | Add an Enterprise user to a workspace. | `slack` |
| `adminUsersInvite` | Invite a user to a workspace. | `slack` |
| `adminUsersList` | List users on a workspace | `slack` |
| `adminUsersRemove` | Remove a user from a workspace. | `slack` |
| `adminUsersSessionInvalidate` | Invalidate a single session for a user by session_id | `slack` |
| `adminUsersSessionReset` | Wipes all valid sessions on all devices for a given user | `slack` |
| `adminUsersSetAdmin` | Set an existing guest, regular user, or owner to be an admin user. | `slack` |
| `adminUsersSetExpiration` | Set an expiration for a guest user | `slack` |
| `adminUsersSetOwner` | Set an existing guest, regular user, or admin user to be a workspace owner. | `slack` |
| `adminUsersSetRegular` | Set an existing guest user, admin user, or owner to be a regular user. | `slack` |
| `apiTest` | Checks API calling code. | `slack` |
| `appsEventAuthorizationsList` | Get a list of authorizations for the given event context. | `slack` |
| `appsPermissionsInfo` | Returns list of permissions this app has on a team. | `slack` |
| `appsPermissionsRequest` | Allows an app to request additional scopes | `slack` |
| `appsPermissionsResourcesList` | Returns list of resource grants this app has on a team. | `slack` |
| `appsPermissionsScopesList` | Returns list of scopes this app has on a team. | `slack` |
| `appsPermissionsUsersList` | Returns list of user grants and corresponding scopes this app has on a team. | `slack` |
| `appsPermissionsUsersRequest` | Enables an app to trigger a permissions modal to grant an app access to a user access scope. | `slack` |
| `appsUninstall` | Uninstalls your app from a workspace. | `slack` |
| `authRevoke` | Revokes a token. | `slack` |
| `authTest` | Checks authentication & identity. | `slack` |
| `botsInfo` | Gets information about a bot user. | `slack` |
| `callsAdd` | Registers a new Call. | `slack` |
| `callsEnd` | Ends a Call. | `slack` |
| `callsInfo` | Returns information about a Call. | `slack` |
| `callsParticipantsAdd` | Registers new participants added to a Call. | `slack` |
| `callsParticipantsRemove` | Registers participants removed from a Call. | `slack` |
| `callsUpdate` | Updates information about a Call. | `slack` |
| `chatDelete` | Deletes a message. | `slack` |
| `chatDeleteScheduledMessage` | Deletes a pending scheduled message from the queue. | `slack` |
| `chatGetPermalink` | Retrieve a permalink URL for a specific extant message | `slack` |
| `chatMeMessage` | Share a me message into a channel. | `slack` |
| `chatPostEphemeral` | Sends an ephemeral message to a user in a channel. | `slack` |
| `chatPostMessage` | Sends a message to a channel. | `slack` |
| `chatScheduledMessagesList` | Returns a list of scheduled messages. | `slack` |
| `chatScheduleMessage` | Schedules a message to be sent to a channel. | `slack` |
| `chatUnfurl` | Provide custom unfurl behavior for user-posted URLs | `slack` |
| `chatUpdate` | Updates a message. | `slack` |
| `conversationsArchive` | Archives a conversation. | `slack` |
| `conversationsClose` | Closes a direct message or multi-person direct message. | `slack` |
| `conversationsCreate` | Initiates a public or private channel-based conversation | `slack` |
| `conversationsHistory` | Fetches a conversation's history of messages and events. | `slack` |
| `conversationsInfo` | Retrieve information about a conversation. | `slack` |
| `conversationsInvite` | Invites users to a channel. | `slack` |
| `conversationsJoin` | Joins an existing conversation. | `slack` |
| `conversationsKick` | Removes a user from a conversation. | `slack` |
| `conversationsLeave` | Leaves a conversation. | `slack` |
| `conversationsList` | Lists all channels in a Slack team. | `slack` |
| `conversationsMark` | Sets the read cursor in a channel. | `slack` |
| `conversationsMembers` | Retrieve members of a conversation. | `slack` |
| `conversationsOpen` | Opens or resumes a direct message or multi-person direct message. | `slack` |
| `conversationsRename` | Renames a conversation. | `slack` |
| `conversationsReplies` | Retrieve a thread of messages posted to a conversation | `slack` |
| `conversationsSetPurpose` | Sets the purpose for a conversation. | `slack` |
| `conversationsSetTopic` | Sets the topic for a conversation. | `slack` |
| `conversationsUnarchive` | Reverses conversation archival. | `slack` |
| `dialogOpen` | Open a dialog with a user | `slack` |
| `dndEndDnd` | Ends the current user's Do Not Disturb session immediately. | `slack` |
| `dndEndSnooze` | Ends the current user's snooze mode immediately. | `slack` |
| `dndInfo` | Retrieves a user's current Do Not Disturb status. | `slack` |
| `dndSetSnooze` | Turns on Do Not Disturb mode for the current user, or changes its duration. | `slack` |
| `dndTeamInfo` | Retrieves the Do Not Disturb status for up to 50 users on a team. | `slack` |
| `emojiList` | Lists custom emoji for a team. | `slack` |
| `filesCommentsDelete` | Deletes an existing comment on a file. | `slack` |
| `filesDelete` | Deletes a file. | `slack` |
| `filesInfo` | Gets information about a file. | `slack` |
| `filesList` | List for a team, in a channel, or from a user with applied filters. | `slack` |
| `filesRemoteAdd` | Adds a file from a remote service | `slack` |
| `filesRemoteInfo` | Retrieve information about a remote file added to Slack | `slack` |
| `filesRemoteList` | Retrieve information about a remote file added to Slack | `slack` |
| `filesRemoteRemove` | Remove a remote file. | `slack` |
| `filesRemoteShare` | Share a remote file into a channel. | `slack` |
| `filesRemoteUpdate` | Updates an existing remote file. | `slack` |
| `filesRevokePublicURL` | Revokes public/external sharing access for a file | `slack` |
| `filesSharedPublicURL` | Enables a file for public/external sharing. | `slack` |
| `filesUpload` | Uploads or creates a file. | `slack` |
| `migrationExchange` | For Enterprise Grid workspaces, map local user IDs to global user IDs | `slack` |
| `oauthAccess` | Exchanges a temporary OAuth verifier code for an access token. | `slack` |
| `oauthToken` | Exchanges a temporary OAuth verifier code for a workspace token. | `slack` |
| `oauthV2Access` | Exchanges a temporary OAuth verifier code for an access token. | `slack` |
| `pinsAdd` | Pins an item to a channel. | `slack` |
| `pinsList` | Lists items pinned to a channel. | `slack` |
| `pinsRemove` | Un-pins an item from a channel. | `slack` |
| `reactionsAdd` | Adds a reaction to an item. | `slack` |
| `reactionsGet` | Gets reactions for an item. | `slack` |
| `reactionsList` | Lists reactions made by a user. | `slack` |
| `reactionsRemove` | Removes a reaction from an item. | `slack` |
| `remindersAdd` | Creates a reminder. | `slack` |
| `remindersComplete` | Marks a reminder as complete. | `slack` |
| `remindersDelete` | Deletes a reminder. | `slack` |
| `remindersInfo` | Gets information about a reminder. | `slack` |
| `remindersList` | Lists all reminders created by or for a given user. | `slack` |
| `rtmConnect` | Starts a Real Time Messaging session. | `slack` |
| `searchMessages` | Searches for messages matching a query. | `slack` |
| `starsAdd` | Adds a star to an item. | `slack` |
| `starsList` | Lists stars for a user. | `slack` |
| `starsRemove` | Removes a star from an item. | `slack` |
| `teamAccessLogs` | Gets the access logs for the current team. | `slack` |
| `teamBillableInfo` | Gets billable users information for the current team. | `slack` |
| `teamInfo` | Gets information about the current team. | `slack` |
| `teamIntegrationLogs` | Gets the integration logs for the current team. | `slack` |
| `teamProfileGet` | Retrieve a team's profile. | `slack` |
| `usergroupsCreate` | Create a User Group | `slack` |
| `usergroupsDisable` | Disable an existing User Group | `slack` |
| `usergroupsEnable` | Enable a User Group | `slack` |
| `usergroupsList` | List all User Groups for a team | `slack` |
| `usergroupsUpdate` | Update an existing User Group | `slack` |
| `usergroupsUsersList` | List all users in a User Group | `slack` |
| `usergroupsUsersUpdate` | Update the list of users for a User Group | `slack` |
| `usersConversations` | List conversations the calling user may access. | `slack` |
| `usersDeletePhoto` | Delete the user profile photo | `slack` |
| `usersGetPresence` | Gets user presence information. | `slack` |
| `usersIdentity` | Get a user's identity. | `slack` |
| `usersInfo` | Gets information about a user. | `slack` |
| `usersList` | Lists all users in a Slack team. | `slack` |
| `usersLookupByEmail` | Find a user with an email address. | `slack` |
| `usersProfileGet` | Retrieves a user's profile information. | `slack` |
| `usersProfileSet` | Set the profile information for a user. | `slack` |
| `usersSetActive` | Marked a user as active. | `slack` |
| `usersSetPhoto` | Set the user profile photo | `slack` |
| `usersSetPresence` | Manually sets user presence. | `slack` |
| `viewsOpen` | Open a view for a user. | `slack` |
| `viewsPublish` | Publish a static view for a User. | `slack` |
| `viewsPush` | Push a view onto the stack of a root view. | `slack` |
| `viewsUpdate` | Update an existing view. | `slack` |
| `workflowsStepCompleted` | Indicate that an app's step in a workflow completed execution. | `slack` |
| `workflowsStepFailed` | Indicate that an app's step in a workflow failed to execute. | `slack` |
| `workflowsUpdateStep` | Update the configuration for a workflow extension step. | `slack` |

## Secrets

- `SLACK_OAUTH_APP` — OAuth2 app credentials for Slack

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'slack',
  package: '@pikku/addon-slack',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
