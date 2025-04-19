import { useTasksDataContext } from "../context/TaskDataContextHook";
import "./HomePage.css";
import TaskCard from "./TaskCard";

// AI conversation to help with displaying tasks
// https://chatgpt.com/c/68041fdd-8518-8004-b87d-1a740c8afffd

export default function HomePage() {
  const { tasks } = useTasksDataContext();

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
