import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { Plus, Search } from "lucide-react";
import Input from "../../components/ui/Input";
import { useState } from "react";
import UserTable from "./UserTable";
function Users() {
  return (
    <div className="space-y-2 ">
      <header>
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="mt-1 text-gray-500">Manage your users.</p>
      </header>
      <Button icon={Plus} as={Link} to="/users/create">
        Add user
      </Button>
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section> */}
      <Input
        icon={Search}
        placeholder="search users.."
        className="md:w-80 lg:w-80 "
      />
      <UserTable />
    </div>
  );
}

export default Users;
