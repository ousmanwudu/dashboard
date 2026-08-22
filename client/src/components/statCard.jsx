function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
}) {
  return (
    <article
      className="
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
        transition-shadow
        hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between ">
        <p className="text-sm font-bold text-gray-500">{title}</p>
        <div className="flex  items-center justify-center rounded-lg  bg-gray-100 size-10">
        <Icon className="size-5 text-gray-900 " />

        </div>
      </div>
     

      {/* Value */}
      <div>
        <p className="mt-4 text-2xl font-bold text-gray-500" >{value}</p>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center gap-2 text-sm">

        <span className="font-medium text-green-600">
          {change}
        </span>

        <span className="text-gray-500">
          {description}
        </span>

      </div>
    </article>
  );
}

export default StatCard;