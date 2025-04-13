import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { taskSchema, TTaskSchema } from "../../schemas/task.schema";
import { useTaskStore } from "../../store/task-store";
import { Input } from "../ui/input";
import { TaskList } from "./task-list";

const TaskForm = () => {
  const { addTask } = useTaskStore();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTaskSchema>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TTaskSchema) => {
    addTask(data.task);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="lg:p-20 p-4 space-y-2">
        <TaskList />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input {...register("task")} placeholder="Add new task" />
            {errors.task && (
              <p className="text-sm text-red-500">{errors.task.message}</p>
            )}
          </div>
          <button className="bg-button cursor-pointer text-white px-6 py-3 rounded-full">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
