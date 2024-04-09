import { TbFolders, TbUsers} from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";

const SideBar = [
    {
        title: "Dashboard",
        icon: <GrHomeRounded size={20}/>
    },
    {
        title:"Summary",
        icon: <TbFolders size={20}/>
    },
    {
        title:"Profile",
        icon: <TbUsers size={20}/>
    },
    {
        title:"Contact Us",
        icon: <BiSolidContact size={20}/>
    }
]

export default SideBar;