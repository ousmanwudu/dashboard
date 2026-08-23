import {clsx} from "clsx"
import { NavLink } from "react-router-dom";
function SidebarItem({ icon: Icon, label, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => `
          group
          relative
          flex
          items-center
          gap-3
          rounded-lg
          px-4
          py-2
          transition-colors
          ${
            isActive
              ? "bg-gray-800 text-white"
              : "text-gray-300 hover:bg-gray-800 hover:text-white"
          }
        `}
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
              className={`
            size-5
            ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}
          `}
            />

            <span>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
