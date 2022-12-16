import Banner1 from "./Banner";
import Itemlist from "./Itemlist";
import { useState } from "react";

const Mainpage = () => {
    const[menu,setmenu] = useState(true)
    const ViewMenu = ()=>{
        setmenu(true)
    }
    const CloseMenu = () =>{
        setmenu(false)
    } 
  
   const ShowItemlist = ['parent_div','left-arrow', menu ? 'openitem':'closeitem']
    
    const Menumessage =  menu ? 'Close Menu':'View menu'
       
    return ( <div className="w-full h-[85%] flex flex-col  items-center ">
        <Banner1 onViewMenu = {ViewMenu}  Menumessage={Menumessage} onCloseMenu = {CloseMenu} menu={menu}/>
       {menu && <Itemlist ShowItemlist={ShowItemlist}/>}

    </div> );
}
 
export default Mainpage;