import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { useState } from "react"

const DashboardLayout = ()=>{
  const [sidebarOpen, setSidebarOpen] =useState(false)
  return(
    <main className="flex min-h-screen">
      {/* overlay */}
      {sidebarOpen && (
        <div
          onClick={()=>setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
      {/* sidebar */}

      <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)}/>
        {/* nav bar */}
      <section className="flex min-w-0 flex-1 flex-col bg-gray-100 ">
        {/* navbar */}
        <Navbar onMenuClick={()=>setSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-2">
          <Outlet/>
      </main>

      </section>
      
    </main>
  )
}

export default DashboardLayout