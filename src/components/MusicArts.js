import React, { useEffect } from "react";
import actionTypes from "../common/actionTypes";
import {
  getAlbumDetails,
  getFeaturedPlaylists,
  getNewReleases,
  getRecommendations,
} from "../common/spotify";
import { useStateValue } from "../common/StateProvider";
import AlbumTracks from "./AlbumTracks";
import MusicArtPoster from "./MusicArtPoster";
import MusicArtsHeader from "./MusicArtsHeader";
import Recommended from "./Recommended";

function MusicArts({ isAlbumPage }) {
  const [
    { responseHeaders, newReleases, recommendations, featuredPlaylists },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    if (!newReleases.length)
      getNewReleases(responseHeaders.access_token).then((resp) => {
        // console.log(resp.albums);
        dispatch({
          type: actionTypes.SET_NEW_RELEASES,
          newReleases: resp.albums.items,
        });

        // resp.albums.items.forEach((album) => {
        //   getAlbumDetails(responseHeaders.access_token, album.id).then(
        //     (resp) => {
        //       console.log(resp);
        //     }
        //   );
        // });
      });

    if (!recommendations.length)
      getRecommendations(responseHeaders.access_token).then((resp) => {
        // console.log(resp.tracks);
        dispatch({
          type: actionTypes.SET_RECOMMENDATIONS,
          recommendations: resp.tracks,
        });
      });

    if (!featuredPlaylists.length)
      getFeaturedPlaylists(responseHeaders.access_token).then((resp) => {
        console.log(resp.playlists);
        dispatch({
          type: actionTypes.SET_FEATURED_PLAYLISTS,
          featuredPlaylists: resp.playlists.items,
        });
      });
  }, []);

  return (
    <div className="flex-1 bg-gradient-to-br from-[#202020] to-[#121212] text-white overflow-x-hidden scrollbar-hide ">
      <MusicArtsHeader />

      {isAlbumPage ? <AlbumTracks /> : <Recommended />}
    </div>
  );
}

export default MusicArts;
