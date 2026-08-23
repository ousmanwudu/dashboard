const variants = {
  default: {
    icon: "bg-gray-100 text-gray-600",
    change: "text-gray-600",
  },

  success: {
    icon: "bg-green-100 text-green-600",
    change: "text-green-600",
  },

  warning: {
    icon: "bg-yellow-100 text-yellow-600",
    change: "text-yellow-600",
  },

  danger: {
    icon: "bg-red-100 text-red-600",
    change: "text-red-600",
  },
};

function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  variant = "default",
}) {

  const styles =variants[variant]
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
        <div className={`flex  items-center justify-center rounded-lg size-10 ${styles.icon}`}>
          <Icon className="size-5 text-gray-900 " />
        </div>
      </div>

      {/* Value */}
      <div>
        <p className="mt-4 text-2xl font-bold text-gray-500">{value}</p>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className={`font-medium ${styles.change}`}>{change}</span>

        <span className="text-gray-500">{description}</span>
      </div>
    </article>
  );
}

export default StatCard;
