import { Tooltip } from "@radix-ui/themes";
import React from "react";
import { BsClipboardX } from "react-icons/bs";
import { TbProgressAlert, TbProgress, TbProgressCheck } from "react-icons/tb";

const InfoCard = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 rounded-3xl w-80 h-72 flex flex-col p-6">
      <div className=" w-full basis-1/5 flex items-center justify-between">
        <p className=" text-lg font-medium">Overall information</p>

        <Tooltip content="Clear all tasks">
          <BsClipboardX className="w-5 h-5 cursor-pointer" />
        </Tooltip>
      </div>

      <div className=" w-full basis-2/5 flex justify-between items-start pt-2">
        <div className="w-[47%] flex justify-between items-center gap-2">
          <span className="text-4xl font-bold">43</span>
          <p className="text-zinc-600 text-sm leading-none">
            Total tasks for day
          </p>
        </div>
        <div className="w-[1px]  h-8 bg-zinc-700 rounded-lg"></div>
        <div className="w-[47%] flex justify-between items-center gap-2">
          <span className="text-4xl font-bold">43</span>
          <p className="text-zinc-600 text-sm leading-none">
            Filtered tasks result
          </p>
        </div>
      </div>

      <div className="w-full basis-3/5 flex gap-4 text-zinc-900">
        <div className="subInfoCard">
          <TbProgressAlert className="subInfoCard_icon" />
          <span className="subInfoCard_heading">12</span>
          <p className="subInfoCard_text">Pending</p>
        </div>
        <div className="subInfoCard">
          <TbProgress className="subInfoCard_icon" />
          <span className="subInfoCard_heading">12</span>
          <p className="subInfoCard_text">In Progress</p>
        </div>
        <div className="subInfoCard">
          <TbProgressCheck className="subInfoCard_icon" />
          <span className="subInfoCard_heading">12</span>
          <p className="subInfoCard_text">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
