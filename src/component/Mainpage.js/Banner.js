import { useState } from "react"


const Banner1 = ({onViewMenu,ViewandCloseHandler,onviewMenuapp,Menumessage,onCloseMenu, menu}) => {

    

    let content = "it's not just food it's an experience and a feeling."
    const  Menulist = 'View menu'
    const closeMenu = 'Close menu'
    return ( <div className="w-[80%] flex h-[50%] ">
        <div className="w-[50%] h-full">
            <div className="w-full h-[80%] font-bold text-[70px] flex items-center leading-[65px] ">{content}</div>
            <div className="w-[70%] flex justify-between items-center h-[20%] ">
                <button className='w-[45%] hover:translate-x-6 hover:duration-1000 hover:ease-in-out h-[60%] hover:bg-red-700 bg-red-600 rounded-full text-white' onClick={menu?onCloseMenu:onViewMenu}>{Menumessage}</button>
                {/* <button className='w-[45%] h-[60%] hover:bg-slate-100 bg-white rounded-full text-black' onClick={onCloseMenu}>{closeMenu}</button> */}
            </div>
        </div>
        <div className="w-[50%] h-full ">
            <img src="/images/Foody_Restau_Design_.png" alt="food" className='w-[75rem] contrast-100 lg:w-[90%] brightness-125  h-full'/>
        </div>
    </div> );

}
 
export default Banner1;