import { useCallback, useState, useEffect } from "react";
import { spotifyApiUrls } from "./spotifyApiUrls";

const AUTH_END_POINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "95489178da834723aa6e73e2eedd6783";
const REDIRECT_URI = "http://localhost:3000/";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "playlist-modify-public",
];

export const LOGIN_URL = `${encodeURI(
  AUTH_END_POINT
)}?client_id=${CLIENT_ID}&redirect_uri=${encodeURI(
  REDIRECT_URI
)}&scope=${encodeURI(SCOPES.join(" "))}&response_type=token&show_dialog=true`;

export const getHeadersFromUrl = (url) => {
  const params = new URLSearchParams(url);
  let headersObj = {};
  params.forEach((value, key) => {
    headersObj = { ...headersObj, [key]: value };
  });

  return headersObj;
};

export const getCurrentUserProfile = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_CURRENT_USER_PROFILE, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getCurrentUserPlaylist = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_CURRENT_USER_PLAYLIST, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getSeveralEpisodes = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_SEVERAL_EPISODES, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getNewReleases = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_NEW_RELEASES, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getRecommendations = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_RECOMMENDATIONS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getFeaturedPlaylists = async (accessToken) => {
  const response = await fetch(spotifyApiUrls.GET_FEATURED_PLAYLISTS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getAlbumDetails = async (accessToken, albumID) => {
  const response = await fetch(spotifyApiUrls.GET_ALBUM_DETAILS + albumID, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getPlaylistDetails = async (accessToken, albumID) => {
  const response = await fetch(spotifyApiUrls.GET_PLAYLIST_DETAILS + albumID, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);
  useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  const updateHash = useCallback(
    (newHash) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
};
