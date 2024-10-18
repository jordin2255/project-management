import Button from "./Button";
export default function ProjectsSidebar({onStartAddProject,projects}){
  return <aside className="w-1/3px px-8 py-16 bg-emerald-300 rounded-r-xl md:w-72">
    <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
    <div>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
    </div>
    <ul className="mt-8">
      {projects.map((project)=>(<li key={project.id}>
        <button className="text-left bg-sone-100 w-full px-2 py-1 hover:bg-emerald-400">{project.title}</button>
      </li>))}
    </ul>
  </aside>
} 