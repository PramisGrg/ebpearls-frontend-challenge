import { useState } from "react";

export const TaskItem = ({
  taskItem,
}: {
  taskItem: { id: string; task: string };
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        id={`task-${taskItem.id}`}
        className="accent-primary w-5 h-5 mr-2"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label
        htmlFor={`task-${taskItem.id}`}
        className={`cursor-pointer transition-all ${
          checked ? "line-through text-gray-400" : ""
        }`}
      >
        {taskItem.task}
      </label>
    </li>
  );
};
