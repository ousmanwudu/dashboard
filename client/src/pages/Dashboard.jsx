import {
  Users,
  ShoppingCart,
  DollarSign,
  Clock,
  Check,
  X,
  Loader,
  Circle,
} from "lucide-react";
import StatCard from "../components/statCard";
import Card from "../components/Card";
import Badge from "../components/Badge";
import IconButton from "../components/ui/IconButton";
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
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

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

        <Card className="p-5 lg:col-span-2">
          Revenue Chart
        </Card>

        <Card className="p-5">
          Recent Orders
        </Card>

      </section>

    </div>
  );
}

export default Dashboard;
