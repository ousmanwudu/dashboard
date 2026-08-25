import {
  Users,
  ShoppingCart,
  DollarSign,
  Clock,
} from "lucide-react";
import StatCard from "./components/statCard";
import Card from "../user/components/Card";
import RevenueChart from "./components/RevenueChart";
import ActivityPanel from "./components/ActivityPanel"
import RecentOrders from "./components/RecentOrders"
function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-gray-500">
          Welcome back to your dashboard.
        </p>
      </header>


      {/* Stats */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">

        <StatCard
          title="Total Users"
          value="1,334"
          change="+23%"
          description="from last month"
          icon={Users}
          variant="default"
        />
        <StatCard
          title="Total Orders"
          value="356"
          change="+8.2%"
          description="from last month"
          icon={ShoppingCart}
          variant="success"
        />

        <StatCard
          title="Pending Orders"
          value="76"
          change="-2%"
          description="from last month"
          icon={Clock}
          variant="warning"
        />

        <StatCard
          title="Revenue"
          value="$2,356"
          change="+5%"
          description="from last month"
          icon={DollarSign}
          variant="success"
        />

      </section>


      {/* Main content */}
 

<section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
    <RevenueChart className="lg:col-span-2" />

  {/* <ActivityPanel /> */}
  <ActivityPanel className="lg:col-span-1 lg:row-span-2" />

    <RecentOrders className="lg:col-span-2"/>
</section>
    </div>
  );
}

export default Dashboard;
