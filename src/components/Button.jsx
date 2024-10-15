export default function Button({children, ...props}){
  return(
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-emerald-400 text-stone-700 hover:bg-emerald-500 hover:text-stone-100" {...props}>{children}</button>
  )
}