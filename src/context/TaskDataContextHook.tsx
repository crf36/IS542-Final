import { use } from "react";
import { TasksContextType } from "../Types";
import { TasksDataContext } from "./TaskData";

export function useTasksDataContext(): TasksContextType {
  const context = use(TasksDataContext);

  if (!context) {
    throw new Error(
      "useMoviesDataContext must be used within a MoviesDataProvider"
    );
  }

  return context;
}
