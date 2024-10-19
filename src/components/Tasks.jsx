import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}) {
  return (
    <section>
      <h2 className="text-2xl font-bold">Tasks</h2>
      <NewTask onAdd={onAdd} tasks={tasks} />
      {tasks.length === 0 && (
        <p className="my-4">There are no tasks added to the project.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => {
                  onDelete(task.id);
                }}
                className="hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
