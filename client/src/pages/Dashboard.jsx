import { Users, ShoppingCart, DollarSign, Clock } from "lucide-react";
import StatCard from "../components/statCard";
import Card from "../components/Card";
function Dashboard() {
  return (
    <div className="space-y-6 px-6 ">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-gray-500">Welcome back to your dashboard.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value="1,334"
          change="+23%"
          description="form last month"
          icon={Users}
        />
        <StatCard
          title="Total Orders"
          value="356"
          change="+8.2%"
          description="from last month"
          icon={ShoppingCart}
        />
        {/* <Card className="p-5 "/> */}
        <StatCard title="Pending Orders" value="76" icon={Clock} description="from last month" change="-2%"/>
        <StatCard title="Revenues" value="$2356" icon={DollarSign} description="from last month" change="5%" />
      </section>
    </div>
  );
}

export default Dashboard;
