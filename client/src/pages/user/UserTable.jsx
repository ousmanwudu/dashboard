import { useEffect, useState } from "react";
import Table from "../../components/ui/Table";
import { getUsers } from "../../services/userServices"; 
import StatusBadge from "../../components/ui/StatusBadge";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const columns =[
    {
        key : "name",
        header : "Name"
    },
    {
        key : "email",
        header : "Email"
    },
    {
        key : "role",
        header : "Role"
    },
    {
        key : "status",
        header : "Status",
        render : (value)=>(
            <StatusBadge status={value} />
            // <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
            //     {value}
            // </span>
        )
    },
    {
        key : "actions",
        header: "Actions",
        render : (_, row)=>(
            <div className="flex gap-2">
                <button 
                    className="rounded-md px-2 py-1 text-xs text-blue-600 hover:bg-blue-50"
                    onClick={()=>console.log("Edit", row.id)}
                >
                    Edit
                </button>
                <button
                    className="rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                    onClick={() => console.log("Delete", row.id)}
                >
                    Delete
                </button>

            </div>
        )
    } 

  ]

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getUsers(); 
      setUsers(response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 font-bold text-blue-600">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      
      <Table data={users} columns={columns} rowKey="id"/>
    </div>
  );
}

export default UserTable;