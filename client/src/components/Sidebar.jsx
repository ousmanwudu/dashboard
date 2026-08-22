import { X } from "lucide-react";
import SidebarItem from "./SidebarItem";
import navigation from "../constants/navigation";

function Sidebar({ open, onClose }) {
  return (
    
    <aside
      className={`
        fixed
        inset-y-0
        left-0
        z-50
        w-64
        shrink-0
        bg-gray-900
        p-6
        text-white
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:static
        md:translate-x-0
      `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Dashboard
        </h2>

        <button
          onClick={onClose}
          className="
            rounded-lg
            p-2
            text-gray-400
            transition-colors
            hover:bg-gray-800
            hover:text-white
            md:hidden
          "
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;