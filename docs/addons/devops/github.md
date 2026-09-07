---
format: md
title: Github
description: "GitHub integration for Pikku"
sidebar_label: Github
---

# Github

GitHub integration for Pikku

```bash
npm install @pikku/addon-github
```

Category: **DevOps** · Version: `0.1.8` · Package: `@pikku/addon-github`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `actionsAddCustomLabelsToSelfHostedRunnerForOrg` | Add custom labels to a self-hosted runner configured in an organization. | `github` |
| `actionsAddCustomLabelsToSelfHostedRunnerForRepo` | Add custom labels to a self-hosted runner configured in a repository. | `github` |
| `actionsAddSelectedRepoToOrgSecret` | Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `actionsAddSelectedRepoToOrgVariable` | Adds a repository to an organization variable that is available to selected repositories. | `github` |
| `actionsAddSelectedRepoToRequiredWorkflow` | Adds a repository to a required workflow. | `github` |
| `actionsApproveWorkflowRun` | Approves a workflow run for a pull request from a public fork of a first time contributor. | `github` |
| `actionsCancelWorkflowRun` | Cancels a workflow run using its `id`. | `github` |
| `actionsCreateEnvironmentVariable` | Create an environment variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsCreateOrgVariable` | Creates an organization variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsCreateOrUpdateEnvironmentSecret` | Creates or updates an environment secret with an encrypted value. | `github` |
| `actionsCreateOrUpdateOrgSecret` | Creates or updates an organization secret with an encrypted value. | `github` |
| `actionsCreateOrUpdateRepoSecret` | Creates or updates a repository secret with an encrypted value. | `github` |
| `actionsCreateRegistrationTokenForOrg` | Returns a token that you can pass to the `config` script. | `github` |
| `actionsCreateRegistrationTokenForRepo` | Returns a token that you can pass to the `config` script. | `github` |
| `actionsCreateRemoveTokenForOrg` | Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. | `github` |
| `actionsCreateRemoveTokenForRepo` | Returns a token that you can pass to remove a self-hosted runner from a repository. | `github` |
| `actionsCreateRepoVariable` | Creates a repository variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsCreateRequiredWorkflow` | Create a required workflow in an organization. | `github` |
| `actionsCreateWorkflowDispatch` | You can use this endpoint to manually trigger a GitHub Actions workflow run. | `github` |
| `actionsDeleteActionsCacheById` | Deletes a GitHub Actions cache for a repository, using a cache ID. | `github` |
| `actionsDeleteActionsCacheByKey` | Deletes one or more GitHub Actions caches for a repository, using a complete cache key. | `github` |
| `actionsDeleteArtifact` | Deletes an artifact for a workflow run. | `github` |
| `actionsDeleteEnvironmentSecret` | Deletes a secret in an environment using the secret name. | `github` |
| `actionsDeleteEnvironmentVariable` | Deletes an environment variable using the variable name. | `github` |
| `actionsDeleteOrgSecret` | Deletes a secret in an organization using the secret name. | `github` |
| `actionsDeleteOrgVariable` | Deletes an organization variable using the variable name. | `github` |
| `actionsDeleteRepoSecret` | Deletes a secret in a repository using the secret name. | `github` |
| `actionsDeleteRepoVariable` | Deletes a repository variable using the variable name. | `github` |
| `actionsDeleteRequiredWorkflow` | Deletes a required workflow configured in an organization. | `github` |
| `actionsDeleteSelfHostedRunnerFromOrg` | Forces the removal of a self-hosted runner from an organization. | `github` |
| `actionsDeleteSelfHostedRunnerFromRepo` | Forces the removal of a self-hosted runner from a repository. | `github` |
| `actionsDeleteWorkflowRun` | Delete a specific workflow run. | `github` |
| `actionsDeleteWorkflowRunLogs` | Deletes all logs for a workflow run. | `github` |
| `actionsDisableSelectedRepositoryGithubActionsOrganization` | Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. | `github` |
| `actionsDisableWorkflow` | Disables a workflow and sets the `state` of the workflow to `disabled_manually`. | `github` |
| `actionsDownloadArtifact` | Gets a redirect URL to download an archive for a repository. | `github` |
| `actionsDownloadJobLogsForWorkflowRun` | Gets a redirect URL to download a plain text file of logs for a workflow job. | `github` |
| `actionsDownloadWorkflowRunAttemptLogs` | Gets a redirect URL to download an archive of log files for a specific workflow run attempt. | `github` |
| `actionsDownloadWorkflowRunLogs` | Gets a redirect URL to download an archive of log files for a workflow run. | `github` |
| `actionsEnableSelectedRepositoryGithubActionsOrganization` | Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. | `github` |
| `actionsEnableWorkflow` | Enables a workflow and sets the `state` of the workflow to `active`. | `github` |
| `actionsGetActionsCacheList` | Lists the GitHub Actions caches for a repository. | `github` |
| `actionsGetActionsCacheUsage` | Gets GitHub Actions cache usage for a repository. | `github` |
| `actionsGetActionsCacheUsageByRepoForOrg` | Lists repositories and their GitHub Actions cache usage for an organization. | `github` |
| `actionsGetActionsCacheUsageForOrg` | Gets the total GitHub Actions cache usage for an organization. | `github` |
| `actionsGetAllowedActionsOrganization` | Gets the selected actions and reusable workflows that are allowed in an organization. | `github` |
| `actionsGetAllowedActionsRepository` | Gets the settings for selected actions and reusable workflows that are allowed in a repository. | `github` |
| `actionsGetArtifact` | Gets a specific artifact for a workflow run. | `github` |
| `actionsGetCustomOidcSubClaimForRepo` | Gets the customization template for an OpenID Connect (OIDC) subject claim. | `github` |
| `actionsGetEnvironmentPublicKey` | Get the public key for an environment, which you need to encrypt environment secrets. | `github` |
| `actionsGetEnvironmentSecret` | Gets a single environment secret without revealing its encrypted value. | `github` |
| `actionsGetEnvironmentVariable` | Gets a specific variable in an environment. | `github` |
| `actionsGetGithubActionsDefaultWorkflowPermissionsOrganization` | Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, as well as whether GitHub Actions can submit app… | `github` |
| `actionsGetGithubActionsDefaultWorkflowPermissionsRepository` | Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, as well as if GitHub Actions can submit approving p… | `github` |
| `actionsGetGithubActionsPermissionsOrganization` | Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization. | `github` |
| `actionsGetGithubActionsPermissionsRepository` | Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run… | `github` |
| `actionsGetJobForWorkflowRun` | Gets a specific job in a workflow run. | `github` |
| `actionsGetOrgPublicKey` | Gets your public key, which you need to encrypt secrets. | `github` |
| `actionsGetOrgSecret` | Gets a single organization secret without revealing its encrypted value. | `github` |
| `actionsGetOrgVariable` | Gets a specific variable in an organization. | `github` |
| `actionsGetPendingDeploymentsForRun` | Get all deployment environments for a workflow run that are waiting for protection rules to pass. | `github` |
| `actionsGetRepoPublicKey` | Gets your public key, which you need to encrypt secrets. | `github` |
| `actionsGetRepoRequiredWorkflow` | Gets a specific required workflow present in a repository. | `github` |
| `actionsGetRepoRequiredWorkflowUsage` | Gets the number of billable minutes used by a specific required workflow during the current billing cycle. | `github` |
| `actionsGetRepoSecret` | Gets a single repository secret without revealing its encrypted value. | `github` |
| `actionsGetRepoVariable` | Gets a specific variable in a repository. | `github` |
| `actionsGetRequiredWorkflow` | Get a required workflow configured in an organization. | `github` |
| `actionsGetReviewsForRun` | Anyone with read access to the repository can use this endpoint. | `github` |
| `actionsGetSelfHostedRunnerForOrg` | Gets a specific self-hosted runner configured in an organization. | `github` |
| `actionsGetSelfHostedRunnerForRepo` | Gets a specific self-hosted runner configured in a repository. | `github` |
| `actionsGetWorkflow` | Gets a specific workflow. | `github` |
| `actionsGetWorkflowAccessToRepository` | Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository. | `github` |
| `actionsGetWorkflowRun` | Gets a specific workflow run. | `github` |
| `actionsGetWorkflowRunAttempt` | Gets a specific workflow run attempt. | `github` |
| `actionsGetWorkflowRunUsage` | Gets the number of billable minutes and total run time for a specific workflow run. | `github` |
| `actionsGetWorkflowUsage` | Gets the number of billable minutes used by a specific workflow during the current billing cycle. | `github` |
| `actionsListArtifactsForRepo` | Lists all artifacts for a repository. | `github` |
| `actionsListEnvironmentSecrets` | Lists all secrets available in an environment without revealing their encrypted values. | `github` |
| `actionsListEnvironmentVariables` | Lists all environment variables. | `github` |
| `actionsListJobsForWorkflowRun` | Lists jobs for a workflow run. | `github` |
| `actionsListJobsForWorkflowRunAttempt` | Lists jobs for a specific workflow run attempt. | `github` |
| `actionsListLabelsForSelfHostedRunnerForOrg` | Lists all labels for a self-hosted runner configured in an organization. | `github` |
| `actionsListLabelsForSelfHostedRunnerForRepo` | Lists all labels for a self-hosted runner configured in a repository. | `github` |
| `actionsListOrgSecrets` | Lists all secrets available in an organization without revealing their encrypted values. | `github` |
| `actionsListOrgVariables` | Lists all organization variables. | `github` |
| `actionsListRepoRequiredWorkflows` | Lists the required workflows in a repository. | `github` |
| `actionsListRepoSecrets` | Lists all secrets available in a repository without revealing their encrypted values. | `github` |
| `actionsListRepoVariables` | Lists all repository variables. | `github` |
| `actionsListRepoWorkflows` | Lists the workflows in a repository. | `github` |
| `actionsListRequiredWorkflowRuns` | List all workflow runs for a required workflow. | `github` |
| `actionsListRequiredWorkflows` | List all required workflows in an organization. | `github` |
| `actionsListRunnerApplicationsForOrg` | Lists binaries for the runner application that you can download and run. | `github` |
| `actionsListRunnerApplicationsForRepo` | Lists binaries for the runner application that you can download and run. | `github` |
| `actionsListSelectedReposForOrgSecret` | Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. | `github` |
| `actionsListSelectedReposForOrgVariable` | Lists all repositories that can access an organization variable that is available to selected repositories. | `github` |
| `actionsListSelectedRepositoriesEnabledGithubActionsOrganization` | Lists the selected repositories that are enabled for GitHub Actions in an organization. | `github` |
| `actionsListSelectedRepositoriesRequiredWorkflow` | Lists the selected repositories that are configured for a required workflow in an organization. | `github` |
| `actionsListSelfHostedRunnersForOrg` | Lists all self-hosted runners configured in an organization. | `github` |
| `actionsListSelfHostedRunnersForRepo` | Lists all self-hosted runners configured in a repository. | `github` |
| `actionsListWorkflowRunArtifacts` | Lists artifacts for a workflow run. | `github` |
| `actionsListWorkflowRuns` | List all workflow runs for a workflow. | `github` |
| `actionsListWorkflowRunsForRepo` | Lists all workflow runs for a repository. | `github` |
| `actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg` | Remove all custom labels from a self-hosted runner configured in an organization. | `github` |
| `actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo` | Remove all custom labels from a self-hosted runner configured in a repository. | `github` |
| `actionsRemoveCustomLabelFromSelfHostedRunnerForOrg` | Remove a custom label from a self-hosted runner configured in an organization. | `github` |
| `actionsRemoveCustomLabelFromSelfHostedRunnerForRepo` | Remove a custom label from a self-hosted runner configured in a repository. | `github` |
| `actionsRemoveSelectedRepoFromOrgSecret` | Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `actionsRemoveSelectedRepoFromOrgVariable` | Removes a repository from an organization variable that is available to selected repositories. | `github` |
| `actionsRemoveSelectedRepoFromRequiredWorkflow` | Removes a repository from a required workflow. | `github` |
| `actionsReRunJobForWorkflowRun` | Re-run a job and its dependent jobs in a workflow run. | `github` |
| `actionsReRunWorkflow` | Re-runs your workflow run using its `id`. | `github` |
| `actionsReRunWorkflowFailedJobs` | Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. | `github` |
| `actionsReviewPendingDeploymentsForRun` | Approve or reject pending deployments that are waiting on approval by a required reviewer. | `github` |
| `actionsSetAllowedActionsOrganization` | Sets the actions and reusable workflows that are allowed in an organization. | `github` |
| `actionsSetAllowedActionsRepository` | Sets the actions and reusable workflows that are allowed in a repository. | `github` |
| `actionsSetCustomLabelsForSelfHostedRunnerForOrg` | Remove all previous custom labels and set the new custom labels for a specific self-hosted runner configured in an organization. | `github` |
| `actionsSetCustomLabelsForSelfHostedRunnerForRepo` | Remove all previous custom labels and set the new custom labels for a specific self-hosted runner configured in a repository. | `github` |
| `actionsSetCustomOidcSubClaimForRepo` | Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository. | `github` |
| `actionsSetGithubActionsDefaultWorkflowPermissionsOrganization` | Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions can submit approving… | `github` |
| `actionsSetGithubActionsDefaultWorkflowPermissionsRepository` | Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions can submit approving pul… | `github` |
| `actionsSetGithubActionsPermissionsOrganization` | Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization. | `github` |
| `actionsSetGithubActionsPermissionsRepository` | Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository. | `github` |
| `actionsSetSelectedReposForOrgSecret` | Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `actionsSetSelectedReposForOrgVariable` | Replaces all repositories for an organization variable that is available to selected repositories. | `github` |
| `actionsSetSelectedRepositoriesEnabledGithubActionsOrganization` | Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. | `github` |
| `actionsSetSelectedReposToRequiredWorkflow` | Sets the repositories for a required workflow that is required for selected repositories. | `github` |
| `actionsSetWorkflowAccessToRepository` | Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository. | `github` |
| `actionsUpdateEnvironmentVariable` | Updates an environment variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsUpdateOrgVariable` | Updates an organization variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsUpdateRepoVariable` | Updates a repository variable that you can reference in a GitHub Actions workflow. | `github` |
| `actionsUpdateRequiredWorkflow` | Update a required workflow in an organization. | `github` |
| `activityCheckRepoIsStarredByAuthenticatedUser` | — | `github` |
| `activityDeleteRepoSubscription` | This endpoint should only be used to stop watching a repository. | `github` |
| `activityDeleteThreadSubscription` | Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. | `github` |
| `activityGetFeeds` | GitHub provides several timeline resources in Atom) format. | `github` |
| `activityGetRepoSubscription` | — | `github` |
| `activityGetThread` | Gets information about a notification thread. | `github` |
| `activityGetThreadSubscriptionForAuthenticatedUser` | This checks to see if the current user is subscribed to a thread. | `github` |
| `activityListEventsForAuthenticatedUser` | If you are authenticated as the given user, you will see your private events. | `github` |
| `activityListNotificationsForAuthenticatedUser` | List all notifications for the current user, sorted by most recently updated. | `github` |
| `activityListOrgEventsForAuthenticatedUser` | This is the user's organization dashboard. | `github` |
| `activityListPublicEvents` | We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ag… | `github` |
| `activityListPublicEventsForRepoNetwork` | — | `github` |
| `activityListPublicEventsForUser` | — | `github` |
| `activityListPublicOrgEvents` | — | `github` |
| `activityListReceivedEventsForUser` | These are events that you've received by watching repos and following users. | `github` |
| `activityListReceivedPublicEventsForUser` | — | `github` |
| `activityListRepoEvents` | — | `github` |
| `activityListRepoNotificationsForAuthenticatedUser` | Lists all notifications for the current user in the specified repository. | `github` |
| `activityListReposStarredByAuthenticatedUser` | Lists repositories the authenticated user has starred. | `github` |
| `activityListReposStarredByUser` | Lists repositories a user has starred. | `github` |
| `activityListReposWatchedByUser` | Lists repositories a user is watching. | `github` |
| `activityListStargazersForRepo` | Lists the people that have starred the repository. | `github` |
| `activityListWatchedReposForAuthenticatedUser` | Lists repositories the authenticated user is watching. | `github` |
| `activityListWatchersForRepo` | Lists the people watching the specified repository. | `github` |
| `activityMarkNotificationsAsRead` | Marks all notifications as "read" for the current user. | `github` |
| `activityMarkRepoNotificationsAsRead` | Marks all notifications in a repository as "read" for the current user. | `github` |
| `activityMarkThreadAsRead` | Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub: | `github` |
| `activitySetRepoSubscription` | If you would like to watch a repository, set `subscribed` to `true`. | `github` |
| `activitySetThreadSubscription` | If you are watching a repository, you receive notifications for all threads by default. | `github` |
| `activityStarRepoForAuthenticatedUser` | Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. | `github` |
| `activityUnstarRepoForAuthenticatedUser` | — | `github` |
| `appsAddRepoToInstallationForAuthenticatedUser` | Add a single repository to an installation. | `github` |
| `appsCheckToken` | OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. | `github` |
| `appsCreateFromManifest` | Use this endpoint to complete the handshake necessary when implementing the GitHub App Manifest flow. | `github` |
| `appsCreateInstallationAccessToken` | Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual a… | `github` |
| `appsDeleteAuthorization` | OAuth application owners can revoke a grant for their OAuth application and a specific user. | `github` |
| `appsDeleteInstallation` | Uninstalls a GitHub App on a user, organization, or business account. | `github` |
| `appsDeleteToken` | OAuth application owners can revoke a single token for an OAuth application. | `github` |
| `appsGetAuthenticated` | Returns the GitHub App associated with the authentication credentials used. | `github` |
| `appsGetBySlug` | **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. | `github` |
| `appsGetInstallation` | Enables an authenticated GitHub App to find an installation's information using the installation id. | `github` |
| `appsGetOrgInstallation` | Enables an authenticated GitHub App to find the organization's installation information. | `github` |
| `appsGetRepoInstallation` | Enables an authenticated GitHub App to find the repository's installation information. | `github` |
| `appsGetSubscriptionPlanForAccount` | Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. | `github` |
| `appsGetSubscriptionPlanForAccountStubbed` | Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. | `github` |
| `appsGetUserInstallation` | Enables an authenticated GitHub App to find the user’s installation information. | `github` |
| `appsGetWebhookConfigForApp` | Returns the webhook configuration for a GitHub App. | `github` |
| `appsGetWebhookDelivery` | Returns a delivery for the webhook configured for a GitHub App. | `github` |
| `appsListAccountsForPlan` | Returns user and organization accounts associated with the specified plan, including free plans. | `github` |
| `appsListAccountsForPlanStubbed` | Returns repository and organization accounts associated with the specified plan, including free plans. | `github` |
| `appsListInstallationReposForAuthenticatedUser` | List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation. | `github` |
| `appsListInstallations` | You must use a JWT to access this endpoint. | `github` |
| `appsListInstallationsForAuthenticatedUser` | Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access. | `github` |
| `appsListPlans` | Lists all plans that are part of your GitHub Marketplace listing. | `github` |
| `appsListPlansStubbed` | Lists all plans that are part of your GitHub Marketplace listing. | `github` |
| `appsListReposAccessibleToInstallation` | List repositories that an app installation can access. | `github` |
| `appsListSubscriptionsForAuthenticatedUser` | Lists the active subscriptions for the authenticated user. | `github` |
| `appsListSubscriptionsForAuthenticatedUserStubbed` | Lists the active subscriptions for the authenticated user. | `github` |
| `appsListWebhookDeliveries` | Returns a list of webhook deliveries for the webhook configured for a GitHub App. | `github` |
| `appsRedeliverWebhookDelivery` | Redeliver a delivery for the webhook configured for a GitHub App. | `github` |
| `appsRemoveRepoFromInstallationForAuthenticatedUser` | Remove a single repository from an installation. | `github` |
| `appsResetToken` | OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. | `github` |
| `appsRevokeInstallationAccessToken` | Revokes the installation token you're using to authenticate as an installation and access this endpoint. | `github` |
| `appsScopeToken` | Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. | `github` |
| `appsSuspendInstallation` | Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. | `github` |
| `appsUnsuspendInstallation` | Removes a GitHub App installation suspension. | `github` |
| `appsUpdateWebhookConfigForApp` | Updates the webhook configuration for a GitHub App. | `github` |
| `billingGetGithubActionsBillingOrg` | Gets the summary of the free and paid GitHub Actions minutes used. | `github` |
| `billingGetGithubActionsBillingUser` | Gets the summary of the free and paid GitHub Actions minutes used. | `github` |
| `billingGetGithubPackagesBillingOrg` | Gets the free and paid storage used for GitHub Packages in gigabytes. | `github` |
| `billingGetGithubPackagesBillingUser` | Gets the free and paid storage used for GitHub Packages in gigabytes. | `github` |
| `billingGetSharedStorageBillingOrg` | Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages. | `github` |
| `billingGetSharedStorageBillingUser` | Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages. | `github` |
| `checksCreate` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksCreateSuite` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksGet` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksGetSuite` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksListAnnotations` | Lists annotations for a check run using the annotation `id`. | `github` |
| `checksListForRef` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksListForSuite` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksListSuitesForRef` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `checksRerequestRun` | Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. | `github` |
| `checksRerequestSuite` | Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. | `github` |
| `checksSetSuitesPreferences` | Changes the default automatic flow when creating check suites. | `github` |
| `checksUpdate` | **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. | `github` |
| `codeScanningDeleteAnalysis` | Deletes a specified code scanning analysis from a repository. | `github` |
| `codeScanningGetAlert` | Gets a single code scanning alert. | `github` |
| `codeScanningGetAnalysis` | Gets a specified code scanning analysis for a repository. | `github` |
| `codeScanningGetCodeqlDatabase` | Gets a CodeQL database for a language in a repository. | `github` |
| `codeScanningGetSarif` | Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. | `github` |
| `codeScanningListAlertInstances` | Lists all instances of the specified code scanning alert. | `github` |
| `codeScanningListAlertsForOrg` | Lists code scanning alerts for the default branch for all eligible repositories in an organization. | `github` |
| `codeScanningListAlertsForRepo` | Lists code scanning alerts. | `github` |
| `codeScanningListCodeqlDatabases` | Lists the CodeQL databases that are available in a repository. | `github` |
| `codeScanningListRecentAnalyses` | Lists the details of all code scanning analyses for a repository, starting with the most recent. | `github` |
| `codeScanningUpdateAlert` | Updates the status of a single code scanning alert. | `github` |
| `codeScanningUploadSarif` | Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. | `github` |
| `codesOfConductGetAllCodesOfConduct` | — | `github` |
| `codesOfConductGetConductCode` | — | `github` |
| `codespacesAddRepositoryForSecretForAuthenticatedUser` | Adds a repository to the selected repositories for a user's codespace secret. | `github` |
| `codespacesAddSelectedRepoToOrgSecret` | Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `codespacesCodespaceMachinesForAuthenticatedUser` | List the machine types a codespace can transition to use. | `github` |
| `codespacesCreateForAuthenticatedUser` | Creates a new codespace, owned by the authenticated user. | `github` |
| `codespacesCreateOrUpdateOrgSecret` | Creates or updates an organization secret with an encrypted value. | `github` |
| `codespacesCreateOrUpdateRepoSecret` | Creates or updates a repository secret with an encrypted value. | `github` |
| `codespacesCreateOrUpdateSecretForAuthenticatedUser` | Creates or updates a secret for a user's codespace with an encrypted value. | `github` |
| `codespacesCreateWithPrForAuthenticatedUser` | Creates a codespace owned by the authenticated user for the specified pull request. | `github` |
| `codespacesCreateWithRepoForAuthenticatedUser` | Creates a codespace owned by the authenticated user in the specified repository. | `github` |
| `codespacesDeleteCodespacesBillingUsers` | Codespaces for the specified users will no longer be billed to the organization. | `github` |
| `codespacesDeleteForAuthenticatedUser` | Deletes a user's codespace. | `github` |
| `codespacesDeleteFromOrganization` | Deletes a user's codespace. | `github` |
| `codespacesDeleteOrgSecret` | Deletes an organization secret using the secret name. | `github` |
| `codespacesDeleteRepoSecret` | Deletes a secret in a repository using the secret name. | `github` |
| `codespacesDeleteSecretForAuthenticatedUser` | Deletes a secret from a user's codespaces using the secret name. | `github` |
| `codespacesExportForAuthenticatedUser` | Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored. | `github` |
| `codespacesGetCodespacesForUserInOrg` | Lists the codespaces that a member of an organization has for repositories in that organization. | `github` |
| `codespacesGetExportDetailsForAuthenticatedUser` | Gets information about an export of a codespace. | `github` |
| `codespacesGetForAuthenticatedUser` | Gets information about a user's codespace. | `github` |
| `codespacesGetOrgPublicKey` | Gets a public key for an organization, which is required in order to encrypt secrets. | `github` |
| `codespacesGetOrgSecret` | Gets an organization secret without revealing its encrypted value. | `github` |
| `codespacesGetPublicKeyForAuthenticatedUser` | Gets your public key, which you need to encrypt secrets. | `github` |
| `codespacesGetRepoPublicKey` | Gets your public key, which you need to encrypt secrets. | `github` |
| `codespacesGetRepoSecret` | Gets a single repository secret without revealing its encrypted value. | `github` |
| `codespacesGetSecretForAuthenticatedUser` | Gets a secret available to a user's codespaces without revealing its encrypted value. | `github` |
| `codespacesListDevcontainersInRepositoryForAuthenticatedUser` | Lists the devcontainer.json files associated with a specified repository and the authenticated user. | `github` |
| `codespacesListForAuthenticatedUser` | Lists the authenticated user's codespaces. | `github` |
| `codespacesListInOrganization` | Lists the codespaces associated to a specified organization. | `github` |
| `codespacesListInRepositoryForAuthenticatedUser` | Lists the codespaces associated to a specified repository and the authenticated user. | `github` |
| `codespacesListOrgSecrets` | Lists all Codespaces secrets available at the organization-level without revealing their encrypted values. | `github` |
| `codespacesListRepoSecrets` | Lists all secrets available in a repository without revealing their encrypted values. | `github` |
| `codespacesListRepositoriesForSecretForAuthenticatedUser` | List the repositories that have been granted the ability to use a user's codespace secret. | `github` |
| `codespacesListSecretsForAuthenticatedUser` | Lists all secrets available for a user's Codespaces without revealing their encrypted values. | `github` |
| `codespacesListSelectedReposForOrgSecret` | Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. | `github` |
| `codespacesPreFlightWithRepoForAuthenticatedUser` | Gets the default attributes for codespaces created by the user with the repository. | `github` |
| `codespacesPublishForAuthenticatedUser` | Publishes an unpublished codespace, creating a new repository and assigning it to the codespace. | `github` |
| `codespacesRemoveRepositoryForSecretForAuthenticatedUser` | Removes a repository from the selected repositories for a user's codespace secret. | `github` |
| `codespacesRemoveSelectedRepoFromOrgSecret` | Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `codespacesRepoMachinesForAuthenticatedUser` | List the machine types available for a given repository based on its configuration. | `github` |
| `codespacesSetCodespacesBilling` | Sets which users can access codespaces in an organization. | `github` |
| `codespacesSetCodespacesBillingUsers` | Codespaces for the specified users will be billed to the organization. | `github` |
| `codespacesSetRepositoriesForSecretForAuthenticatedUser` | Select the repositories that will use a user's codespace secret. | `github` |
| `codespacesSetSelectedReposForOrgSecret` | Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `codespacesStartForAuthenticatedUser` | Starts a user's codespace. | `github` |
| `codespacesStopForAuthenticatedUser` | Stops a user's codespace. | `github` |
| `codespacesStopInOrganization` | Stops a user's codespace. | `github` |
| `codespacesUpdateForAuthenticatedUser` | Updates a codespace owned by the authenticated user. | `github` |
| `dependabotAddSelectedRepoToOrgSecret` | Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `dependabotCreateOrUpdateOrgSecret` | Creates or updates an organization secret with an encrypted value. | `github` |
| `dependabotCreateOrUpdateRepoSecret` | Creates or updates a repository secret with an encrypted value. | `github` |
| `dependabotDeleteOrgSecret` | Deletes a secret in an organization using the secret name. | `github` |
| `dependabotDeleteRepoSecret` | Deletes a secret in a repository using the secret name. | `github` |
| `dependabotGetAlert` | You must use an access token with the `security_events` scope to use this endpoint with private repositories. | `github` |
| `dependabotGetOrgPublicKey` | Gets your public key, which you need to encrypt secrets. | `github` |
| `dependabotGetOrgSecret` | Gets a single organization secret without revealing its encrypted value. | `github` |
| `dependabotGetRepoPublicKey` | Gets your public key, which you need to encrypt secrets. | `github` |
| `dependabotGetRepoSecret` | Gets a single repository secret without revealing its encrypted value. | `github` |
| `dependabotListAlertsForEnterprise` | Lists Dependabot alerts for repositories that are owned by the specified enterprise. | `github` |
| `dependabotListAlertsForOrg` | Lists Dependabot alerts for an organization. | `github` |
| `dependabotListAlertsForRepo` | You must use an access token with the `security_events` scope to use this endpoint with private repositories. | `github` |
| `dependabotListOrgSecrets` | Lists all secrets available in an organization without revealing their encrypted values. | `github` |
| `dependabotListRepoSecrets` | Lists all secrets available in a repository without revealing their encrypted values. | `github` |
| `dependabotListSelectedReposForOrgSecret` | Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. | `github` |
| `dependabotRemoveSelectedRepoFromOrgSecret` | Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `dependabotSetSelectedReposForOrgSecret` | Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. | `github` |
| `dependabotUpdateAlert` | You must use an access token with the `security_events` scope to use this endpoint with private repositories. | `github` |
| `dependencyGraphCreateRepositorySnapshot` | Create a new snapshot of a repository's dependencies. | `github` |
| `dependencyGraphDiffRange` | Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits. | `github` |
| `emojisGet` | Lists all the emojis available to use on GitHub. | `github` |
| `gistsCheckIsStarred` | — | `github` |
| `gistsCreate` | Allows you to add a new gist with one or more files. | `github` |
| `gistsCreateComment` | — | `github` |
| `gistsDelete` | — | `github` |
| `gistsDeleteComment` | — | `github` |
| `gistsFork` | — | `github` |
| `gistsGet` | — | `github` |
| `gistsGetComment` | — | `github` |
| `gistsGetRevision` | — | `github` |
| `gistsList` | Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists: | `github` |
| `gistsListComments` | — | `github` |
| `gistsListCommits` | — | `github` |
| `gistsListForks` | — | `github` |
| `gistsListForUser` | Lists public gists for the specified user: | `github` |
| `gistsListPublic` | List public gists sorted by most recently updated to least recently updated. | `github` |
| `gistsListStarred` | List the authenticated user's starred gists: | `github` |
| `gistsStar` | Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. | `github` |
| `gistsUnstar` | — | `github` |
| `gistsUpdate` | Allows you to update a gist's description and to update, delete, or rename gist files. | `github` |
| `gistsUpdateComment` | — | `github` |
| `gitCreateBlob` | — | `github` |
| `gitCreateCommit` | Creates a new Git commit object. | `github` |
| `gitCreateRef` | Creates a reference for your repository. | `github` |
| `gitCreateTag` | Note that creating a tag object does not create the reference that makes a tag in Git. | `github` |
| `gitCreateTree` | The tree creation API accepts nested entries. | `github` |
| `gitDeleteRef` | — | `github` |
| `gitGetBlob` | The `content` in the response will always be Base64 encoded. | `github` |
| `gitGetCommit` | Gets a Git commit object. | `github` |
| `gitGetRef` | Returns a single reference from your Git database. | `github` |
| `gitGetTag` | **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. | `github` |
| `gitGetTree` | Returns a single tree using the SHA1 value for that tree. | `github` |
| `gitignoreGetAllTemplates` | List all templates available to pass as an option when creating a repository. | `github` |
| `gitignoreGetTemplate` | The API also allows fetching the source of a single template. | `github` |
| `gitListMatchingRefs` | Returns an array of references from your Git database that match the supplied name. | `github` |
| `gitUpdateRef` | — | `github` |
| `interactionsGetRestrictionsForAuthenticatedUser` | Shows which type of GitHub user can interact with your public repositories and when the restriction expires. | `github` |
| `interactionsGetRestrictionsForOrg` | Shows which type of GitHub user can interact with this organization and when the restriction expires. | `github` |
| `interactionsGetRestrictionsForRepo` | Shows which type of GitHub user can interact with this repository and when the restriction expires. | `github` |
| `interactionsRemoveRestrictionsForAuthenticatedUser` | Removes any interaction restrictions from your public repositories. | `github` |
| `interactionsRemoveRestrictionsForOrg` | Removes all interaction restrictions from public repositories in the given organization. | `github` |
| `interactionsRemoveRestrictionsForRepo` | Removes all interaction restrictions from the given repository. | `github` |
| `interactionsSetRestrictionsForAuthenticatedUser` | Temporarily restricts which type of GitHub user can interact with your public repositories. | `github` |
| `interactionsSetRestrictionsForOrg` | Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. | `github` |
| `interactionsSetRestrictionsForRepo` | Temporarily restricts interactions to a certain type of GitHub user within the given repository. | `github` |
| `issuesAddAssignees` | Adds up to 10 assignees to an issue. | `github` |
| `issuesAddLabels` | — | `github` |
| `issuesCheckUserCanBeAssigned` | Checks if a user has permission to be assigned to an issue in this repository. | `github` |
| `issuesCheckUserCanBeAssignedToIssue` | Checks if a user has permission to be assigned to a specific issue. | `github` |
| `issuesCreate` | Any user with pull access to a repository can create an issue. | `github` |
| `issuesCreateComment` | This endpoint triggers notifications. | `github` |
| `issuesCreateLabel` | — | `github` |
| `issuesCreateMilestone` | — | `github` |
| `issuesDeleteComment` | — | `github` |
| `issuesDeleteLabel` | — | `github` |
| `issuesDeleteMilestone` | — | `github` |
| `issuesGet` | The API returns a `301 Moved Permanently` status if the issue was transferred to another repository. | `github` |
| `issuesGetComment` | — | `github` |
| `issuesGetEvent` | — | `github` |
| `issuesGetLabel` | — | `github` |
| `issuesGetMilestone` | — | `github` |
| `issuesList` | List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. | `github` |
| `issuesListAssignees` | Lists the available assignees for issues in a repository. | `github` |
| `issuesListComments` | Issue Comments are ordered by ascending ID. | `github` |
| `issuesListCommentsForRepo` | By default, Issue Comments are ordered by ascending ID. | `github` |
| `issuesListEvents` | — | `github` |
| `issuesListEventsForRepo` | — | `github` |
| `issuesListEventsForTimeline` | — | `github` |
| `issuesListForAuthenticatedUser` | List issues across owned and member repositories assigned to the authenticated user. | `github` |
| `issuesListForOrg` | List issues in an organization assigned to the authenticated user. | `github` |
| `issuesListForRepo` | List issues in a repository. | `github` |
| `issuesListLabelsForMilestone` | — | `github` |
| `issuesListLabelsForRepo` | — | `github` |
| `issuesListLabelsOnIssue` | — | `github` |
| `issuesListMilestones` | — | `github` |
| `issuesLock` | Users with push access can lock an issue or pull request's conversation. | `github` |
| `issuesRemoveAllLabels` | — | `github` |
| `issuesRemoveAssignees` | Removes one or more assignees from an issue. | `github` |
| `issuesRemoveLabel` | Removes the specified label from the issue, and returns the remaining labels on the issue. | `github` |
| `issuesSetLabels` | Removes any previous labels and sets the new labels for an issue. | `github` |
| `issuesUnlock` | Users with push access can unlock an issue's conversation. | `github` |
| `issuesUpdate` | Issue owners and users with push access can edit an issue. | `github` |
| `issuesUpdateComment` | — | `github` |
| `issuesUpdateLabel` | — | `github` |
| `issuesUpdateMilestone` | — | `github` |
| `licensesGet` | — | `github` |
| `licensesGetAllCommonlyUsed` | — | `github` |
| `licensesGetForRepo` | This method returns the contents of the repository's license file, if one is detected. | `github` |
| `markdownRender` | — | `github` |
| `markdownRenderRaw` | You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. | `github` |
| `metaGet` | Returns meta information about GitHub, including a list of GitHub's IP addresses. | `github` |
| `metaGetAllVersions` | Get all supported GitHub API versions. | `github` |
| `metaGetOctocat` | Get the octocat as ASCII art | `github` |
| `metaGetZen` | Get a random sentence from the Zen of GitHub | `github` |
| `metaRoot` | Get Hypermedia links to resources accessible in GitHub's REST API | `github` |
| `migrationsCancelImport` | Stop an import for a repository. | `github` |
| `migrationsDeleteArchiveForAuthenticatedUser` | Deletes a previous migration archive. | `github` |
| `migrationsDeleteArchiveForOrg` | Deletes a previous migration archive. | `github` |
| `migrationsDownloadArchiveForOrg` | Fetches the URL to a migration archive. | `github` |
| `migrationsGetArchiveForAuthenticatedUser` | Fetches the URL to download the migration archive as a `tar.gz` file. | `github` |
| `migrationsGetCommitAuthors` | Each type of source control system represents authors in a different way. | `github` |
| `migrationsGetImportStatus` | View the progress of an import. | `github` |
| `migrationsGetLargeFiles` | List files larger than 100MB found during the import | `github` |
| `migrationsGetStatusForAuthenticatedUser` | Fetches a single user migration. | `github` |
| `migrationsGetStatusForOrg` | Fetches the status of a migration. | `github` |
| `migrationsListForAuthenticatedUser` | Lists all migrations a user has started. | `github` |
| `migrationsListForOrg` | Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API). | `github` |
| `migrationsListReposForAuthenticatedUser` | Lists all the repositories for this user migration. | `github` |
| `migrationsListReposForOrg` | List all the repositories for this organization migration. | `github` |
| `migrationsMapCommitAuthor` | Update an author's identity for the import. | `github` |
| `migrationsSetLfsPreference` | You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. | `github` |
| `migrationsStartForAuthenticatedUser` | Initiates the generation of a user migration archive. | `github` |
| `migrationsStartForOrg` | Initiates the generation of a migration archive. | `github` |
| `migrationsStartImport` | Start a source import to a GitHub repository using GitHub Importer. | `github` |
| `migrationsUnlockRepoForAuthenticatedUser` | Unlocks a repository. | `github` |
| `migrationsUnlockRepoForOrg` | Unlocks a repository that was locked for migration. | `github` |
| `migrationsUpdateImport` | An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. | `github` |
| `oidcGetOidcCustomSubTemplateForOrg` | Gets the customization template for an OpenID Connect (OIDC) subject claim. | `github` |
| `oidcUpdateOidcCustomSubTemplateForOrg` | Creates or updates the customization template for an OpenID Connect (OIDC) subject claim. | `github` |
| `orgsAddSecurityManagerTeam` | Adds a team as a security manager for an organization. | `github` |
| `orgsBlockUser` | — | `github` |
| `orgsCancelInvitation` | Cancel an organization invitation. | `github` |
| `orgsCheckBlockedUser` | — | `github` |
| `orgsCheckMembershipForUser` | Check if a user is, publicly or privately, a member of the organization. | `github` |
| `orgsCheckPublicMembershipForUser` | — | `github` |
| `orgsConvertMemberToOutsideCollaborator` | When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. | `github` |
| `orgsCreateInvitation` | Invite people to an organization by using their GitHub user ID or their email address. | `github` |
| `orgsCreateWebhook` | Here's how you can create a hook that posts payloads in JSON format: | `github` |
| `orgsDeleteWebhook` | — | `github` |
| `orgsEnableOrDisableSecurityProductOnAllOrgRepos` | Enables or disables the specified security feature for all repositories in an organization. | `github` |
| `orgsGet` | To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. | `github` |
| `orgsGetMembershipForAuthenticatedUser` | — | `github` |
| `orgsGetMembershipForUser` | In order to get a user's membership with an organization, the authenticated user must be an organization member. | `github` |
| `orgsGetWebhook` | Returns a webhook configured in an organization. | `github` |
| `orgsGetWebhookConfigForOrg` | Returns the webhook configuration for an organization. | `github` |
| `orgsGetWebhookDelivery` | Returns a delivery for a webhook configured in an organization. | `github` |
| `orgsList` | Lists all organizations, in the order that they were created on GitHub. | `github` |
| `orgsListAppInstallations` | Lists all GitHub Apps in an organization. | `github` |
| `orgsListBlockedUsers` | List the users blocked by an organization. | `github` |
| `orgsListFailedInvitations` | The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure. | `github` |
| `orgsListForAuthenticatedUser` | List organizations for the authenticated user. | `github` |
| `orgsListForUser` | List public organization memberships for the specified user. | `github` |
| `orgsListInvitationTeams` | List all teams associated with an invitation. | `github` |
| `orgsListMembers` | List all users who are members of an organization. | `github` |
| `orgsListMembershipsForAuthenticatedUser` | — | `github` |
| `orgsListOutsideCollaborators` | List all users who are outside collaborators of an organization. | `github` |
| `orgsListPendingInvitations` | The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `bi… | `github` |
| `orgsListPublicMembers` | Members of an organization can choose to have their membership publicized or not. | `github` |
| `orgsListSecurityManagerTeams` | Lists teams that are security managers for an organization. | `github` |
| `orgsListWebhookDeliveries` | Returns a list of webhook deliveries for a webhook configured in an organization. | `github` |
| `orgsListWebhooks` | — | `github` |
| `orgsPingWebhook` | This will trigger a ping event to be sent to the hook. | `github` |
| `orgsRedeliverWebhookDelivery` | Redeliver a delivery for a webhook configured in an organization. | `github` |
| `orgsRemoveMember` | Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories. | `github` |
| `orgsRemoveMembershipForUser` | In order to remove a user's membership with an organization, the authenticated user must be an organization owner. | `github` |
| `orgsRemoveOutsideCollaborator` | Removing a user from this list will remove them from all the organization's repositories. | `github` |
| `orgsRemovePublicMembershipForAuthenticatedUser` | — | `github` |
| `orgsRemoveSecurityManagerTeam` | Removes the security manager role from a team for an organization. | `github` |
| `orgsSetMembershipForUser` | Only authenticated organization owners can add a member to the organization or update the member's role. | `github` |
| `orgsSetPublicMembershipForAuthenticatedUser` | The user can publicize their own membership. | `github` |
| `orgsUnblockUser` | — | `github` |
| `orgsUpdate` | **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. | `github` |
| `orgsUpdateMembershipForAuthenticatedUser` | — | `github` |
| `orgsUpdateWebhook` | Updates a webhook configured in an organization. | `github` |
| `orgsUpdateWebhookConfigForOrg` | Updates the webhook configuration for an organization. | `github` |
| `packagesDeletePackageForAuthenticatedUser` | Deletes a package owned by the authenticated user. | `github` |
| `packagesDeletePackageForOrg` | Deletes an entire package in an organization. | `github` |
| `packagesDeletePackageForUser` | Deletes an entire package for a user. | `github` |
| `packagesDeletePackageVersionForAuthenticatedUser` | Deletes a specific package version for a package owned by the authenticated user. | `github` |
| `packagesDeletePackageVersionForOrg` | Deletes a specific package version in an organization. | `github` |
| `packagesDeletePackageVersionForUser` | Deletes a specific package version for a user. | `github` |
| `packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser` | Lists package versions for a package owned by the authenticated user. | `github` |
| `packagesGetAllPackageVersionsForPackageOwnedByOrg` | Lists package versions for a package owned by an organization. | `github` |
| `packagesGetAllPackageVersionsForPackageOwnedByUser` | Lists package versions for a public package owned by a specified user. | `github` |
| `packagesGetPackageForAuthenticatedUser` | Gets a specific package for a package owned by the authenticated user. | `github` |
| `packagesGetPackageForOrganization` | Gets a specific package in an organization. | `github` |
| `packagesGetPackageForUser` | Gets a specific package metadata for a public package owned by a user. | `github` |
| `packagesGetPackageVersionForAuthenticatedUser` | Gets a specific package version for a package owned by the authenticated user. | `github` |
| `packagesGetPackageVersionForOrganization` | Gets a specific package version in an organization. | `github` |
| `packagesGetPackageVersionForUser` | Gets a specific package version for a public package owned by a specified user. | `github` |
| `packagesListPackagesForAuthenticatedUser` | Lists packages owned by the authenticated user within the user's namespace. | `github` |
| `packagesListPackagesForOrganization` | Lists packages in an organization readable by the user. | `github` |
| `packagesListPackagesForUser` | Lists all packages in a user's namespace for which the requesting user has access. | `github` |
| `packagesRestorePackageForAuthenticatedUser` | Restores a package owned by the authenticated user. | `github` |
| `packagesRestorePackageForOrg` | Restores an entire package in an organization. | `github` |
| `packagesRestorePackageForUser` | Restores an entire package for a user. | `github` |
| `packagesRestorePackageVersionForAuthenticatedUser` | Restores a package version owned by the authenticated user. | `github` |
| `packagesRestorePackageVersionForOrg` | Restores a specific package version in an organization. | `github` |
| `packagesRestorePackageVersionForUser` | Restores a specific package version for a user. | `github` |
| `projectsAddCollaborator` | Adds a collaborator to an organization project and sets their permission level. | `github` |
| `projectsCreateCard` | — | `github` |
| `projectsCreateColumn` | — | `github` |
| `projectsCreateForAuthenticatedUser` | Creates a user project board. | `github` |
| `projectsCreateForOrg` | Creates an organization project board. | `github` |
| `projectsCreateForRepo` | Creates a repository project board. | `github` |
| `projectsDelete` | Deletes a project board. | `github` |
| `projectsDeleteCard` | — | `github` |
| `projectsDeleteColumn` | — | `github` |
| `projectsGet` | Gets a project by its `id`. | `github` |
| `projectsGetCard` | — | `github` |
| `projectsGetColumn` | — | `github` |
| `projectsGetPermissionForUser` | Returns the collaborator's permission level for an organization project. | `github` |
| `projectsListCards` | — | `github` |
| `projectsListCollaborators` | Lists the collaborators for an organization project. | `github` |
| `projectsListColumns` | — | `github` |
| `projectsListForOrg` | Lists the projects in an organization. | `github` |
| `projectsListForRepo` | Lists the projects in a repository. | `github` |
| `projectsListForUser` | — | `github` |
| `projectsMoveCard` | — | `github` |
| `projectsMoveColumn` | — | `github` |
| `projectsRemoveCollaborator` | Removes a collaborator from an organization project. | `github` |
| `projectsUpdate` | Updates a project board's information. | `github` |
| `projectsUpdateCard` | — | `github` |
| `projectsUpdateColumn` | — | `github` |
| `pullsCheckIfMerged` | — | `github` |
| `pullsCreate` | Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plan… | `github` |
| `pullsCreateReplyForReviewComment` | Creates a reply to a review comment for a pull request. | `github` |
| `pullsCreateReview` | This endpoint triggers notifications. | `github` |
| `pullsCreateReviewComment` | Creates a review comment in the pull request diff. | `github` |
| `pullsDeletePendingReview` | — | `github` |
| `pullsDeleteReviewComment` | Deletes a review comment. | `github` |
| `pullsDismissReview` | **Note:** To dismiss a pull request review on a protected branch, you must be a repository administrator or be included in the list of people or teams who can… | `github` |
| `pullsGet` | Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plan… | `github` |
| `pullsGetReview` | — | `github` |
| `pullsGetReviewComment` | Provides details for a review comment. | `github` |
| `pullsList` | Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plan… | `github` |
| `pullsListCommentsForReview` | List comments for a specific pull request review. | `github` |
| `pullsListCommits` | Lists a maximum of 250 commits for a pull request. | `github` |
| `pullsListFiles` | **Note:** Responses include a maximum of 3000 files. | `github` |
| `pullsListRequestedReviewers` | Gets the users or teams whose review is requested for a pull request. | `github` |
| `pullsListReviewComments` | Lists all review comments for a pull request. | `github` |
| `pullsListReviewCommentsForRepo` | Lists review comments for all pull requests in a repository. | `github` |
| `pullsListReviews` | The list of reviews returns in chronological order. | `github` |
| `pullsMerge` | This endpoint triggers notifications. | `github` |
| `pullsRemoveRequestedReviewers` | — | `github` |
| `pullsRequestReviewers` | This endpoint triggers notifications. | `github` |
| `pullsSubmitReview` | Submits a pending review for a pull request. | `github` |
| `pullsUpdate` | Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plan… | `github` |
| `pullsUpdateBranch` | Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch. | `github` |
| `pullsUpdateReview` | Update the review summary comment with new text. | `github` |
| `pullsUpdateReviewComment` | Enables you to edit a review comment. | `github` |
| `rateLimitGet` | **Note:** Accessing this endpoint does not count against your REST API rate limit. | `github` |
| `reactionsCreateForCommitComment` | Create a reaction to a commit comment. | `github` |
| `reactionsCreateForIssue` | Create a reaction to an issue. | `github` |
| `reactionsCreateForIssueComment` | Create a reaction to an issue comment. | `github` |
| `reactionsCreateForPullRequestReviewComment` | Create a reaction to a pull request review comment. | `github` |
| `reactionsCreateForRelease` | Create a reaction to a release. | `github` |
| `reactionsCreateForTeamDiscussionCommentInOrg` | Create a reaction to a team discussion comment. | `github` |
| `reactionsCreateForTeamDiscussionInOrg` | Create a reaction to a team discussion. | `github` |
| `reactionsDeleteForCommitComment` | **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id… | `github` |
| `reactionsDeleteForIssue` | **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id… | `github` |
| `reactionsDeleteForIssueComment` | **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reaction… | `github` |
| `reactionsDeleteForPullRequestComment` | **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:react… | `github` |
| `reactionsDeleteForRelease` | **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reac… | `github` |
| `reactionsDeleteForTeamDiscussion` | **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:dis… | `github` |
| `reactionsDeleteForTeamDiscussionComment` | **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:dis… | `github` |
| `reactionsListForCommitComment` | List the reactions to a commit comment. | `github` |
| `reactionsListForIssue` | List the reactions to an issue. | `github` |
| `reactionsListForIssueComment` | List the reactions to an issue comment. | `github` |
| `reactionsListForPullRequestReviewComment` | List the reactions to a pull request review comment. | `github` |
| `reactionsListForRelease` | List the reactions to a release. | `github` |
| `reactionsListForTeamDiscussionCommentInOrg` | List the reactions to a team discussion comment. | `github` |
| `reactionsListForTeamDiscussionInOrg` | List the reactions to a team discussion. | `github` |
| `reposAcceptInvitationForAuthenticatedUser` | — | `github` |
| `reposAddAppAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposAddCollaborator` | This endpoint triggers notifications. | `github` |
| `reposAddStatusCheckContexts` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposAddTeamAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposAddUserAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposCheckCollaborator` | For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization… | `github` |
| `reposCheckVulnerabilityAlerts` | Shows whether dependency alerts are enabled or disabled for a repository. | `github` |
| `reposCodeownersErrors` | List any syntax errors that are detected in the CODEOWNERS file. | `github` |
| `reposCompareCommits` | Compares two commits against one another. | `github` |
| `reposCreateAutolink` | Users with admin access to the repository can create an autolink. | `github` |
| `reposCreateCommitComment` | Create a comment for a commit using its `:commit_sha`. | `github` |
| `reposCreateCommitSignatureProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposCreateCommitStatus` | Users with push access in a repository can create commit statuses for a given SHA. | `github` |
| `reposCreateDeployKey` | You can create a read-only deploy key. | `github` |
| `reposCreateDeployment` | Deployments offer a few configurable parameters with certain defaults. | `github` |
| `reposCreateDeploymentBranchPolicy` | Creates a deployment branch policy for an environment. | `github` |
| `reposCreateDeploymentStatus` | Users with `push` access can create deployment statuses for a given deployment. | `github` |
| `reposCreateDispatchEvent` | You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Act… | `github` |
| `reposCreateForAuthenticatedUser` | Creates a new repository for the authenticated user. | `github` |
| `reposCreateFork` | Create a fork for the authenticated user. | `github` |
| `reposCreateInOrg` | Creates a new repository in the specified organization. | `github` |
| `reposCreateOrUpdateEnvironment` | Create or update an environment with protection rules, such as required reviewers. | `github` |
| `reposCreateOrUpdateFileContents` | Creates a new file or replaces an existing file in a repository. | `github` |
| `reposCreatePagesDeployment` | Create a GitHub Pages deployment for a repository. | `github` |
| `reposCreatePagesSite` | Configures a GitHub Pages site. | `github` |
| `reposCreateRelease` | Users with push access to the repository can create a release. | `github` |
| `reposCreateTagProtection` | This creates a tag protection state for a repository. | `github` |
| `reposCreateUsingTemplate` | Creates a new repository using a repository template. | `github` |
| `reposCreateWebhook` | Repositories can have multiple webhooks installed. | `github` |
| `reposDeclineInvitationForAuthenticatedUser` | — | `github` |
| `reposDelete` | Deleting a repository requires admin access. | `github` |
| `reposDeleteAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposDeleteAdminBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposDeleteAnEnvironment` | You must authenticate using an access token with the repo scope to use this endpoint. | `github` |
| `reposDeleteAutolink` | This deletes a single autolink reference by ID that was configured for the given repository. | `github` |
| `reposDeleteBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposDeleteCommitComment` | — | `github` |
| `reposDeleteCommitSignatureProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposDeleteDeployKey` | Deploy keys are immutable. | `github` |
| `reposDeleteDeployment` | If the repository only has one deployment, you can delete the deployment regardless of its status. | `github` |
| `reposDeleteDeploymentBranchPolicy` | Deletes a deployment branch policy for an environment. | `github` |
| `reposDeleteFile` | Deletes a file in a repository. | `github` |
| `reposDeleteInvitation` | — | `github` |
| `reposDeletePagesSite` | Deletes a GitHub Pages site. | `github` |
| `reposDeletePullRequestReviewProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposDeleteRelease` | Users with push access to the repository can delete a release. | `github` |
| `reposDeleteReleaseAsset` | — | `github` |
| `reposDeleteTagProtection` | This deletes a tag protection state for a repository. | `github` |
| `reposDeleteWebhook` | — | `github` |
| `reposDisableAutomatedSecurityFixes` | Disables automated security fixes for a repository. | `github` |
| `reposDisableLfsForRepo` | Disables Git LFS for a repository. | `github` |
| `reposDisableVulnerabilityAlerts` | Disables dependency alerts and the dependency graph for a repository. | `github` |
| `reposDownloadTarballArchive` | Gets a redirect URL to download a tar archive for a repository. | `github` |
| `reposDownloadZipballArchive` | Gets a redirect URL to download a zip archive for a repository. | `github` |
| `reposEnableAutomatedSecurityFixes` | Enables automated security fixes for a repository. | `github` |
| `reposEnableLfsForRepo` | Enables Git LFS for a repository. | `github` |
| `reposEnableVulnerabilityAlerts` | Enables dependency alerts and the dependency graph for a repository. | `github` |
| `reposGenerateReleaseNotes` | Generate a name and body describing a release. | `github` |
| `reposGet` | The `parent` and `source` objects are present when the repository is a fork. | `github` |
| `reposGetAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetAdminBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetAllEnvironments` | Lists the environments for a repository. | `github` |
| `reposGetAllStatusCheckContexts` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetAllTopics` | — | `github` |
| `reposGetAppsWithAccessToProtectedBranch` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetAutolink` | This returns a single autolink reference by ID that was configured for the given repository. | `github` |
| `reposGetBranch` | — | `github` |
| `reposGetBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetClones` | Get the total number of clones and breakdown per day or week for the last 14 days. | `github` |
| `reposGetCodeFrequencyStats` | Returns a weekly aggregate of the number of additions and deletions pushed to a repository. | `github` |
| `reposGetCollaboratorPermissionLevel` | Checks the repository permission of a collaborator. | `github` |
| `reposGetCombinedStatusForRef` | Users with pull access in a repository can access a combined view of commit statuses for a given ref. | `github` |
| `reposGetCommit` | Returns the contents of a single commit reference. | `github` |
| `reposGetCommitActivityStats` | Returns the last year of commit activity grouped by week. | `github` |
| `reposGetCommitComment` | — | `github` |
| `reposGetCommitSignatureProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetCommunityProfileMetrics` | Returns all community profile metrics for a repository. | `github` |
| `reposGetContent` | Gets the contents of a file or directory in a repository. | `github` |
| `reposGetContributorsStats` | Returns the `total` number of commits authored by the contributor. | `github` |
| `reposGetDeployKey` | — | `github` |
| `reposGetDeployment` | — | `github` |
| `reposGetDeploymentBranchPolicy` | Gets a deployment branch policy for an environment. | `github` |
| `reposGetDeploymentStatus` | Users with pull access can view a deployment status for a deployment: | `github` |
| `reposGetEnvironment` | **Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "Get a deployment branch policy." Anyone… | `github` |
| `reposGetLatestPagesBuild` | — | `github` |
| `reposGetLatestRelease` | View the latest published full release for the repository. | `github` |
| `reposGetPages` | — | `github` |
| `reposGetPagesBuild` | — | `github` |
| `reposGetPagesHealthCheck` | Gets a health check of the DNS settings for the `CNAME` record configured for a repository's GitHub Pages. | `github` |
| `reposGetParticipationStats` | Returns the total commit counts for the `owner` and total commit counts in `all`. | `github` |
| `reposGetPullRequestReviewProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetPunchCardStats` | Each array contains the day number, hour number, and number of commits: * `0-6`: Sunday - Saturday * `0-23`: Hour of day * Number of commits For example, `[2,… | `github` |
| `reposGetReadme` | Gets the preferred README for a repository. | `github` |
| `reposGetReadmeInDirectory` | Gets the README from a repository directory. | `github` |
| `reposGetRelease` | **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. | `github` |
| `reposGetReleaseAsset` | To download the asset's binary content, set the `Accept` header of the request to `application/octet-stream`. | `github` |
| `reposGetReleaseByTag` | Get a published release with the specified tag. | `github` |
| `reposGetStatusChecksProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetTeamsWithAccessToProtectedBranch` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetTopPaths` | Get the top 10 popular contents over the last 14 days. | `github` |
| `reposGetTopReferrers` | Get the top 10 referrers over the last 14 days. | `github` |
| `reposGetUsersWithAccessToProtectedBranch` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposGetViews` | Get the total number of views and breakdown per day or week for the last 14 days. | `github` |
| `reposGetWebhook` | Returns a webhook configured in a repository. | `github` |
| `reposGetWebhookConfigForRepo` | Returns the webhook configuration for a repository. | `github` |
| `reposGetWebhookDelivery` | Returns a delivery for a webhook configured in a repository. | `github` |
| `reposListAutolinks` | This returns a list of autolinks configured for the given repository. | `github` |
| `reposListBranches` | — | `github` |
| `reposListBranchesForHeadCommit` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposListCollaborators` | For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization… | `github` |
| `reposListCommentsForCommit` | Use the `:commit_sha` to specify the commit that will have its comments listed. | `github` |
| `reposListCommitCommentsForRepo` | Commit Comments use these custom media types. | `github` |
| `reposListCommits` | **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. | `github` |
| `reposListCommitStatusesForRef` | Users with pull access in a repository can view commit statuses for a given ref. | `github` |
| `reposListContributors` | Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. | `github` |
| `reposListDeployKeys` | — | `github` |
| `reposListDeploymentBranchPolicies` | Lists the deployment branch policies for an environment. | `github` |
| `reposListDeployments` | Simple filtering of deployments is available via query parameters: | `github` |
| `reposListDeploymentStatuses` | Users with pull access can view deployment statuses for a deployment: | `github` |
| `reposListForAuthenticatedUser` | Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access. | `github` |
| `reposListForks` | — | `github` |
| `reposListForOrg` | Lists repositories for the specified organization. | `github` |
| `reposListForUser` | Lists public repositories for the specified user. | `github` |
| `reposListInvitations` | When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations. | `github` |
| `reposListInvitationsForAuthenticatedUser` | When authenticating as a user, this endpoint will list all currently open repository invitations for that user. | `github` |
| `reposListLanguages` | Lists languages for the specified repository. | `github` |
| `reposListPagesBuilds` | — | `github` |
| `reposListPublic` | Lists all public repositories in the order that they were created. | `github` |
| `reposListPullRequestsAssociatedWithCommit` | Lists the merged pull request that introduced the commit to the repository. | `github` |
| `reposListReleaseAssets` | — | `github` |
| `reposListReleases` | This returns a list of releases, which does not include regular Git tags that have not been associated with a release. | `github` |
| `reposListTagProtection` | This returns the tag protection states of a repository. | `github` |
| `reposListTags` | — | `github` |
| `reposListTeams` | — | `github` |
| `reposListWebhookDeliveries` | Returns a list of webhook deliveries for a webhook configured in a repository. | `github` |
| `reposListWebhooks` | Lists webhooks for a repository. | `github` |
| `reposMerge` | — | `github` |
| `reposMergeUpstream` | Sync a branch of a forked repository to keep it up-to-date with the upstream repository. | `github` |
| `reposPingWebhook` | This will trigger a ping event to be sent to the hook. | `github` |
| `reposRedeliverWebhookDelivery` | Redeliver a webhook delivery for a webhook configured in a repository. | `github` |
| `reposRemoveAppAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposRemoveCollaborator` | — | `github` |
| `reposRemoveStatusCheckContexts` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposRemoveStatusCheckProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposRemoveTeamAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposRemoveUserAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposRenameBranch` | Renames a branch in a repository. | `github` |
| `reposReplaceAllTopics` | — | `github` |
| `reposRequestPagesBuild` | You can request that your site be built from the latest revision on the default branch. | `github` |
| `reposSetAdminBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposSetAppAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposSetStatusCheckContexts` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposSetTeamAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposSetUserAccessRestrictions` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposTestPushWebhook` | This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. | `github` |
| `reposTransfer` | A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. | `github` |
| `reposUpdate` | **Note**: To edit a repository's topics, use the Replace all repository topics endpoint. | `github` |
| `reposUpdateBranchProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposUpdateCommitComment` | — | `github` |
| `reposUpdateDeploymentBranchPolicy` | Updates a deployment branch policy for an environment. | `github` |
| `reposUpdateInformationAboutPagesSite` | Updates information for a GitHub Pages site. | `github` |
| `reposUpdateInvitation` | — | `github` |
| `reposUpdatePullRequestReviewProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposUpdateRelease` | Users with push access to the repository can edit a release. | `github` |
| `reposUpdateReleaseAsset` | Users with push access to the repository can edit a release asset. | `github` |
| `reposUpdateStatusCheckProtection` | Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub… | `github` |
| `reposUpdateWebhook` | Updates a webhook configured in a repository. | `github` |
| `reposUpdateWebhookConfigForRepo` | Updates the webhook configuration for a repository. | `github` |
| `reposUploadReleaseAsset` | This endpoint makes use of a Hypermedia relation to determine which URL to access. | `github` |
| `searchCode` | Searches for query terms inside of a file. | `github` |
| `searchCommits` | Find commits via various criteria on the default branch (usually `main`). | `github` |
| `searchIssuesAndPullRequests` | Find issues by state and keyword. | `github` |
| `searchLabels` | Find labels in a repository with names or descriptions that match search keywords. | `github` |
| `searchRepos` | Find repositories via various criteria. | `github` |
| `searchTopics` | Find topics via various criteria. | `github` |
| `searchUsers` | Find users via various criteria. | `github` |
| `secretScanningGetAlert` | Gets a single secret scanning alert detected in an eligible repository. | `github` |
| `secretScanningListAlertsForEnterprise` | Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest. | `github` |
| `secretScanningListAlertsForOrg` | Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest. | `github` |
| `secretScanningListAlertsForRepo` | Lists secret scanning alerts for an eligible repository, from newest to oldest. | `github` |
| `secretScanningListLocationsForAlert` | Lists all locations for a given secret scanning alert for an eligible repository. | `github` |
| `secretScanningUpdateAlert` | Updates the status of a secret scanning alert in an eligible repository. | `github` |
| `teamsAddOrUpdateMembershipForUserInOrg` | Adds an organization member to a team. | `github` |
| `teamsAddOrUpdateProjectPermissionsInOrg` | Adds an organization project to a team. | `github` |
| `teamsAddOrUpdateRepoPermissionsInOrg` | To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be abl… | `github` |
| `teamsCheckPermissionsForProjectInOrg` | Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. | `github` |
| `teamsCheckPermissionsForRepoInOrg` | Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. | `github` |
| `teamsCreate` | To create a team, the authenticated user must be a member or owner of `&#123;org&#125;`. | `github` |
| `teamsCreateDiscussionCommentInOrg` | Creates a new comment on a team discussion. | `github` |
| `teamsCreateDiscussionInOrg` | Creates a new discussion post on a team's page. | `github` |
| `teamsDeleteDiscussionCommentInOrg` | Deletes a comment on a team discussion. | `github` |
| `teamsDeleteDiscussionInOrg` | Delete a discussion from a team's page. | `github` |
| `teamsDeleteInOrg` | To delete a team, the authenticated user must be an organization owner or team maintainer. | `github` |
| `teamsGetByName` | Gets a team using the team's `slug`. | `github` |
| `teamsGetDiscussionCommentInOrg` | Get a specific comment on a team discussion. | `github` |
| `teamsGetDiscussionInOrg` | Get a specific discussion on a team's page. | `github` |
| `teamsGetMembershipForUserInOrg` | Team members will include the members of child teams. | `github` |
| `teamsList` | Lists all teams in an organization that are visible to the authenticated user. | `github` |
| `teamsListChildInOrg` | Lists the child teams of the team specified by `&#123;team_slug&#125;`. | `github` |
| `teamsListDiscussionCommentsInOrg` | List all comments on a team discussion. | `github` |
| `teamsListDiscussionsInOrg` | List all discussions on a team's page. | `github` |
| `teamsListForAuthenticatedUser` | List all of the teams across all of the organizations to which the authenticated user belongs. | `github` |
| `teamsListMembersInOrg` | Team members will include the members of child teams. | `github` |
| `teamsListPendingInvitationsInOrg` | The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `bi… | `github` |
| `teamsListProjectsInOrg` | Lists the organization projects for a team. | `github` |
| `teamsListReposInOrg` | Lists a team's repositories visible to the authenticated user. | `github` |
| `teamsRemoveMembershipForUserInOrg` | To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the… | `github` |
| `teamsRemoveProjectInOrg` | Removes an organization project from a team. | `github` |
| `teamsRemoveRepoInOrg` | If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. | `github` |
| `teamsUpdateDiscussionCommentInOrg` | Edits the body text of a discussion comment. | `github` |
| `teamsUpdateDiscussionInOrg` | Edits the title and body text of a discussion post. | `github` |
| `teamsUpdateInOrg` | To edit a team, the authenticated user must either be an organization owner or a team maintainer. | `github` |
| `usersAddEmailForAuthenticatedUser` | This endpoint is accessible with the `user` scope. | `github` |
| `usersBlock` | — | `github` |
| `usersCheckBlocked` | — | `github` |
| `usersCheckFollowingForUser` | — | `github` |
| `usersCheckPersonIsFollowedByAuthenticated` | — | `github` |
| `usersCreateGpgKeyForAuthenticatedUser` | Adds a GPG key to the authenticated user's GitHub account. | `github` |
| `usersCreatePublicSshKeyForAuthenticatedUser` | Adds a public SSH key to the authenticated user's GitHub account. | `github` |
| `usersCreateSshSigningKeyForAuthenticatedUser` | Creates an SSH signing key for the authenticated user's GitHub account. | `github` |
| `usersDeleteEmailForAuthenticatedUser` | This endpoint is accessible with the `user` scope. | `github` |
| `usersDeleteGpgKeyForAuthenticatedUser` | Removes a GPG key from the authenticated user's GitHub account. | `github` |
| `usersDeletePublicSshKeyForAuthenticatedUser` | Removes a public SSH key from the authenticated user's GitHub account. | `github` |
| `usersDeleteSshSigningKeyForAuthenticatedUser` | Deletes an SSH signing key from the authenticated user's GitHub account. | `github` |
| `usersFollow` | Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. | `github` |
| `usersGetAuthenticated` | If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile info… | `github` |
| `usersGetByUsername` | Provides publicly available information about someone with a GitHub account. | `github` |
| `usersGetContextForUser` | Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. | `github` |
| `usersGetGpgKeyForAuthenticatedUser` | View extended details for a single GPG key. | `github` |
| `usersGetPublicSshKeyForAuthenticatedUser` | View extended details for a single public SSH key. | `github` |
| `usersGetSshSigningKeyForAuthenticatedUser` | Gets extended details for an SSH signing key. | `github` |
| `usersList` | Lists all users, in the order that they signed up on GitHub. | `github` |
| `usersListBlockedByAuthenticatedUser` | List the users you've blocked on your personal account. | `github` |
| `usersListEmailsForAuthenticatedUser` | Lists all of your email addresses, and specifies which one is visible to the public. | `github` |
| `usersListFollowedByAuthenticatedUser` | Lists the people who the authenticated user follows. | `github` |
| `usersListFollowersForAuthenticatedUser` | Lists the people following the authenticated user. | `github` |
| `usersListFollowersForUser` | Lists the people following the specified user. | `github` |
| `usersListFollowingForUser` | Lists the people who the specified user follows. | `github` |
| `usersListGpgKeysForAuthenticatedUser` | Lists the current user's GPG keys. | `github` |
| `usersListGpgKeysForUser` | Lists the GPG keys for a user. | `github` |
| `usersListPublicEmailsForAuthenticatedUser` | Lists your publicly visible email address, which you can set with the Set primary email visibility for the authenticated user endpoint. | `github` |
| `usersListPublicKeysForUser` | Lists the _verified_ public SSH keys for a user. | `github` |
| `usersListPublicSshKeysForAuthenticatedUser` | Lists the public SSH keys for the authenticated user's GitHub account. | `github` |
| `usersListSshSigningKeysForAuthenticatedUser` | Lists the SSH signing keys for the authenticated user's GitHub account. | `github` |
| `usersListSshSigningKeysForUser` | Lists the SSH signing keys for a user. | `github` |
| `usersSetPrimaryEmailVisibilityForAuthenticatedUser` | Sets the visibility for your primary email addresses. | `github` |
| `usersUnblock` | — | `github` |
| `usersUnfollow` | Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope. | `github` |
| `usersUpdateAuthenticated` | **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enf… | `github` |

## Secrets

- `GITHUB_OAUTH_APP` — OAuth2 app credentials for GitHub

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'github',
  package: '@pikku/addon-github',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
