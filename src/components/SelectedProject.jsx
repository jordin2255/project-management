import Tasks from "./Tasks";
export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}){
  const formattedDate=new Date(project.dueDate).toLocaleDateString('en-US',{
    year:"numeric",
    month:"short",
    day:"numeric"
  });
return(
  <div className="w-[35rem] mt-16">
    <header className="mb-4 pb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold mb-2 text-stone-600">{project.title}</h1>
      <button onClick={onDelete} className="text-emerald-600 hover:text-emerald-500">Delete</button>
      </div>
      <p className="text-stone-400 mb-4">{formattedDate}</p>
      <p className="text-stone-400 whitespace-pre-wrap">{project.description}</p>
      
    </header>
    <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
  </div>
)
}