import { create } from "zustand";
import { TaskStore } from "../types/task.type";
import { v4 as uuidv4 } from "uuid";

export const useTaskStore = create<TaskStore>((set) => ({
  task: [],
  addTask: (task: string) =>
    set((state) => ({
      task: [...state.task, { id: uuidv4(), task: task, completed: false }],
    })),
  tooggleTask: (id: string) =>
    set((state) => ({
      task: state.task.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      ),
    })),

  deleteTask: () =>
    set((state) => ({
      task: state.task.filter((t) => !t.completed),
    })),
}));
