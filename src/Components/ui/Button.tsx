import { ReactElement } from "react"

interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    title : string;
    startIcon? : ReactElement; //optional
    endIcon? : ReactElement ;// optional
    onclick? : () => void;
}

// Global Styles for size so that we can use directly to component
const sizeStyles = {
    "sm" : "px-2 py-1 text-sm rounded-sm",
    "md" : "px-4 py-2 text-md rounded-md",
    "lg" : "px-8 py-4 text-xl rounded-xl",   
}

// Global Styles for variant so that we can use directly to component
const varianStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-blue-300 text-purple-600",
}  

const defaultStyle = "px-4 py-2 rounded-md font-light";

export const Button = (props : ButtonProps) => {
    return <><div className="mt-4">
    <button className={`${sizeStyles[props.size]} ${defaultStyle} ${varianStyles[props.variant]}`} onClick={props.onclick}>
        <div className="flex items-center">
            {props.startIcon} 
                <div className="pl-2 pr-2">
                    {props.title}
                </div> 
            {props.endIcon}
        </div>
    </button>
</div>
    </>
}