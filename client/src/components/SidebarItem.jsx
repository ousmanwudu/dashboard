import { cn } from "../lib/utils";

import { NavLink } from "react-router-dom";
function SidebarItem({ icon: Icon, label, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            "group relative flex items-center gap-3 rounded-lg px-4 py-2 transition-colors",
            {
              "bg-gray-800 text-white": isActive,
              "text-gray-300 hover:bg-gray-800 hover:text-white": !isActive,
            },
          )
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <span
                className="
              absolute
              left-0
              h-6
              w-1
              rounded-r
              bg-blue-500
            "
              />
            )}

          <Icon
  className={cn(
    "size-5",
    {
      "text-white": isActive,
      "text-gray-400 group-hover:text-white": !isActive,
    }
  )}
/>

            <span>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
