---
format: md
title: Spotify
description: "Spotify integration for Pikku"
sidebar_label: Spotify
---

# Spotify

Spotify integration for Pikku

```bash
npm install @pikku/addon-spotify
```

Category: **Media** · Version: `0.0.8` · Package: `@pikku/addon-spotify`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `addToQueue` | Add an item to the end of the user's current playback queue. | `spotify` |
| `addTracksToPlaylist` | Add one or more items to a user's playlist. | `spotify` |
| `changePlaylistDetails` | Change a playlist's name and public/private state. | `spotify` |
| `checkCurrentUserFollows` | Check to see if the current user is following one or more artists or other Spotify users. | `spotify` |
| `checkIfUserFollowsPlaylist` | Check to see if one or more Spotify users are following a specified playlist. | `spotify` |
| `checkUsersSavedAlbums` | Check if one or more albums is already saved in the current Spotify user's 'Your Music' library. | `spotify` |
| `checkUsersSavedAudiobooks` | Check if one or more audiobooks are already saved in the current Spotify user's library. | `spotify` |
| `checkUsersSavedEpisodes` | Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library. | `spotify` |
| `checkUsersSavedShows` | Check if one or more shows is already saved in the current Spotify user's library. | `spotify` |
| `checkUsersSavedTracks` | Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library. | `spotify` |
| `createPlaylist` | Create a playlist for a Spotify user. | `spotify` |
| `followArtistsUsers` | Add the current user as a follower of one or more artists or other Spotify users. | `spotify` |
| `followPlaylist` | Add the current user as a follower of a playlist. | `spotify` |
| `getACategoriesPlaylists` | Get a list of Spotify playlists tagged with a particular category. | `spotify` |
| `getACategory` | Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). | `spotify` |
| `getAChapter` | Get Spotify catalog information for a single chapter.&lt;br /> **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.** | `spotify` |
| `getAListOfCurrentUsersPlaylists` | Get a list of the playlists owned or followed by the current Spotify user. | `spotify` |
| `getAnAlbum` | Get Spotify catalog information for a single album. | `spotify` |
| `getAnAlbumsTracks` | Get Spotify catalog information about an album’s tracks. | `spotify` |
| `getAnArtist` | Get Spotify catalog information for a single artist identified by their unique Spotify ID. | `spotify` |
| `getAnArtistsAlbums` | Get Spotify catalog information about an artist's albums. | `spotify` |
| `getAnArtistsRelatedArtists` | Get Spotify catalog information about artists similar to a given artist. | `spotify` |
| `getAnArtistsTopTracks` | Get Spotify catalog information about an artist's top tracks by country. | `spotify` |
| `getAnAudiobook` | Get Spotify catalog information for a single audiobook.&lt;br /> **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.… | `spotify` |
| `getAnEpisode` | Get Spotify catalog information for a single episode identified by its unique Spotify ID. | `spotify` |
| `getAShow` | Get Spotify catalog information for a single show identified by its unique Spotify ID. | `spotify` |
| `getAShowsEpisodes` | Get Spotify catalog information about an show’s episodes. | `spotify` |
| `getAudiobookChapters` | Get Spotify catalog information about an audiobook's chapters.&lt;br /> **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia m… | `spotify` |
| `getAudioFeatures` | Get audio feature information for a single track identified by its unique Spotify ID. | `spotify` |
| `getAUsersAvailableDevices` | Get information about a user’s available devices. | `spotify` |
| `getAvailableMarkets` | Get the list of markets where Spotify is available. | `spotify` |
| `getCategories` | Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). | `spotify` |
| `getCurrentUsersProfile` | Get detailed profile information about the current user (including the current user's username). | `spotify` |
| `getFeaturedPlaylists` | Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab). | `spotify` |
| `getFollowed` | Get the current user's followed artists. | `spotify` |
| `getInformationAboutTheUsersCurrentPlayback` | Get information about the user’s current playback state, including track or episode, progress, and active device. | `spotify` |
| `getListUsersPlaylists` | Get a list of the playlists owned or followed by a Spotify user. | `spotify` |
| `getMultipleAlbums` | Get Spotify catalog information for multiple albums identified by their Spotify IDs. | `spotify` |
| `getMultipleArtists` | Get Spotify catalog information for several artists based on their Spotify IDs. | `spotify` |
| `getMultipleAudiobooks` | Get Spotify catalog information for several audiobooks identified by their Spotify IDs.&lt;br /> **Note: Audiobooks are only available for the US, UK, Ireland, Ne… | `spotify` |
| `getMultipleEpisodes` | Get Spotify catalog information for several episodes based on their Spotify IDs. | `spotify` |
| `getMultipleShows` | Get Spotify catalog information for several shows based on their Spotify IDs. | `spotify` |
| `getNewReleases` | Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab). | `spotify` |
| `getPlaylist` | Get a playlist owned by a Spotify user. | `spotify` |
| `getPlaylistCover` | Get the current image associated with a specific playlist. | `spotify` |
| `getPlaylistsTracks` | Get full details of the items of a playlist owned by a Spotify user. | `spotify` |
| `getQueue` | Get the list of objects that make up the user's queue. | `spotify` |
| `getRecentlyPlayed` | Get tracks from the current user's recently played tracks. | `spotify` |
| `getRecommendationGenres` | Retrieve a list of available genres seed parameter values for recommendations. | `spotify` |
| `getRecommendations` | Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. | `spotify` |
| `getSeveralAudioFeatures` | Get audio features for multiple tracks based on their Spotify IDs. | `spotify` |
| `getSeveralChapters` | Get Spotify catalog information for several chapters identified by their Spotify IDs.&lt;br /> **Note: Chapters are only available for the US, UK, Ireland, New Ze… | `spotify` |
| `getSeveralTracks` | Get Spotify catalog information for multiple tracks based on their Spotify IDs. | `spotify` |
| `getTheUsersCurrentlyPlayingTrack` | Get the object currently being played on the user's Spotify account. | `spotify` |
| `getTrack` | Get Spotify catalog information for a single track identified by its unique Spotify ID. | `spotify` |
| `getUsersProfile` | Get public profile information about a Spotify user. | `spotify` |
| `getUsersSavedAlbums` | Get a list of the albums saved in the current Spotify user's 'Your Music' library. | `spotify` |
| `getUsersSavedAudiobooks` | Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library. | `spotify` |
| `getUsersSavedEpisodes` | Get a list of the episodes saved in the current Spotify user's library. | `spotify` |
| `getUsersSavedShows` | Get a list of shows saved in the current Spotify user's library. | `spotify` |
| `getUsersSavedTracks` | Get a list of the songs saved in the current Spotify user's 'Your Music' library. | `spotify` |
| `getUsersTopArtists` | Get the current user's top artists based on calculated affinity. | `spotify` |
| `getUsersTopTracks` | Get the current user's top tracks based on calculated affinity. | `spotify` |
| `pauseAUsersPlayback` | Pause playback on the user's account. | `spotify` |
| `removeAlbumsUser` | Remove one or more albums from the current user's 'Your Music' library. | `spotify` |
| `removeAudiobooksUser` | Remove one or more audiobooks from the Spotify user's library. | `spotify` |
| `removeEpisodesUser` | Remove one or more episodes from the current user's library. | `spotify` |
| `removeShowsUser` | Delete one or more shows from current Spotify user's library. | `spotify` |
| `removeTracksPlaylist` | Remove one or more items from a user's playlist. | `spotify` |
| `removeTracksUser` | Remove one or more tracks from the current user's 'Your Music' library. | `spotify` |
| `reorderOrReplacePlaylistsTracks` | Either reorder or replace items in a playlist depending on the request's parameters. | `spotify` |
| `saveAlbumsUser` | Save one or more albums to the current user's 'Your Music' library. | `spotify` |
| `saveAudiobooksUser` | Save one or more audiobooks to the current Spotify user's library. | `spotify` |
| `saveEpisodesUser` | Save one or more episodes to the current user's library. | `spotify` |
| `saveShowsUser` | Save one or more shows to current Spotify user's library. | `spotify` |
| `saveTracksUser` | Save one or more tracks to the current user's 'Your Music' library. | `spotify` |
| `search` | Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.&lt;br /> **Note: Audiobooks a… | `spotify` |
| `seekToPositionInCurrentlyPlayingTrack` | Seeks to the given position in the user’s currently playing track. | `spotify` |
| `setRepeatModeOnUsersPlayback` | Set the repeat mode for the user's playback. | `spotify` |
| `setVolumeForUsersPlayback` | Set the volume for the user’s current playback device. | `spotify` |
| `skipUsersPlaybackToNextTrack` | Skips to next track in the user’s queue. | `spotify` |
| `skipUsersPlaybackToPreviousTrack` | Skips to previous track in the user’s queue. | `spotify` |
| `startAUsersPlayback` | Start a new context or resume current playback on the user's active device. | `spotify` |
| `toggleShuffleForUsersPlayback` | Toggle shuffle on or off for user’s playback. | `spotify` |
| `transferAUsersPlayback` | Transfer playback to a new device and determine if it should start playing. | `spotify` |
| `unfollowArtistsUsers` | Remove the current user as a follower of one or more artists or other Spotify users. | `spotify` |
| `unfollowPlaylist` | Remove the current user as a follower of a playlist. | `spotify` |
| `uploadCustomPlaylistCover` | Replace the image used to represent a specific playlist. | `spotify` |

## Secrets

- `SPOTIFY_OAUTH_APP` — OAuth2 app credentials for Spotify

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'spotify',
  package: '@pikku/addon-spotify',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
