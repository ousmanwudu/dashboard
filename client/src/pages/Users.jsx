import Button from "../components/ui/Button";
import UserStatCard from "../components/UserStatCard";
import { EyeDashed, Plus} from "lucide-react";
function Users() {
  return (
    <div className="space-y-2 ">
      <header>
        <h1 className="text-2xl font-bold">Users</h1>

        <p className="mt-1 text-gray-500">Manage your users.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UserStatCard
          title="Active Users"
          value="234"
          description="from last month"
          icon={EyeDashed}
          variant="active"
          change="+23"
        />
        <UserStatCard
          title="Pending Users"
          value="123"
          description="from last month"
          icon={EyeDashed}
          variant="pending"
          change="+83"
        />{" "}
        <UserStatCard
          title="InActive Users"
          value="523"
          description="from last month"
          icon={EyeDashed}
          variant="inactive"
          change="-23"
        />
      </section>
      <Button type="submit">
        Add Users
      </Button>
         <Button variant="ghost">
        cancel
      </Button>
         <Button variant="danger">
        delete
      </Button>
      <Button icon={Plus}>
        {/* <Icon  /> */}
        Add Users
      </Button>
        
      <Button
  variant="primary"
  className="w-full"
>
  Login
</Button>
<Button
  variant="primary"
  className="bg-purple-600 hover:bg-purple-700"
>
  Custom Button
</Button>
    </div>
  );
}

export default Users;
