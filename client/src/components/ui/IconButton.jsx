import { cn } from "../../lib/utils";
function IconButton({
  children,
  onClick,
  type = "button",
  variant = "ghost",
  size = "sm",
  className,
  icon: Icon,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex justify-center items-center rounded-lg transition-colors",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",

          "bg-gray-100 text-gray-900 hover:bg-gray-200":
            variant === "secondary",

          "bg-transparent text-gray-600 hover:bg-gray-100": variant === "ghost",

          "bg-red-600 text-white hover:bg-red-700": variant === "danger",

          "bg-green-600 text-white hover:bg-green-700": variant === "success",
          "size-8": size === "sm",
          "size-10": size === "md",
          "size-12": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="size-4" />}
      {children}
    </button>
  );
}

export default IconButton;
