import React from "react";
import { useNavigate } from "react-router";

const shorten = (sentence) =>
  sentence.length > 20 ? `${sentence.substr(0, 20)}...` : sentence;

const shortenDescription = (sentence) =>
  sentence.length > 50 ? `${sentence.substr(0, 50)}...` : sentence;

function MusicArtPoster({ id, name, imageUrl, info, type }) {
  const navigate = useNavigate();

  const handlePosterClick = (id) => {
    console.log(window.location);
    if (type === "album") navigate(`/album/${id}`);
    if (type === "playlist") navigate(`/playlist/${id}`);
  };

  return (
    <div
      className=" flex items-center justify-center shrink-0 grow-0 p-4 bg-[#181818] rounded-lg cursor-pointer hover:bg-[#282828] duration-300 transition-all "
      onClick={() => {
        handlePosterClick(id);
      }}
    >
      <div className="text-white flex flex-col w-[12rem] gap-2 ">
        <img className="h-[10rem] w-full object-cover " src={imageUrl} alt="" />
        <p className=" text-[1rem] p-1"> {shorten(name.toLowerCase())} </p>
        <p className="text-[#9D9E9D] text-[0.8rem]  ">
          {isNaN(info) ? shortenDescription(info) : `tracks: ${info}`}
        </p>
      </div>
    </div>
  );
}

export default MusicArtPoster;
