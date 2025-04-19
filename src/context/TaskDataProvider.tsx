import { ReactNode, useEffect, useState } from "react";
import { TasksDataContext } from "./TaskData";
import { Task } from "../Types";

// Conversation with AI to help with implementing localStorage
// https://chatgpt.com/c/68040b64-84cc-8004-b98b-599f8e7eef1e

export function TaskDataProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    try {
      const parsed = storedTasks ? JSON.parse(storedTasks) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const getTask = (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
      throw new Error(`Task with id ${taskId} not found`);
    }
    return task;
  };

  const updateTask = (task: Task) => {
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        const updatedTasks = [...prev];
        updatedTasks[index] = task;
        return updatedTasks;
      }
      return prev;
    });
  };

  const removeTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <TasksDataContext
      value={{ tasks, isLoading, addTask, getTask, updateTask, removeTask }}
    >
      {children}
    </TasksDataContext>
  );
}
