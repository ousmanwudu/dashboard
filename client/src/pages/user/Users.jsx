import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import UserStatCard from "../../components/UserStatCard";
import { EyeDashed, Plus , Search, X} from "lucide-react";
import Table from "./components/Table";
import Input from "../../components/ui/Input";
// import UserCreate from "./UserCreate";
import { useState } from "react";
function Users() {
  // const [userCreate, setUserCreate]=useState(false)
  return (
    <div className="space-y-2 ">
      <header>
        <h1 className="text-2xl font-bold">Users</h1>

        <p className="mt-1 text-gray-500">Manage your users.</p>
      </header>
      <Button icon={Plus} as={Link} to="/users/create">
        Add user
      </Button>
      {/* <Button variant="primary" icon={Plus} Link="" onClick={()=>setUserCreate(true)}>
        Add Users
      </Button> */}
      {/* overlay */}
      {/* {userCreate &&(
        <div>
          <UserCreate onClose={()=>setUserCreate(false)} />
            <X onClose={()=>setUserCreate(false)}/>
        </div>
      )} */}
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
      <Input 
          icon={Search}
          placeholder="search users.."
          className="md:w-80 lg:w-80 "
        />
      <div>
    
        
     </div>
    
      <Table /> 
    </div>
  );
}

export default Users;
