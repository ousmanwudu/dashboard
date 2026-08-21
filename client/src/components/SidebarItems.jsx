function SidebarItems ({icon : Icon , label , active=false}){
    return(
        <li>
            <a 
                className={
                    `
                        group
                        relative
                        flex
                        items-center
                        gap-3
                        transition-colors
                        rounded-lg
                        px-4
                        py-2
                    
                        ${active ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                    `
                }
            >
                { active && (
                    <span 
                        className="
                            absolute
                            w-1
                            h-6
                            left-0
                            rounded-r
                            bg-blue-500
                        "
                    />
 
                )}
                <Icon
                    className={`
                     size-5
                     ${active ? "text-white" : "text-gray-400 group-:hover:text-white"}    
                    `}
                />
                <span>{label}</span>
            </a>
        </li>
    )
}

export default SidebarItems