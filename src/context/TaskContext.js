"use client";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // state to get data
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Getting task data
  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/tasks`);
      const data = await response.json();
      setAllTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  //   Getting filtered tasks
  const fetchFilteredTasks = async (filter) => {
    try {
      const response = await fetch(`/api/tasks?status=${filter}`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  //   Adding task
  const addTask = async (newTaskData) => {
    try {
      const response = await fetch(`/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskData),
      });
      if (response.ok) {
        const result = await response.json();
        await fetchTasks();
        await fetchFilteredTasks("");
        // alert(result.message);
        console.log("Task created:", result);
      }
    } catch (error) {
      alert(`Failed to create task:`);
      console.log("Failed to create task:", error);
    }
  };

  //   Delete task
  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: taskId }),
      });
      if (response.ok) {
        const result = await response.json();
        await fetchTasks();
        await fetchFilteredTasks("");
        console.log("Task deleted:", result);
      }
    } catch (error) {
      alert(`Failed to delete task:`);
      console.log("Failed to delete task:", error);
    }
  };

//   Delete all task
const deleteAllTask = async () => {
    try {
         const response = await fetch(`/api/tasks?clearAll=true`, {
           method: "DELETE",
         });
         if (response.ok) {
           const result = await response.json();
           await fetchTasks();
           await fetchFilteredTasks("");
           console.log("All Task deleted:", result);
         }
    } catch (error) {
        alert(`Failed to delete task:`);
        console.log("Failed to delete task:", error);
    }
}

  //   Update task
  const updateTask = async (updatedTaskData) => {
    try {
      const response = await fetch(`/api/tasks`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTaskData),
      });
      if (response.ok) {
        const result = await response.json();
        await fetchTasks();
        await fetchFilteredTasks("");
        console.log("Task updated:", result);
      }
    } catch (error) {
      alert(`Failed to update task:`);
      console.log("Failed to update task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        allTasks,
        tasks,
        fetchTasks,
        fetchFilteredTasks,
        addTask,
        deleteTask,
        updateTask,
        deleteAllTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
