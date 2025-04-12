import TaskForm from "./task-form";

const TaskManager = () => {
  return (
    <section className="lg:px-24 px-6 py-24 bg-secondary space-y-12">
      <header className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="text-4xl text-primary font-bold">Task Manager</h1>
        <p className="text-neutral-400 max-w-2xl">Your daily Todo list</p>
      </header>

      <TaskForm />
    </section>
  );
};

export default TaskManager;
