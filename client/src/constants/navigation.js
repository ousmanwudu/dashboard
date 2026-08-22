import { Users, LayoutDashboard, ShoppingCart, Settings, FileText } from "lucide-react";


const navigation = [
    {
        label : "Dashboard",
        icon : LayoutDashboard,
        path : "/dashboard",
         
    },
    {
        label :"Users",
        icon :Users,
        path : "/users",
         

    },
    {
        label :"Orders",
        icon : ShoppingCart,
        path : "/orders",
         

    },
    {
        label : "Reports",
        icon : FileText,
        path : "/reports",
         

    },
    {
        label : "Settings",
        icon : Settings,
        path : "/settings",
         

    }
]

export default navigation