import React from "react";
import { useStateValue } from "../common/StateProvider";
import MusicArtPoster from "./MusicArtPoster";

function Recommended() {
  const [{ newReleases, recommendations, featuredPlaylists }] = useStateValue();
  return (
    <div className=" flex flex-col pl-4 gap-4">
      <div className="flex flex-col gap-2">
        <h3>new releases in india</h3>
        <div className="flex overflow-x-scroll scrollbar-hide ">
          {newReleases.length > 0 &&
            newReleases.map((release) => (
              <MusicArtPoster
                key={release.id}
                id={release.id}
                name={release.name}
                imageUrl={release.images[1].url}
                info={release.total_tracks}
                type={release.type}
              />
            ))}
        </div>
      </div>
      <div>
        <h3>recommendations</h3>
        <div className="flex overflow-x-scroll scrollbar-hide ">
          {recommendations.length > 0 &&
            recommendations.map((recommendation) => (
              <MusicArtPoster
                key={recommendation.id}
                id={recommendation.id}
                name={recommendation.name}
                imageUrl={recommendation.album.images[1].url}
                info={recommendation.artists[0].name}
                type={recommendation.type}
              />
            ))}
        </div>
        <div>
          <h3>featured playlists</h3>
          <div className="flex overflow-x-scroll scrollbar-hide ">
            {featuredPlaylists.length > 0 &&
              featuredPlaylists.map((playlist) => (
                <MusicArtPoster
                  key={playlist.id}
                  id={playlist.id}
                  name={playlist.name}
                  imageUrl={playlist.images[0].url}
                  info={playlist.description}
                  type={playlist.type}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
