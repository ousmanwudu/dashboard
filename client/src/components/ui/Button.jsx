import { cn } from "../../lib/utils";

function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  disabled = false,
  type = "button",
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        "inline-flex justify-center items-center rounded-lg transition-colors",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",

          "bg-gray-100 text-gray-900 hover:bg-gray-200":
            variant === "secondary",

          "bg-transparent text-gray-600 hover:bg-gray-100": variant === "ghost",

          "bg-red-600 text-white hover:bg-red-700": variant === "danger",

          "bg-green-600 text-white hover:bg-green-700": variant === "success",

          "cursor-not-allowed opacity-50": disabled,
        },
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="mr-2 size-4" />}
      {children}
    </button>
  );
}

export default Button;
