import Button from "./Button";
export default function ProjectsSidebar(){
  return <aside className="w-1/3px px-8 py-16 bg-emerald-300 rounded-r-xl md:w-72">
    <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
    <div>
      <Button>+ Add Project</Button>
    </div>
    <ul></ul>
  </aside>
}