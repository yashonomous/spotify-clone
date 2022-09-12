import {
  AddCircleOutlineRounded,
  FavoriteBorderOutlined,
  HomeOutlined,
  LibraryMusicOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import actionTypes from "../common/actionTypes";
import { getCurrentUserPlaylist } from "../common/spotify";
import { useStateValue } from "../common/StateProvider";

const ITEMS_ARRAY = [
  "home",
  "search",
  "library",
  "create playlist",
  "liked songs",
];

const SIDEBAR_ITEMS = {
  HOME: "home",
  SEARCH: "search",
  LIBRARY: "library",
  CREATE_PLAYLIST: "create playlist",
  LIKED_SONGS: "liked songs",
};

function Sidebar() {
  const [selected, setSelected] = useState("home");
  const [{ currentUserPlaylist, responseHeaders }, dispatch] = useStateValue();
  // console.log(currentUserPlaylist);

  useEffect(() => {
    if (!currentUserPlaylist.length)
      getCurrentUserPlaylist(responseHeaders.access_token).then((resp) => {
        // console.log(resp);
        dispatch({
          type: actionTypes.SET_CURRENT_USER_PLAYLIST,
          userPlaylist: resp.items,
        });
      });
  }, []);

  const handleClick = (item) => {
    if (item === SIDEBAR_ITEMS.HOME) {
      setSelected(SIDEBAR_ITEMS.HOME);
    }
    if (item === SIDEBAR_ITEMS.SEARCH) {
      setSelected(SIDEBAR_ITEMS.SEARCH);
    }
    if (item === SIDEBAR_ITEMS.LIBRARY) {
      setSelected(SIDEBAR_ITEMS.LIBRARY);
    }
    if (item === SIDEBAR_ITEMS.CREATE_PLAYLIST) {
      setSelected(SIDEBAR_ITEMS.CREATE_PLAYLIST);
    }
    if (item === SIDEBAR_ITEMS.LIKED_SONGS) {
      setSelected(SIDEBAR_ITEMS.LIKED_SONGS);
    }
  };

  const getIcon = (item) => {
    if (item === SIDEBAR_ITEMS.HOME) return <HomeOutlined />;
    if (item === SIDEBAR_ITEMS.SEARCH) return <SearchOutlined />;
    if (item === SIDEBAR_ITEMS.LIBRARY) return <LibraryMusicOutlined />;
    if (item === SIDEBAR_ITEMS.CREATE_PLAYLIST)
      return <AddCircleOutlineRounded />;
    if (item === SIDEBAR_ITEMS.LIKED_SONGS) return <FavoriteBorderOutlined />;
  };

  return (
    <div className="bg-black">
      <div className="w-64 p-3">
        <img
          className="w-full  h-12 object-contain"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
        />
      </div>

      {ITEMS_ARRAY.map((item) => (
        <div
          key={item}
          className={`flex gap-4 p-3 ${
            selected === item ? "text-white" : "text-[#9D9E9D]"
          } cursor-pointer hover:text-white ease-in duration-300 `}
          onClick={() => {
            handleClick(item);
          }}
        >
          {getIcon(item)}
          <h3>{item}</h3>
        </div>
      ))}

      <div
        className={`border-[#9D9E9D] border-opacity-30 border-[0.005rem] border-b-0 mx-4 `}
      ></div>

      <div className=" mt-4 flex ">
        <p className="ml-4 text-[#9D9E9D]  text-xs font-w ">my playlist #1</p>
      </div>

      <div className=" h-[50%] overflow-y-scroll scrollbar-hide ">
        {currentUserPlaylist.map((playlist, i) => (
          <p key={i} className=" text-[#9D9E9D] px-3 py-1.5 text-sm">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
