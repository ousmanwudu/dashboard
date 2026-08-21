import { Users, LayoutDashboard, ShoppingCart, Settings, Menu } from "lucide-react";


const navigation = [
    {
        label : "Dashboard",
        icon : LayoutDashboard,
        active : true
    },
    {
        label :"Users",
        icon :Users,
        active : false

    },
    {
        label :"Orders",
        icon :ShoppingCart,
        active : false

    },
    {
        label : "Reports",
        icon : Menu,
        active : false

    },
    {
        label : "Settings",
        icon : Settings,
        active : false

    }
]

export default navigation