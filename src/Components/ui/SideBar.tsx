
import { AppIcon } from "../../Icons/AppIcon";
import { TwitterIcon } from "../../Icons/TwitterIcon";
import { YouTubeIcon } from "../../Icons/YouTubeIcon";
import { SideBarItems } from "./SideBaritems";


export function SideBar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-green-600">
            <AppIcon />
            </div>
        Second Brain 
        </div>
        
        <div className="pt-4 pl-4">
            <SideBarItems text="YouTube" icon={<YouTubeIcon />} />
            <SideBarItems text="X (Twitter)" icon={<TwitterIcon />} />
        </div>
    </div>
}