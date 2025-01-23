"use client";
import React, { useState } from "react";
import { Button, Dialog } from "@radix-ui/themes";
import { useTaskContext } from "@/context/TaskContext";

const EditTask = ({ task }) => {
  const { updateTask } = useTaskContext();
  const { _id, title, description, status, createdAt } = task;
  const [formTitle, setFormTitle] = useState(title);
  const [formDescription, setFormDescription] = useState(description);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = {
      _id,
      title: formTitle,
      description: formDescription,
      status,
    };
    await updateTask(data);
  };

  return (
    <>
      <Dialog.Title className="font-manrope">Edit task</Dialog.Title>
      <Dialog.Description className="font-manrope leading-none mt-3 text-sm/6 text-zinc-600">
        Forgot something! Just change it.
      </Dialog.Description>
      <form onSubmit={handleUpdate} className="font-manrope mt-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="description"
            className="block text-sm/6 font-medium text-zinc-900"
          >
            Description
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
              rows={3}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600 sm:text-sm/6"
            />
          </div>
          <p className="mt-3 text-sm/6 text-zinc-600">
            Write the brief description of the task.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4">
          <Dialog.Close>
            <Button variant="soft" color="gray" className="cursor-pointer">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              type="submit"
              highContrast
              color="gray"
              className="cursor-pointer"
            >
              Update
            </Button>
          </Dialog.Close>
        </div>
      </form>
    </>
  );
};

export default EditTask;
