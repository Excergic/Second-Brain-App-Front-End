
//conrolled component

import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./input";

export function CreateContentModal ({open, onClose}) {
    return <div>
    {open && <div className="w-screen h-screen bg-slate-500 
    fixed top-0 left-0 opacity-80 flex justify-center">
        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer dark:md:hover:bg-red-600">
                        <CrossIcon/>
                    </div>
                </div>
                <div>
                    <Input placeholder = {"Title"}/>
                    <Input placeholder = {"Link"}/>
                </div>
                <center>
                <Button variant="primary" title="Submit" size="md"/>
                </center>
            </span>
            
        </div>
    </div>}
    </div>
}
