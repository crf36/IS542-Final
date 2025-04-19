export interface Task {
  id: string;
  name: string;
  description: string;
  status: StatusTag;
  priority: string;
  dueDate: string;
}

export type StatusTag =
  | "Not Started"
  | "In Progress"
  | "Under Review"
  | "Completed";

export interface TasksContextType {
  tasks: Task[];
  isLoading: boolean;
  addTask: (task: Task) => void;
  getTask: (taskId: string) => Task;
  updateTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
}

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
