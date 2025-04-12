export interface Task {
  id: string;
  task: string;
  completed: boolean;
}

export interface TaskStore {
  task: Task[];
  addTask: (task: string) => void;
  tooggleTask: (id: string) => void;
  deleteTask: () => void;
}
