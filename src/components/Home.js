import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import actionTypes from "../common/actionTypes";
import {
  getCurrentUserPlaylist,
  getCurrentUserProfile,
  getFeaturedPlaylists,
  getNewReleases,
  getRecommendations,
} from "../common/spotify";
import { useStateValue } from "../common/StateProvider";
import Footer from "./Footer";
import MusicArts from "./MusicArts";
import Sidebar from "./Sidebar";

function Home({ isAlbumPage }) {
  const [
    {
      responseHeaders,
      currentUserPlaylist,
      newReleases,
      recommendations,
      featuredPlaylists,
    },
    dispatch,
  ] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!responseHeaders.access_token) {
      navigate("/");
    }
    // console.log(!responseHeaders.access_token);
    else {
      getCurrentUserProfile(responseHeaders.access_token).then((response) => {
        dispatch({
          type: actionTypes.SET_CURRENT_USER_PROFILE,
          userProfile: response,
        });
      });
    }
  }, [responseHeaders.access_token]);

  // console.log(currentUserProfile);

  return (
    responseHeaders.access_token && (
      <div className="flex flex-col h-screen">
        <div className="flex h-[90.5%]">
          <Sidebar />
          <MusicArts isAlbumPage={isAlbumPage} />
        </div>
        <div className="h-[9.5%] w-full  bg-[#181818]">
          <Footer />
        </div>
      </div>
    )
  );
}

export default Home;
