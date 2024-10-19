import { useState } from "react";
export default function NewTask({onAdd}){
  const [enteredTask, setEnteredTask]=useState();
  function handleChange(event){
   setEnteredTask(event.target.value);
  }
  function handleClick(){
    if(enteredTask.trim()=== ''){
      return;
    }
    onAdd(enteredTask);
   setEnteredTask('');
  }
  return(
    <div className="flex items-center gap-4 mt-4">
    <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-100" value={enteredTask} onChange={handleChange}/>
    <button onClick={handleClick} className="text-emerald-500 hover:text-emerald-300 ">Add Task</button>
    </div>
  )
}