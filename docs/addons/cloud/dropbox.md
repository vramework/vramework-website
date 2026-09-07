---
format: md
title: Dropbox
description: "Dropbox integration for Pikku"
sidebar_label: Dropbox
---

# Dropbox

Dropbox integration for Pikku

```bash
npm install @pikku/addon-dropbox
```

Category: **Cloud** · Version: `0.0.8` · Package: `@pikku/addon-dropbox`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `authTokenFromOauth1` | Creates an OAuth 2.0 access token from the supplied OAuth 1.0 access token. | `dropbox` |
| `authTokenRevoke` | Disables the access token used to authenticate the call. | `dropbox` |
| `filePropertiesPropertiesAdd` | Add property groups to a Dropbox file. | `dropbox` |
| `filePropertiesPropertiesOverwrite` | Overwrite property groups associated with a file. | `dropbox` |
| `filePropertiesPropertiesRemove` | Permanently removes the specified property group from the file. | `dropbox` |
| `filePropertiesPropertiesSearch` | Search across property templates for particular property field values. | `dropbox` |
| `filePropertiesPropertiesSearchContinue` | Once a cursor has been retrieved from :route:`properties/search`, use this to paginate through all search results. | `dropbox` |
| `filePropertiesPropertiesUpdate` | Add, update or remove properties associated with the supplied file and templates. | `dropbox` |
| `filePropertiesTemplatesAddForTeam` | Add a template associated with a team. | `dropbox` |
| `filePropertiesTemplatesAddForUser` | Add a template associated with a user. | `dropbox` |
| `filePropertiesTemplatesGetForTeam` | Get the schema for a specified template. | `dropbox` |
| `filePropertiesTemplatesGetForUser` | Get the schema for a specified template. | `dropbox` |
| `filePropertiesTemplatesListForTeam` | Get the template identifiers for a team. | `dropbox` |
| `filePropertiesTemplatesListForUser` | Get the template identifiers for a team. | `dropbox` |
| `filePropertiesTemplatesRemoveForTeam` | Permanently removes the specified template created from :route:`templates/add_for_user`. | `dropbox` |
| `filePropertiesTemplatesRemoveForUser` | Permanently removes the specified template created from :route:`templates/add_for_user`. | `dropbox` |
| `filePropertiesTemplatesUpdateForTeam` | Update a template associated with a team. | `dropbox` |
| `filePropertiesTemplatesUpdateForUser` | Update a template associated with a user. | `dropbox` |
| `fileRequestsCreate` | Creates a file request for this user. | `dropbox` |
| `fileRequestsGet` | Returns the specified file request. | `dropbox` |
| `fileRequestsList` | Returns a list of file requests owned by this user. | `dropbox` |
| `fileRequestsUpdate` | Update a file request. | `dropbox` |
| `filesAlphaGetMetadata` | Returns the metadata for a file or folder. | `dropbox` |
| `filesAlphaUpload` | Create a new file with the contents provided in the request. | `dropbox` |
| `filesCopy` | Copy a file or folder to a different location in the user's Dropbox. | `dropbox` |
| `filesCopyBatch` | Copy multiple files or folders to different locations at once in the user's Dropbox. | `dropbox` |
| `filesCopyBatchCheck` | Returns the status of an asynchronous job for :route:`copy_batch`. | `dropbox` |
| `filesCopyReferenceGet` | Get a copy reference to a file or folder. | `dropbox` |
| `filesCopyReferenceSave` | Save a copy reference returned by :route:`copy_reference/get` to the user's Dropbox. | `dropbox` |
| `filesCopyV2` | Copy a file or folder to a different location in the user's Dropbox. | `dropbox` |
| `filesCreateFolder` | Create a folder at a given path. | `dropbox` |
| `filesCreateFolderBatch` | Create multiple folders at once. | `dropbox` |
| `filesCreateFolderBatchCheck` | Returns the status of an asynchronous job for :route:`create_folder_batch`. | `dropbox` |
| `filesCreateFolderV2` | Create a folder at a given path. | `dropbox` |
| `filesDelete` | Delete the file or folder at a given path. | `dropbox` |
| `filesDeleteBatch` | Delete multiple files/folders at once. | `dropbox` |
| `filesDeleteBatchCheck` | Returns the status of an asynchronous job for :route:`delete_batch`. | `dropbox` |
| `filesDeleteV2` | Delete the file or folder at a given path. | `dropbox` |
| `filesDownload` | Download a file from a user's Dropbox. | `dropbox` |
| `filesDownloadZip` | Download a folder from the user's Dropbox, as a zip file. | `dropbox` |
| `filesGetMetadata` | Returns the metadata for a file or folder. | `dropbox` |
| `filesGetPreview` | Get a preview for a file. | `dropbox` |
| `filesGetTemporaryLink` | Get a temporary link to stream content of a file. | `dropbox` |
| `filesGetThumbnail` | Get a thumbnail for an image. | `dropbox` |
| `filesGetThumbnailBatch` | Get thumbnails for a list of images. | `dropbox` |
| `filesListFolder` | Starts returning the contents of a folder. | `dropbox` |
| `filesListFolderContinue` | Once a cursor has been retrieved from :route:`list_folder`, use this to paginate through all files and retrieve updates to the folder, following the same rules… | `dropbox` |
| `filesListFolderGetLatestCursor` | A way to quickly get a cursor for the folder's state. | `dropbox` |
| `filesListFolderLongpoll` | A longpoll endpoint to wait for changes on an account. | `dropbox` |
| `filesListRevisions` | Returns revisions for files based on a file path or a file id. | `dropbox` |
| `filesMove` | Move a file or folder to a different location in the user's Dropbox. | `dropbox` |
| `filesMoveBatch` | Move multiple files or folders to different locations at once in the user's Dropbox. | `dropbox` |
| `filesMoveBatchCheck` | Returns the status of an asynchronous job for :route:`move_batch`. | `dropbox` |
| `filesMoveV2` | Move a file or folder to a different location in the user's Dropbox. | `dropbox` |
| `filesPermanentlyDelete` | Permanently delete the file or folder at a given path (see Note: This endpoint is only available for Dropbox Business apps. | `dropbox` |
| `filesPropertiesAdd` | — | `dropbox` |
| `filesPropertiesOverwrite` | — | `dropbox` |
| `filesPropertiesRemove` | — | `dropbox` |
| `filesPropertiesTemplateGet` | — | `dropbox` |
| `filesPropertiesTemplateList` | — | `dropbox` |
| `filesPropertiesUpdate` | — | `dropbox` |
| `filesRestore` | Restore a file to a specific revision. | `dropbox` |
| `filesSaveUrl` | Save a specified URL into a file in user's Dropbox. | `dropbox` |
| `filesSaveUrlCheckJobStatus` | Check the status of a :route:`save_url` job. | `dropbox` |
| `filesSearch` | Searches for files and folders. | `dropbox` |
| `filesUpload` | Create a new file with the contents provided in the request. | `dropbox` |
| `filesUploadSessionAppend` | Append more data to an upload session. | `dropbox` |
| `filesUploadSessionAppendV2` | Append more data to an upload session. | `dropbox` |
| `filesUploadSessionFinish` | Finish an upload session and save the uploaded data to the given file path. | `dropbox` |
| `filesUploadSessionFinishBatch` | This route helps you commit many files at once into a user's Dropbox. | `dropbox` |
| `filesUploadSessionFinishBatchCheck` | Returns the status of an asynchronous job for :route:`upload_session/finish_batch`. | `dropbox` |
| `filesUploadSessionStart` | Upload sessions allow you to upload a single file in one or more requests, for example where the size of the file is greater than 150 MB. | `dropbox` |
| `paperDocsArchive` | Marks the given Paper doc as archived. | `dropbox` |
| `paperDocsCreate` | Creates a new Paper doc with the provided content. | `dropbox` |
| `paperDocsDownload` | Exports and downloads Paper doc either as HTML or markdown. | `dropbox` |
| `paperDocsFolderUsersList` | Lists the users who are explicitly invited to the Paper folder in which the Paper doc is contained. | `dropbox` |
| `paperDocsFolderUsersListContinue` | Once a cursor has been retrieved from :route:`docs/folder_users/list`, use this to paginate through all users on the Paper folder. | `dropbox` |
| `paperDocsGetFolderInfo` | Retrieves folder information for the given Paper doc. | `dropbox` |
| `paperDocsList` | Return the list of all Paper docs according to the argument specifications. | `dropbox` |
| `paperDocsListContinue` | Once a cursor has been retrieved from :route:`docs/list`, use this to paginate through all Paper doc. | `dropbox` |
| `paperDocsPermanentlyDelete` | Permanently deletes the given Paper doc. | `dropbox` |
| `paperDocsSharingPolicyGet` | Gets the default sharing policy for the given Paper doc. | `dropbox` |
| `paperDocsSharingPolicySet` | Sets the default sharing policy for the given Paper doc. | `dropbox` |
| `paperDocsUpdate` | Updates an existing Paper doc with the provided content. | `dropbox` |
| `paperDocsUsersAdd` | Allows an owner or editor to add users to a Paper doc or change their permissions using their email address or Dropbox account ID. | `dropbox` |
| `paperDocsUsersList` | Lists all users who visited the Paper doc or users with explicit access. | `dropbox` |
| `paperDocsUsersListContinue` | Once a cursor has been retrieved from :route:`docs/users/list`, use this to paginate through all users on the Paper doc. | `dropbox` |
| `paperDocsUsersRemove` | Allows an owner or editor to remove users from a Paper doc using their email address or Dropbox account ID. | `dropbox` |
| `sharingAddFileMember` | Adds specified members to a file. | `dropbox` |
| `sharingAddFolderMember` | Allows an owner or editor (if the ACL update policy allows) of a shared folder to add another member. | `dropbox` |
| `sharingChangeFileMemberAccess` | Identical to update_file_member but with less information returned. | `dropbox` |
| `sharingCheckJobStatus` | Returns the status of an asynchronous job. | `dropbox` |
| `sharingCheckRemoveMemberJobStatus` | Returns the status of an asynchronous job for sharing a folder. | `dropbox` |
| `sharingCheckShareJobStatus` | Returns the status of an asynchronous job for sharing a folder. | `dropbox` |
| `sharingCreateSharedLink` | Create a shared link. | `dropbox` |
| `sharingCreateSharedLinkWithSettings` | Create a shared link with custom settings. | `dropbox` |
| `sharingGetFileMetadata` | Returns shared file metadata. | `dropbox` |
| `sharingGetFileMetadataBatch` | Returns shared file metadata. | `dropbox` |
| `sharingGetFolderMetadata` | Returns shared folder metadata by its folder ID. | `dropbox` |
| `sharingGetSharedLinkFile` | Download the shared link's file from a user's Dropbox. | `dropbox` |
| `sharingGetSharedLinkMetadata` | Get the shared link's metadata. | `dropbox` |
| `sharingGetSharedLinks` | Returns a list of :type:`LinkMetadata` objects for this user, including collection links. | `dropbox` |
| `sharingListFileMembers` | Use to obtain the members who have been invited to a file, both inherited and uninherited members. | `dropbox` |
| `sharingListFileMembersBatch` | Get members of multiple files at once. | `dropbox` |
| `sharingListFileMembersContinue` | Once a cursor has been retrieved from :route:`list_file_members` or :route:`list_file_members/batch`, use this to paginate through all shared file members. | `dropbox` |
| `sharingListFolderMembers` | Returns shared folder membership by its folder ID. | `dropbox` |
| `sharingListFolderMembersContinue` | Once a cursor has been retrieved from :route:`list_folder_members`, use this to paginate through all shared folder members. | `dropbox` |
| `sharingListFolders` | Return the list of all shared folders the current user has access to. | `dropbox` |
| `sharingListFoldersContinue` | Once a cursor has been retrieved from :route:`list_folders`, use this to paginate through all shared folders. | `dropbox` |
| `sharingListMountableFolders` | Return the list of all shared folders the current user can mount or unmount. | `dropbox` |
| `sharingListMountableFoldersContinue` | Once a cursor has been retrieved from :route:`list_mountable_folders`, use this to paginate through all mountable shared folders. | `dropbox` |
| `sharingListReceivedFiles` | Returns a list of all files shared with current user. | `dropbox` |
| `sharingListReceivedFilesContinue` | Get more results with a cursor from :route:`list_received_files`. | `dropbox` |
| `sharingListSharedLinks` | List shared links of this user. | `dropbox` |
| `sharingModifySharedLinkSettings` | Modify the shared link's settings. | `dropbox` |
| `sharingMountFolder` | The current user mounts the designated folder. | `dropbox` |
| `sharingRelinquishFileMembership` | The current user relinquishes their membership in the designated file. | `dropbox` |
| `sharingRelinquishFolderMembership` | The current user relinquishes their membership in the designated shared folder and will no longer have access to the folder. | `dropbox` |
| `sharingRemoveFileMember` | Identical to remove_file_member_2 but with less information returned. | `dropbox` |
| `sharingRemoveFileMember2` | Removes a specified member from the file. | `dropbox` |
| `sharingRemoveFolderMember` | Allows an owner or editor (if the ACL update policy allows) of a shared folder to remove another member. | `dropbox` |
| `sharingRevokeSharedLink` | Revoke a shared link. | `dropbox` |
| `sharingSetAccessInheritance` | Change the inheritance policy of an existing Shared Folder. | `dropbox` |
| `sharingShareFolder` | Share a folder with collaborators. | `dropbox` |
| `sharingTransferFolder` | Transfer ownership of a shared folder to a member of the shared folder. | `dropbox` |
| `sharingUnmountFolder` | The current user unmounts the designated folder. | `dropbox` |
| `sharingUnshareFile` | Remove all members from this file. | `dropbox` |
| `sharingUnshareFolder` | Allows a shared folder owner to unshare the folder. | `dropbox` |
| `sharingUpdateFileMember` | Changes a member's access on a shared file. | `dropbox` |
| `sharingUpdateFolderMember` | Allows an owner or editor of a shared folder to update another member's permissions. | `dropbox` |
| `sharingUpdateFolderPolicy` | Update the sharing policies for a shared folder. | `dropbox` |
| `usersGetAccount` | Get information about a user's account. | `dropbox` |
| `usersGetAccountBatch` | Get information about multiple user accounts. | `dropbox` |
| `usersGetCurrentAccount` | Get information about the current user's account. | `dropbox` |
| `usersGetSpaceUsage` | Get the space usage information for the current user's account. | `dropbox` |

## Secrets

- `DROPBOX_OAUTH_APP` — OAuth2 app credentials for Dropbox

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'dropbox',
  package: '@pikku/addon-dropbox',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
