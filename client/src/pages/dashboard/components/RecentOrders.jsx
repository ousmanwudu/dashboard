import { cn } from "../../../lib/utils";

function RecentOrders({className}) {
  return (
    <article
      className={cn(
        "rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <h2 className="mb-2 font-bold text-gray-500">
        Recent Orders
      </h2>

      <div className="flex h-48 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
        chart
      </div>
    </article>
  );
}
export default RecentOrders