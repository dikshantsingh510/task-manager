"use client";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@radix-ui/themes";
import { BsClipboardX } from "react-icons/bs";
import { TbProgressAlert, TbProgress, TbProgressCheck } from "react-icons/tb";
import { useTaskContext } from "@/context/TaskContext";

const InfoCard = () => {
  const { allTasks, tasks, fetchTasks, fetchFilteredTasks, deleteAllTask } =
    useTaskContext();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasks();
      await fetchFilteredTasks(filter);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      {/* Info card starts */}
      <div className="bg-zinc-900 text-zinc-100 rounded-3xl w-80 h-72 flex flex-col p-6">
        <div className=" w-full basis-1/5 flex items-center justify-between">
          <p className=" text-lg font-medium">Overall information</p>

          <Tooltip content="Clear all tasks">
            <BsClipboardX
              className="w-5 h-5 cursor-pointer"
              onClick={async () => await deleteAllTask()}
            />
          </Tooltip>
        </div>

        <div className=" w-full basis-2/5 flex justify-between items-start pt-2">
          <div
            className="w-[47%] flex justify-between items-center gap-2 cursor-pointer"
            onClick={() => setFilter("")}
          >
            <span className="text-4xl font-bold">{allTasks.length}</span>
            <p className="text-zinc-600 text-sm leading-none">
              Total tasks for day
            </p>
          </div>
          <div className="w-[1px]  h-8 bg-zinc-700 rounded-lg"></div>
          <div className="w-[47%] flex justify-between items-center gap-2">
            <span className="text-4xl font-bold">{tasks.length}</span>
            <p className="text-zinc-600 text-sm leading-none">
              Filtered tasks result
            </p>
          </div>
        </div>

        <div className="w-full basis-3/5 flex gap-4 text-zinc-900">
          <div className="subInfoCard" onClick={() => setFilter("pending")}>
            <TbProgressAlert className="subInfoCard_icon" />
            <span className="subInfoCard_heading">
              {
                allTasks.filter((task) => {
                  return task.status === "pending";
                }).length
              }
            </span>
            <p className="subInfoCard_text">Pending</p>
          </div>
          <div className="subInfoCard" onClick={() => setFilter("inprogress")}>
            <TbProgress className="subInfoCard_icon" />
            <span className="subInfoCard_heading">
              {
                allTasks.filter((task) => {
                  return task.status === "inprogress";
                }).length
              }
            </span>
            <p className="subInfoCard_text">In Progress</p>
          </div>
          <div className="subInfoCard" onClick={() => setFilter("completed")}>
            <TbProgressCheck className="subInfoCard_icon" />
            <span className="subInfoCard_heading">
              {
                allTasks.filter((task) => {
                  return task.status === "completed";
                }).length
              }
            </span>
            <p className="subInfoCard_text">Completed</p>
          </div>
        </div>
      </div>
      {/* Info card ends */}
    </>
  );
};

export default InfoCard;
