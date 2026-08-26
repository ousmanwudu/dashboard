import api from "./api"

// all orders
export const getOrders = ()=>{
    return api("/orders")

}

// single order
export const getOrder =(id)=>{
    return api(`/orders/${id}`)
}

// create order

export const createOrder = (order)=>{
    return api("/orders", {
        method : "POST",
        body : JSON.stringify(order)
    })
}

// update order

export const updateOrder = (id,order)=>{
    return api(`/orders/${id}`, {
        method : "PUT",
        body : JSON.stringify(order)
    })
}

// delete order

export const deleteOrder = (id)=>{
    return api(`/orders/${id}`, {
        method : "DELETE",
       
    })
}


