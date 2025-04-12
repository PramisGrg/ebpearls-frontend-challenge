export interface TTask {
  id: string;
  task: string;
  completed: boolean;
}

export interface TaskStore {
  task: TTask[];
  addTask: (task: string) => void;
  tooggleTask: (id: string) => void;
  deleteTask: () => void;
}
