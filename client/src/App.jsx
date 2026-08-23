import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}/>
      <Route path="users" element={<Users />}/>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="orders" element={<Orders />}/>
      <Route path="reports" element={<Reports />}/>
      <Route path="settings" element={<Settings />}/>
      <Route path="*" element={<Navigate to="/dashboard" replace/>} />
    </Routes>
  </BrowserRouter>    
  );
}

export default App;