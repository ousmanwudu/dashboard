import {cn} from "../../../lib/utils"
function ActivityPanel({ className }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border bg-white p-5",
        className
      )}
    >
      <h2 className="font-bold text-gray-500">
        Activity
      </h2>

      <div className="mt-4 flex flex-1 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
        activity
      </div>
    </article>
  );
} 


export default ActivityPanel