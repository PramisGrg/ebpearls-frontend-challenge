import { AnimatePresence } from "framer-motion";
import { useTaskStore } from "../../store/task-store";
import { TaskItem } from "./task-item";

export const TaskList = () => {
  const { task, deleteTask } = useTaskStore();

  const hasCompleted = task.some((t) => t.completed);

  return (
    <section>
      <ul className="space-y-3 relative">
        <div>
          {hasCompleted && (
            <button
              onClick={() => deleteTask()}
              className="absolute right-0 -top-5 px-3 py-1 cursor-pointer hover:bg-gray-50 text-red-500 border border-red-500"
            >
              X Delete
            </button>
          )}
        </div>
        <AnimatePresence>
          {task.map((taskItem) => (
            <TaskItem key={taskItem.id} taskItem={taskItem} />
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};
