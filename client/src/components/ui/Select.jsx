import {cn} from "../../lib/utils"
const Select = ({
  className,
  label,
  id,
  error,
  options = [],
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        className={cn(
          `
          w-full
          rounded-lg
          border
          bg-white
          px-3
          py-2
          text-sm
          text-gray-900
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          `,
          error && `
          border-red-500 focus:border-red-500 focus:ring-red-500/20
          `,
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Select;

// const Select = ({children , className, label, id ,options=[], ...props})=>{
//     return(
//         <div className="space-y-1.5">
//             {label && (
//                 <label htmlFor={id} className="text-sm text-gray-800 block">
//                     {label}
//                 </label>
//             )}
//             <select id={id} className={cn(
//             "text-gray-700 font-light",
//             className
//         )}
//         {...props}
//         >
//             {options.map((opt)=>(
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             {children}
//         </select>
//         </div>
        
//     )
// }

// export default Select