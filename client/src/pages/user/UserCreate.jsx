import Input from "../../components/ui/Input";
import Card from "./components/Card";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreate() {
  const navigate = useNavigate();
  const  [errors, setErrors] =useState({})
const roleOpt =[
    {value: "", label : "slect role "},
    {value : "admin", label: "admin role"},
    {value : "customer", label: "customer role"},
]
  const [formUser, setFormUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
const [loading, setLoading]=useState(false)
const [serverError, setServerError] =useState("")

const createUsers= async (users)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        success : true,
        message :" user created successfully",
        users
      });
    }, 2000);
  });

}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const validate =()=>{
  const newError = {}
  if(!formUser.name.trim()) {
    newError.name= "name is required"
  }
  if(!formUser.email.trim()){
    newError.email ="email is required"
  } else if (!/\S+@\S+\.\S+/.test(formUser.email)){
    newError.email = "plz enter valid email"
  }
  //password
  if(!formUser.password){
    newError.password = "password is required"
  } else if(formUser.password.length < 8){
    newError.password = "pass min at leasts 8"
  }
  // role
  if(!formUser.role) newError.role ="role is required"

  setErrors(newError)
  return Object.keys(newError).length === 0
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate()
    if(!isValid){
      return;
    }
    console.log("Form Submitted:", formUser);
    
    navigate("/users");
  };


  return (
    <div className="w-full ">
      <Card className="p-6 space-y-4">
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold">Create new User</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="full name"
            name="name" 
            placeholder="osman wudu"
            required
            value={formUser.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Input
            label="email"
            name="email" 
            type="email"
            placeholder="osman@gmail.com"
            required
            value={formUser.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="password"
            name="password" 
            type="password"
            placeholder="*****"
            required
            value={formUser.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Select
            label="Role"
            name="role"
            id="role"
            value={formUser.role}
            onChange={handleChange}
            required
            options={roleOpt}
            error={errors.role}

          />

          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/users")}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default UserCreate;