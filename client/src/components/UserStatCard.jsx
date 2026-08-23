const variants = {
  active: {
    icon: "bg-green-100 text-green-700",
    change: "text-green-600",
  },
  inactive: {
    icon: "bg-yellow-100 text-yellow-700",
    change: "text-green-600",
  },

  pending: {
    icon: "bg-blue-100 text-blue-700",
    change: "text-green-600",
  },
  danger: {
    icon: "bg-red-100 text-red-700",
    change: "text-red-600",
  },
};

function UserStatCard({
  title,
  value,
  description,
  change,
  variant = "pending",
  icon: Icon,
}) {
  const styles = variants[variant];
  return (
    <article className="rounded-xl border bg-white hover:shadow-sm ">
      {/* Headers */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500 font-bold text-2xl">{title}</p>
        <div
          className={`flex items-center justify-center size-10 ${styles.icon}`}
        >
          <Icon className="size-5 " />
        </div>
      </div>
      {/* Values */}
      <div>
        <p className="text-2xl text-gray-500 font-bold mt-4">{value}</p>
      </div>

      {/* footers */}
      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className={`font-medium ${styles.change}`}>{change}</span>

        <span className="text-gray-500">{description}</span>
      </div>
    </article>
  );
}

export default UserStatCard;
