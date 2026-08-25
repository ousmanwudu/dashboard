import { cn }from "../../lib/utils"
function Input({label,helperText,error,className, id, icon :Icon , ...props}) {
  return (
    <div className={cn("w-full space-y-1.5", className)}>
        {label &&(
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
        )}
        
        <div className="relative flex items-center">
            {Icon && (
                <Icon className="text-gray-400 pointer-events-none absolute left-3 size-5 " /> 
            )}
            <input 
            id={id}
            className={cn(
                `
                w-full
                border
                rounded-lg
                px-3 
                py-2 
                text-sm
                bg-white
                text-gray-900
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                outline-none
                placeholder:text-gray-500
                disabled:cursor-not-allowed
                disabled:bg-gray-100
                disabled:text-gray-400
                `,
                error  && `
                    border-red-500
                    focus:border-red-500
                    focus:ring-red-500/20
                
                `,
                Icon && `pl-10 `,
               
                className
            )}
            {...props}            
        />
        </div>
       {/* error */}

       { error ? (
        <p className="text-red-500 text-sm ">{error}</p>
       ): helperText ? (
        <p className="text-gray-500 text-sm">
            {helperText}
        </p>
       ) : null

       }
    </div>
  );
}

export default Input;
