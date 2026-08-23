import { Menu, Bell, ArrowDown } from "lucide-react";
import Button from "./ui/Button";
import IconButton from "./ui/IconButton";

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

      <IconButton
        onClick={onMenuClick}
        icon={Menu}
        variant="ghost"
        className="md:hidden"
        aria-label="Open menu"
      />

      {/* Page / application title */}
      <div className="ml-2 md:ml-0">
        <span className="font-semibold text-gray-900">Admin Panel</span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">
        {/* Notification */}
        <IconButton icon={Bell}  aria-label ="Notifications"/>

        {/* User */}
        
          <span className="text-sm font-medium">Osman</span>

          <ArrowDown className="size-4 text-gray-500" />
        
      </div>
    </header>
  );
}

export default Navbar;
