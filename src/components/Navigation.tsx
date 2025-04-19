import { useOutlet } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useTasksDataContext } from "../context/TaskDataContextHook";

export function Navigation() {
  const { isLoading } = useTasksDataContext();

  const currentOutlet = useOutlet();

  return isLoading ? <LoadingIndicator /> : <>{currentOutlet}</>;
}
