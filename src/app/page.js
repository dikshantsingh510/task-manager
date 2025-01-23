"use client";

import { useEffect, useState } from "react";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { Tooltip } from "@radix-ui/themes";
import { BsClipboardX } from "react-icons/bs";
import { TbProgress, TbProgressAlert, TbProgressCheck } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [totalData, setTotalData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  // console.table(filter);

  const getTasksData = async () => {
    const res = await fetch(`/api/tasks`);
    const tasks = await res.json();
    setTotalData(tasks);
  };

  const getFilteredData = async () => {
    const res = await fetch(`/api/tasks?status=${filter}`);
    const tasks = await res.json();
    setTasks(tasks);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/tasks?clearAll=true`, {
        method: "DELETE",
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        console.log("Task deleted:", result);
        router.refresh();
      }
    } catch (error) {
      alert(`Failed to delete task:`);
      console.log("Failed to delete task:", error);
    }
  };

  useEffect(() => {
    getTasksData();
    getFilteredData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]); // Add getFilteredData to the dependency array

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center font-manrope bg-background">
      <p className="text-9xl font-black w-fit h-fit bg-text-center">
        <span className="bg-text">T</span>
        <span className="bg-text">a</span>
        <span className="bg-text">s</span>
        <span className="bg-text">k</span>
      </p>
      <div className="relative w-full max-w-screen-xl min-h-screen flex items-center flex-col gap-4 px-2 py-5 md:px-10 md:py-10 ">
        {/* <span className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-50  w-fit h-fit">
          Task
        </span> */}

        <Navbar />
        <div className="w-full min-h-[700px] rounded-xl bg-transparent flex justify-center items-start flex-wrap gap-4">
          {/* <InfoCard /> */}
          {/* Info card starts */}
          <div className="bg-zinc-900 text-zinc-100 rounded-3xl w-80 h-72 flex flex-col p-6">
            <div className=" w-full basis-1/5 flex items-center justify-between">
              <p className=" text-lg font-medium">Overall information</p>

              <Tooltip content="Clear all tasks">
                <BsClipboardX
                  className="w-5 h-5 cursor-pointer"
                  onClick={handleDelete}
                />
              </Tooltip>
            </div>

            <div className=" w-full basis-2/5 flex justify-between items-start pt-2">
              <div
                className="w-[47%] flex justify-between items-center gap-2 cursor-pointer"
                onClick={() => setFilter("")}
              >
                <span className="text-4xl font-bold">{totalData.length}</span>
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
                    totalData.filter((task) => {
                      return task.status === "pending";
                    }).length
                  }
                </span>
                <p className="subInfoCard_text">Pending</p>
              </div>
              <div
                className="subInfoCard"
                onClick={() => setFilter("inprogress")}
              >
                <TbProgress className="subInfoCard_icon" />
                <span className="subInfoCard_heading">
                  {
                    totalData.filter((task) => {
                      return task.status === "inprogress";
                    }).length
                  }
                </span>
                <p className="subInfoCard_text">In Progress</p>
              </div>
              <div
                className="subInfoCard"
                onClick={() => setFilter("completed")}
              >
                <TbProgressCheck className="subInfoCard_icon" />
                <span className="subInfoCard_heading">
                  {
                    totalData.filter((task) => {
                      return task.status === "completed";
                    }).length
                  }
                </span>
                <p className="subInfoCard_text">Completed</p>
              </div>
            </div>
          </div>
          {/* Info card ends */}

          {tasks.map((task) => {
            return <Card key={task._id} task={task} />;
          })}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
}
