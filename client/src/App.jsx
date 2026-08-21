import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Menu, Bell,ArrowDown } from "lucide-react"
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="flex min-h-screen">
      {/* overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
      
      <Sidebar 
        open={sidebarOpen}
        onClose={handleSidebar}
      />
      <section className="flex-1 bg-gray-100">
        <nav className="flex items-center border-b bg-white px-6 py-4">
          {/* menu bar for mobile */}
          <button
            onClick={handleSidebar}
            className="rounded-lg p-2 bg-gray-100 md:hidden"
          >
            <Menu className="size-5" />
          </button>
          <div>
            <span className="font-semibold">Admin Panel</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <Bell className="size-5" />
            </button>

            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors hover:bg-gray-100">
              Osman
              <ArrowDown className="size-5" />
            </button>
          </div>
        </nav>

        <div className="p-6">
          <header>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-gray-500">
              Welcome back to your dashboard.
            </p>
          </header>
        </div>
      </section>
    </main>
  );
}

export default App;
