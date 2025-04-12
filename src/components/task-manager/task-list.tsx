import { useTaskStore } from "../../store/task-store";
import { TaskItem } from "./task-item";

export const TaskList = () => {
  const { task } = useTaskStore();

  return (
    <section className="mt-6">
      <ul className="space-y-3">
        {task.map((taskItem) => (
          <TaskItem key={taskItem.id} taskItem={taskItem} />
        ))}
      </ul>
    </section>
  );
};
