import { motion } from "framer-motion";
import { cn } from "../../libs/utlis";
import { useTaskStore } from "../../store/task-store";
import { TTask } from "../../types/task.type";

export const TaskItem = ({ taskItem }: { taskItem: TTask }) => {
  const { tooggleTask } = useTaskStore();

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      key={taskItem.id}
      className="flex items-center"
    >
      <input
        onChange={() => tooggleTask(taskItem.id)}
        type="checkbox"
        className="accent-primary w-5 h-5 mr-2 cursor-pointer"
      />
      <label
        className={cn(
          taskItem.completed && "line-through text-neutral-400",
          "cursor-pointer transition-all"
        )}
      >
        {taskItem.task}
      </label>
    </motion.li>
  );
};
