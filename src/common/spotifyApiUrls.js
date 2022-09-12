const BASE_URL = "https://api.spotify.com/v1/";

const SEED_ARTISTS = "5r3wPya2PpeTTsXsGhQU8O%2C4PULA4EFzYTrxYvOVlwpiQ";
const SEED_GENRES = "hip-hop%2Cindian";
const SEED_TRACKS = "42TMa2hgBNjte4uV7jNCnQ";

export const spotifyApiUrls = {
  GET_CURRENT_USER_PROFILE: `${BASE_URL}me`,
  GET_CURRENT_USER_PLAYLIST: `${BASE_URL}me/playlists`,
  GET_SEVERAL_EPISODES: `${BASE_URL}episodes`,
  GET_NEW_RELEASES: `${BASE_URL}browse/new-releases`,
  GET_RECOMMENDATIONS: `${BASE_URL}recommendations?seed_artists=${SEED_ARTISTS}&seed_genres=${SEED_GENRES}&seed_tracks=${SEED_TRACKS}`,
  GET_FEATURED_PLAYLISTS: `${BASE_URL}browse/featured-playlists`,
  GET_ALBUM_DETAILS: `${BASE_URL}albums/`,
  GET_PLAYLIST_DETAILS: `${BASE_URL}playlists/`,
};
