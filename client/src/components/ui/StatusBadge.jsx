function StatusBadge({ status }) {
  const styles = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-gray-100 text-gray-600",

    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-yellow-100 text-yellow-700",

    paid: "bg-green-100 text-green-700",
    delivered: "bg-green-100 text-green-700",

    shipped: "bg-blue-100 text-blue-700",

    refunded: "bg-yellow-100 text-yellow-700",

    failed: "bg-red-100 text-red-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const key = String(status).toLowerCase();

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[key] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
// function StatusBadge({ status }) {
//   const styles = {
//     active: "bg-green-100 text-green-700",
//     inactive: "bg-gray-100 text-gray-600",
//     pending: "bg-yellow-100 text-yellow-700",
//     paid : "bg-green-100 text-green-700",
//     refunded : "bg-yellow-100 text-yellow-700",
//     failed : "bg-red-100 text-red-700"
//   };

//   return (
//     <span
//       className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//         styles[status] || "bg-gray-100 text-gray-600"
//       }`}
//     >
//       {status}
//     </span>
//   );
// }

// export default StatusBadge;
