"use client";
import { Dialog, DropdownMenu, Tooltip } from "@radix-ui/themes";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import EditTask from "./EditTask";
import { useTaskContext } from "@/context/TaskContext";
import CompleteLebel from "./CompleteLebel";
import ProgressLebel from "./ProgressLebel";
import PendingLebel from "./PendingLebel";



const Card = ({ task }) => {
  const { deleteTask, updateTask } = useTaskContext();
  const { _id, title, description, status, createdAt } = task;
  const date = new Date(createdAt).toLocaleDateString();

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = {
      _id,
      title,
      description,
      status: event.target.id,
    };
  

    await updateTask(data);
  };

  return (
    <div className=" bg-zinc-50 text-zinc-800 rounded-3xl w-80 h-72 flex flex-col gap-4 p-8 shadow-md ">
      <div className=" w-full h-9 flex items-center justify-between ">
        {status == "completed" ? (
          <CompleteLebel />
        ) : status == "inprogress" ? (
          <ProgressLebel />
        ) : (
          <PendingLebel />
        )}

        {/* DROPDOWN MENU STARTS */}
        <Dialog.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <BsThreeDots className="w-6 h-6 text-zinc-700 cursor-pointer" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content color="gray" size={"1"}>
              {/* <Dialog.Root> */}
              <Dialog.Trigger>
                <DropdownMenu.Item
                  className="cursor-pointer"
                  shortcut={<MdOutlineEdit className="w-4 h-4" />}
                >
                  Edit
                </DropdownMenu.Item>
              </Dialog.Trigger>

              {/* </Dialog.Root> */}

              <DropdownMenu.Item
                className="cursor-pointer"
                color="red"
                shortcut={<MdOutlineDeleteOutline className="w-4 h-4" />}
                onClick={() => {
                  deleteTask(_id);
                }}
              >
                Delete
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                className="cursor-pointer"
                id="inprogress"
                onClick={handleUpdate}
              >
                Mark as in progress
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="cursor-pointer"
                id="pending"
                onClick={handleUpdate}
              >
                Mark as pending
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Dialog.Content maxWidth={"380px"}>
            <EditTask task={task}></EditTask>
          </Dialog.Content>
        </Dialog.Root>
        {/* DROPDOWN MENU ENDS */}
      </div>
      <div className=" w-full h-44">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
      <div className=" w-full h-9 flex items-center justify-between ">
        <div className="flex justify-center items-center">
          <HiMiniCalendarDateRange className="w-4 h-4 text-zinc-500 mr-0.5" />
          <p className="text-sm text-zinc-500 font-medium">{date}</p>
        </div>
        <Tooltip content="Mark as completed">
          <FiCheckCircle
            id="completed"
            onClick={handleUpdate}
            className="w-6 h-6 text-zinc-500 cursor-pointer"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
