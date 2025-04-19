import { useEffect, useState } from "react";
import { useTasksDataContext } from "../context/TaskDataContextHook";
import { StatusTag, Task } from "../Types";
import { useNavigate, useParams } from "react-router-dom";
import "./TaskForm.css";

export function TaskForm() {
  const taskid = useParams().taskid;
  const mode = taskid ? "edit" : "create";
  const navigate = useNavigate();
  const { addTask, getTask, updateTask } = useTasksDataContext();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<StatusTag>("Not Started");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (mode === "edit" && taskid) {
      const task = getTask(taskid);
      setName(task.name);
      setDescription(task.description);
      setStatus(task.status);
      setPriority(task.priority);
      setDueDate(task.dueDate);
    }
  }, [mode, taskid, getTask]);

  function HandleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: Task = {
      id: taskid || crypto.randomUUID(),
      name,
      description,
      status,
      priority,
      dueDate,
    };

    if (mode === "edit") {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    navigate("/");
  }

  return (
    <form onSubmit={HandleFormSubmission} style={{ paddingTop: "64px" }}>
      <div>
        <label htmlFor="name_input">Task Name: </label>
        <input
          id="name_input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>

      <label htmlFor="descriptionInput">Description:</label>
      <div>
        <textarea
          id="descriptionInput"
          name="description"
          rows={4}
          cols={50}
          placeholder="Enter a task description..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="status-dropdown">Status: </label>
        <select
          id="status-dropdown"
          value={status}
          onChange={(event) => setStatus(event.target.value as StatusTag)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Under Review">Under Review</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label htmlFor="priority-input">Priority: </label>
        <input
          id="priority-input"
          value={priority}
          type="number"
          onChange={(event) => setPriority(event.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="dueDate-input">Due Date: </label>
        <input
          id="dueDate-input"
          value={dueDate}
          type="date"
          onChange={(event) => setDueDate(event.target.value)}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
