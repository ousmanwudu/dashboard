const variants = {
    default : "bg-gray-100, text-gray-700",
    warning : "bg-yellow-100, text-yellow-700",
    success : "bg-green-100, text-green-700",
    danger : "bg-red-100 text-red-700",
    info : "bg-blue-100, text-blue-700",
}

function Badge({children ,variant="default" ,icon : Icon}){
    return(
        <span className={`inline-flex rounded-full items-center px-2.5 py-1 gap-2 font-medium text-sm ${variants[variant]}`}>
            {Icon && <Icon className="size-3.5" />}
            {children}
        </span>
    )
}

export default Badge