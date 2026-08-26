import order from "../../../data/order.json"
function Table (){
    return(
        <div className="overflow-x-auto border rounded-xl bg-white">
            <table className="min-w-full">
                <thead className="sticky top-0 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <tr>
                        <th className="px-4 py-2 ">order Id</th>
                        <th className="px-4 py-2 ">customer</th>
                        <th className="px-4 py-2 ">email</th>
                        <th className="px-4 py-2 ">product</th>
                        <th className="px-4 py-2 ">payment</th>
                        <th className="px-4 py-2 ">amount</th>
                        <th className="px-4 py-2 ">date</th>
                    </tr>
                </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">

                {order.map((item)=>(
                        <tr key={item.order_id}>
                            <td className="px-4 py-2">{item.order_id}</td>
                            <td  className="px-4 py-2">{item.customer}</td>
                            <td  className="px-4 py-2">{item.email}</td>
                            <td  className="px-4 py-2">{item.product}</td>
                            <td  className="px-4 py-2">{item.payment}</td>
                            <td  className="px-4 py-2">{item.amount}</td>
                            <td  className="px-4 py-2">{item.date}</td>
                        </tr>
                ))}
                    </tbody>

            </table>
            
        </div>
    )
}

export default Table