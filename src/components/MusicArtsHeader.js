import React from "react";
import {
  ArrowBackIosRounded,
  ArrowDropDownOutlined,
  ArrowForwardIosOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useStateValue } from "../common/StateProvider";

function MusicArtsHeader() {
  const [{ currentUserProfile }] = useStateValue();
  return (
    <div className="flex justify-between items-center p-4 gap-4 ">
      <div className="flex gap-4  ">
        <ArrowBackIosRounded className="border rounded-[50%] bg-black  border-white border-solid w-8 h-8 p-1 " />
        <ArrowForwardIosOutlined className="border rounded-[50%] bg-black  border-white border-solid w-8 h-8 p-1" />
      </div>

      <div className="flex-1"></div>

      <Button className="text-white rounded-2xl border-[0.1rem] border-white border-solid px-4 h-8 hover:bg-black hover:scale-105 transition-all duration-100 ">
        upgrade
      </Button>

      <div></div>

      <div className="flex items-center gap-1 h-8 bg-black rounded-2xl hover:bg-[#282828] cursor-pointer ">
        <PersonOutlineOutlined />
        <h3 className="  ">{currentUserProfile.display_name}</h3>
        <ArrowDropDownOutlined />
      </div>
    </div>
  );
}

export default MusicArtsHeader;
