export default function Input({ label, textarea, ...props }) {
  const classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600"
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="font-bold uppercase">{label}</label>
      {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props} />}
    </p>
  );
}