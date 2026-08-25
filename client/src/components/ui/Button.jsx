import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

function Button({
  children,
  variant = "primary",
  as: Component = "button", 
  size = "md",
  icon: Icon,
  disabled = false,
  type = "button",
  className,
  ...props
}) {
  const styles =
    "inline-flex justify-center items-center font-medium rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  return (
    <Component
      disabled={disabled}
      type={Component === "button" ? type : undefined}
      className={cn(styles, sizes[size], variants[variant], className)}
      {...props}
    >
      {Icon && <Icon className="mr-2 size-4" />}
      {children}
    </Component>
  );
}

export default Button;

