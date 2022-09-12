import {
  PauseCircleFilledRounded,
  PhonelinkRounded,
  QueueMusicRounded,
  RepeatRounded,
  ShuffleRounded,
  SkipNextRounded,
  SkipPreviousRounded,
  VolumeDownRounded,
  VolumeOffRounded,
  VolumeUpRounded,
} from "@material-ui/icons";
import React from "react";

function Footer() {
  return (
    <div className=" flex h-full  items-center justify-between ">
      <div className="  "></div>

      <div className=" flex flex-col ">
        <div className="text-[#9D9E9D] flex items-center gap-4  ">
          <ShuffleRounded className="text-green-500 text-2xl " />
          <SkipPreviousRounded className="text-3xl" />
          <PauseCircleFilledRounded className="text-4xl hover:scale-110 ease-in-out transition-all duration-200" />
          <SkipNextRounded className="text-3xl" />
          <RepeatRounded className=" text-green-500 text-3xl" />
        </div>
        <div className="flex text-[#9D9E9D] ">
          {" "}
          <p>0:00</p>
          <div className="flex-1 bg-[#9D9E9D] h-[4px] self-center mx-1 "></div>
          <p>0:00</p>
        </div>
      </div>

      <div className="text-[#9D9E9D]  flex items-center gap-3 mr-4">
        <QueueMusicRounded className="text-2xl" />
        <PhonelinkRounded className="text-2xl" />
        <VolumeOffRounded className="text-2xl" />
        <VolumeDownRounded className="text-2xl" />
        <VolumeUpRounded className="text-2xl" />
      </div>
    </div>
  );
}

export default Footer;
