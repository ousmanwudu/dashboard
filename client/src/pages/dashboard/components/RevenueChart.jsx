import { cn } from "../../../lib/utils";

function RevenueChart({ className }) {
  return (
    <article
      className={cn(
        "rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <h2 className="mb-2 font-bold text-gray-500">
        Revenue Chart
      </h2>

      <div className="flex h-48 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
        chart
      </div>
    </article>
  );
}

export default RevenueChart;
// function RevenueChart() {
//   return (
//     <article className="rounded-xl border bg-white shadow-sm p-5 transition-shadow hover:shadow-md lg:col-span-2">
//       <h2 className="text-gray-500 font-bold mb-2">Revenue Chart</h2>
//       <div className="flex items-center justify-center h-48 bg-gray-50 text-gray-400 rounded-lg">
//         chart
//       </div>
//     </article>
//   );
// }

// export default RevenueChart