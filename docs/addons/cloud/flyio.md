---
format: md
title: Flyio
description: "Fly.io integration for Pikku"
sidebar_label: Flyio
---

# Flyio

Fly.io integration for Pikku

```bash
npm install @pikku/addon-flyio
```

Category: **Cloud** · Version: `0.1.7` · Package: `@pikku/addon-flyio`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `appCertificatesAcmeCreate` | — | `flyio` |
| `appCertificatesAcmeDelete` | — | `flyio` |
| `appCertificatesCheck` | — | `flyio` |
| `appCertificatesCustomCreate` | — | `flyio` |
| `appCertificatesCustomDelete` | — | `flyio` |
| `appCertificatesDelete` | — | `flyio` |
| `appCertificatesList` | — | `flyio` |
| `appCertificatesShow` | — | `flyio` |
| `appCreateDeployToken` | — | `flyio` |
| `appIPAssignmentsCreate` | — | `flyio` |
| `appIPAssignmentsDelete` | — | `flyio` |
| `appIPAssignmentsList` | — | `flyio` |
| `appsCreate` | Create an app with the specified details in the request body. | `flyio` |
| `appsDelete` | Delete an app by its name. | `flyio` |
| `appsList` | List all apps with the ability to filter by organization slug. | `flyio` |
| `appsShow` | Retrieve details about a specific app by its name. | `flyio` |
| `createVolumeSnapshot` | Create a snapshot for a specific volume within an app. | `flyio` |
| `currentTokenShow` | Get information about the current macaroon token(s), including organizations, apps, and whether each token is from a user or machine | `flyio` |
| `machinesCordon` | “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. | `flyio` |
| `machinesCreate` | Create a Machine within a specific app using the details provided in the request body. | `flyio` |
| `machinesCreateLease` | Create a lease for a specific Machine within an app using the details provided in the request body. | `flyio` |
| `machinesDelete` | Delete a specific Machine within an app by Machine ID, with an optional force parameter to force kill the Machine if it's running. | `flyio` |
| `machinesDeleteMetadata` | Delete metadata for a specific Machine within an app by providing a metadata key. | `flyio` |
| `machinesExec` | Execute a command on a specific Machine and return the raw command output bytes. | `flyio` |
| `machinesGetMemory` | Get current memory limit and available capacity for a machine | `flyio` |
| `machinesGetMetadataKey` | Get the value of a specific metadata key | `flyio` |
| `machinesList` | List all Machines associated with a specific app, with optional filters for including deleted Machines and filtering by region. | `flyio` |
| `machinesListEvents` | List all events associated with a specific Machine within an app. | `flyio` |
| `machinesListProcesses` | List all processes running on a specific Machine within an app, with optional sorting parameters. | `flyio` |
| `machinesListVersions` | List all versions of the configuration for a specific Machine within an app. | `flyio` |
| `machinesOrgList` | List all Machines associated with a specific organization. | `flyio` |
| `machinesReclaimMemory` | Trigger the balloon device to reclaim memory from a machine | `flyio` |
| `machinesReleaseLease` | Release the lease of a specific Machine within an app. | `flyio` |
| `machinesRestart` | Restart a specific Machine within an app, with an optional timeout parameter. | `flyio` |
| `machinesSetMemoryLimit` | Set the memory limit for a machine using the balloon device | `flyio` |
| `machinesShow` | Get details of a specific Machine within an app by the Machine ID. | `flyio` |
| `machinesShowLease` | Retrieve the current lease of a specific Machine within an app. | `flyio` |
| `machinesShowMetadata` | Retrieve metadata for a specific Machine within an app. | `flyio` |
| `machinesSignal` | Send a signal to a specific Machine within an app using the details provided in the request body. | `flyio` |
| `machinesStart` | Start a specific Machine within an app. | `flyio` |
| `machinesStop` | Stop a specific Machine within an app, with an optional request body to specify signal and timeout. | `flyio` |
| `machinesSuspend` | Suspend a specific Machine within an app. | `flyio` |
| `machinesUncordon` | “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. | `flyio` |
| `machinesUpdate` | Update a Machine's configuration using the details provided in the request body. | `flyio` |
| `machinesUpdateMetadata` | Update multiple metadata keys at once. | `flyio` |
| `machinesUpsertMetadata` | Update metadata for a specific machine within an app by providing a metadata key. | `flyio` |
| `machinesWait` | Wait for a Machine to reach a specific state. | `flyio` |
| `platformPlacementsPost` | Simulates placing the specified number of machines into regions, depending on available capacity and limits. | `flyio` |
| `platformRegionsGet` | List all regions on the platform with their current Machine capacity. | `flyio` |
| `secretCreate` | — | `flyio` |
| `secretDelete` | — | `flyio` |
| `secretGet` | — | `flyio` |
| `secretkeyDecrypt` | — | `flyio` |
| `secretkeyDelete` | — | `flyio` |
| `secretkeyEncrypt` | — | `flyio` |
| `secretkeyGenerate` | — | `flyio` |
| `secretkeyGet` | — | `flyio` |
| `secretkeySet` | — | `flyio` |
| `secretkeySign` | — | `flyio` |
| `secretkeysList` | — | `flyio` |
| `secretkeyVerify` | — | `flyio` |
| `secretsList` | — | `flyio` |
| `secretsUpdate` | — | `flyio` |
| `tokensRequestKms` | This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. | `flyio` |
| `tokensRequestOIDC` | Request an Open ID Connect token for your machine. | `flyio` |
| `volumeDelete` | Delete a specific volume within an app by volume ID. | `flyio` |
| `volumesCreate` | Create a volume for a specific app using the details provided in the request body. | `flyio` |
| `volumesExtend` | Extend a volume's size within an app using the details provided in the request body. | `flyio` |
| `volumesGetById` | Retrieve details about a specific volume by its ID within an app. | `flyio` |
| `volumesList` | List all volumes associated with a specific app. | `flyio` |
| `volumesListSnapshots` | List all snapshots for a specific volume within an app. | `flyio` |
| `volumesUpdate` | Update a volume's configuration using the details provided in the request body. | `flyio` |

## Secrets

- `FLYIO_CREDENTIALS` — Fly.io integration for Pikku

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'flyio',
  package: '@pikku/addon-flyio',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
