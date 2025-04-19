import { useNavigate } from "react-router-dom";
import { Task } from "../Types";
import { useTasksDataContext } from "../context/TaskDataContextHook";

export default function TaskCard({ task }: { task: Task }) {
  const navigate = useNavigate();
  const { removeTask } = useTasksDataContext();

  return (
    <div key={task.id} className="home-container">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <div className="button-row">
        <button
          className="edit-btn"
          onClick={() => navigate(`/${task.id}/edit`)}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => removeTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
