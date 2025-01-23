"use client";

import React from "react";

import { Button, Dialog } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
    };

    try {
      const response = await fetch(`/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        console.log("Task created:", result);
        router.refresh();
      }
    } catch (error) {
      alert(`Failed to create task:`);
      console.log("Failed to create task:", error);
    }
  };

  return (
    <>
      <Dialog.Title className="font-manrope">Add task</Dialog.Title>
      <Dialog.Description className="font-manrope leading-none mt-3 text-sm/6 text-zinc-600">
        Add your tasks for the day.
      </Dialog.Description>
      <form onSubmit={handleSubmit} className="font-manrope mt-6">
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
              rows={3}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600 sm:text-sm/6"
            />
          </div>
          <p className="mt-3 text-sm/6 text-zinc-600">
            Write the description of the task for yourself.
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
              highContrast
              type="submit"
              color="gray"
              className="cursor-pointer"
            >
              Add
            </Button>
          </Dialog.Close>
        </div>
      </form>
    </>
  );
};

export default AddTask;
