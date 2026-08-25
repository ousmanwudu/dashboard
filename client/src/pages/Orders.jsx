import Input from "../components/ui/Input";

function Orders() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Orders
      </h1>

      <p className="mt-1 text-gray-500">
        Manage your Orders.
      </p>
     
     {/* <div className="flex items-center  gap-2 border rounded-lg px-3 py-2 bg-white  focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 ">
      <search className="size-5 text-gray-400 "/>
        <input 
          className="w-full  bg-transparent placeholder:text-gray-400 outline-none"
          placeholder="search users"
        />
     </div> */}
     {/* Input */}
     <Input label="Full name" placeholder="enter ur name" />
     <Input label="Email" placeholder="example@email.com" type="email" error="plz enter valid email" />
     <Input label="Password" placeholder="****" type="password" />
    </div>
  );
}

export default Orders;