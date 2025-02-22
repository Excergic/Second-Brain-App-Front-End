import { ReactElement } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
    variant : Variant;
    size : Size;
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick? : () => void;
}

// Key-Value pair of variants and their corresponding styles
const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600" 
}

const sizeStyles = {
    "sm" : "px-2 py-1 text-sm",
    "md" : "px-4 py-2 text-md",
    "lg" : "px-6 py-3 text-lg"
}

const defaultStyles = "rounded -md flex"

export const Button = (props : ButtonProps) => {
    
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
}

