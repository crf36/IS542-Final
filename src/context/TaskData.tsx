import { createContext } from "react";
import { TasksContextType } from "../Types";

export const TasksDataContext = createContext<TasksContextType | null>(null);
