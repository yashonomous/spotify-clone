import {
  AccessTimeRounded,
  FavoriteBorderRounded,
  MoreHorizRounded,
  PlayCircleFilledRounded,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getAlbumDetails, getPlaylistDetails } from "../common/spotify";
import { useStateValue } from "../common/StateProvider";

const shorten = (sentence) =>
  sentence.length > 30 ? `${sentence.substr(0, 30)}...` : sentence;

function AlbumTracks() {
  const { id } = useParams();
  const location = useLocation();
  const [
    { responseHeaders, newReleases, recommendations, featuredPlaylists },
    dispatch,
  ] = useStateValue();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const loadAlbumDetails = () => {
      if (location.pathname.includes("album"))
        getAlbumDetails(responseHeaders.access_token, id).then((resp) => {
          // console.log(resp);
          setSelectedItem(resp);
        });
      if (location.pathname.includes("playlist"))
        getPlaylistDetails(responseHeaders.access_token, id).then((resp) => {
          console.log(resp);
          setSelectedItem(resp);
        });
    };
    if (!Object.keys(selectedItem).length) loadAlbumDetails();
  }, []);

  return (
    Object.keys(selectedItem).length > 0 && (
      <>
        <div className="flex flex-col h-[92%] bg-gradient-to-tr from-[#121212] to-[#898989] overflow-y-scroll scrollbar-hide">
          <div className="flex h-[17rem]">
            <div className="pl-8 pr-7 pb-6 pt-[5rem] flex items-end ">
              <img
                className="h-[12rem] shadow-xl drop-shadow-lg shadow-gray-800  "
                src={
                  selectedItem?.images?.at(1)?.url ||
                  selectedItem?.images?.at(0)?.url
                }
                alt=""
              />
            </div>
            <div className=" flex-1 flex flex-col gap-2 justify-end pb-6 ">
              <p>EP</p>
              <p className="text-2xl">{selectedItem?.name}</p>
              <div className="flex gap-2 items-center">
                {/* <div>photo</div> */}
                <div className="text-xs">
                  {selectedItem.artists?.at(0)?.name ||
                    selectedItem?.description}
                </div>
                <div className="text-xs">2022</div>
                <div className="text-xs">
                  {selectedItem?.total_tracks || selectedItem?.tracks?.total}{" "}
                  songs
                </div>
              </div>
            </div>
          </div>

          <div className="flex px-8 py-6 ">
            <div className="flex flex-1 justify-start gap-6 items-center ">
              <PlayCircleFilledRounded className=" text-[#20DF64] text-7xl  " />
              <FavoriteBorderRounded className=" text-[#9D9E9D] text-4xl " />
              <MoreHorizRounded className=" text-[#9D9E9D] text-4xl " />
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-4 px-8 py-4 ">
              <p className="text-[#9D9E9D]">#</p>
              <p className="text-[#9D9E9D] w-[17rem]">title</p>
              {location.pathname.includes("playlist") && (
                <p className="text-[#9D9E9D] ml-auto  ">album</p>
              )}
              <AccessTimeRounded className="text-[#9D9E9D] ml-auto" />
            </div>
            {selectedItem?.tracks?.items?.map((track, idx) => (
              <div
                key={track.id || track.track?.id}
                className="flex items-center gap-4 px-4 py-2 mx-4 rounded-md hover:bg-[#383838] "
              >
                <div className="text-[#9D9E9D]  ">{idx + 1}</div>
                <div className="flex flex-col w-[17rem] ">
                  <p className=" text-sm ">
                    {shorten(track.name || track.track?.name)}
                  </p>
                  <p className="text-[#9D9E9D] text-[0.8rem] ">
                    {track.artists
                      ? track.artists.map((artist) => artist.name).join(", ")
                      : track.track?.artists
                          .map((artist) => artist.name)
                          .join(", ")}
                  </p>
                </div>

                {location.pathname.includes("playlist") && (
                  <div className="text-[#9D9E9D] text-sm ml-auto ">
                    <p>{track.track?.album?.name}</p>
                  </div>
                )}

                {location.pathname.includes("playlist") && (
                  <div className="text-[#9D9E9D] text-sm ml-auto">
                    <p>
                      {track.track?.duration_ms &&
                        new Date(track.track.duration_ms)
                          .toTimeString()
                          .split(" ")[0]
                          .substring(0, 5)}
                    </p>
                  </div>
                )}
              </div>
            ))}

            <div className="text-[#9D9E9D] text-[0.8rem] px-8 py-2 mt-6">
              <p>
                {location.pathname.includes("album") &&
                  new Date(selectedItem?.release_date)
                    .toDateString()
                    .split(" ")
                    .splice(1)
                    .join(" ")}
              </p>
              <p className="text-[0.6rem]">
                {selectedItem?.copyrights?.length > 0 &&
                  selectedItem?.copyrights?.at(0)?.text}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default AlbumTracks;
