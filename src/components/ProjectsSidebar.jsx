import Button from "./Button";
export default function ProjectsSidebar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
  return <aside className="w-1/3px px-8 py-16 bg-emerald-300 rounded-r-xl md:w-72">
    <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
    <div>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
    </div>
    <ul className="mt-8">
      {projects.map((project)=>{
        let cssClasses="text-left  text-stone-900 w-full px-2 py-1 hover:bg-emerald-400";

        if (project.id===selectedProjectId){
          cssClasses +=" bg-emerald-500"
        }
        return (<li key={project.id}>
        <button onClick={()=>{onSelectProject(project.id)}} className={cssClasses}>{project.title}</button>
      </li>)})}
    </ul>
  </aside>
} 