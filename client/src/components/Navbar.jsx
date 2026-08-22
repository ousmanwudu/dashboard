import {
  Menu,
  Bell,
  ArrowDown,
} from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header
      className="
        flex
        h-16
        items-center
        border-b
        bg-white
        px-4
        sm:px-6
      "
    >
      {/* Mobile menu */}
      <button
        onClick={onMenuClick}
        className="
          rounded-lg
          p-2
          transition-colors
          hover:bg-gray-100
          md:hidden
        "
      >
        <Menu className="size-5" />
      </button>

      {/* Page / application title */}
      <div className="ml-2 md:ml-0">
        <span className="font-semibold text-gray-900">
          Admin Panel
        </span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">

        {/* Notification */}
        <button
          className="
            rounded-lg
            p-2
            transition-colors
            hover:bg-gray-100
          "
        >
          <Bell className="size-5 text-gray-600" />
        </button>

        {/* User */}
        <button
          className="
            flex
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            transition-colors
            hover:bg-gray-100
          "
        >
          <span className="text-sm font-medium">
            Osman
          </span>

          <ArrowDown className="size-4 text-gray-500" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;