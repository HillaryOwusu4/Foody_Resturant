import { Link } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import CartContext from "../store/Context";
import Authcontext from "../store/auth-context";
import { useHistory } from "react-router-dom";
const Navbar = () => {
    const NavContext = useContext(Authcontext)
   const history = useHistory()
    const isLoggedin = NavContext.isLoggedIn
    const Cartlist = useContext(CartContext)
    const showlogout = NavContext.showlogout
    const udatedamount1 = Cartlist?.items.length;
    const udatedamount = Cartlist?.items.reduce((curreitem, item) => {
        return curreitem + item.amount
    }, 0)
  
  
      const logoutHandler = ()=>{
       NavContext.logout()
      history.replace('/')
      }
 
   

    const NavData = [{
        label: 'images/Foody_Restaurant-removebg-preview.png',
        home: 'Home',
        Menu: 'Menu',
        about: 'About Us',
        data: 'Contact',
        signup: 'Sign In'
        , Logout: 'Logout'

    }]


  
 
   
    // let Linkroute = showlog ? '/Signup':'/Logout'

    return (
        <div className="w-[80%] h-[13%]">
            {NavData.map((item, index) => {
             const ShowLogout = isLoggedin ? item.Logout:item.signup
                return (
                    <div className="w-full flex  h-full" key={index + 'navitems'}>
                        <div className="w-[15%]  flex  items-center text-[25px] h-full"><img src={item.label
                        } alt="" /> </div>
                        <div className="w-[70%] flex justify-center   h-full">
                            <ul className="w-[70%] h-full flex justify-around ml-[-200px] font-semibold items-center ">
                                <Link to='/'> <li className=" hover:text-red-600">{item.home}</li></Link>
                           <Link to='/menu'><li className=" hover:text-red-600">{item.Menu}</li></Link>
                              <Link to='/about'><li className=" hover:text-red-600">{item.about}</li></Link>
                                <Link to='/contact'><li className=" hover:text-red-600">{item.data}</li></Link>
                                
                            </ul>
                        </div>
                        <div className="w-[15%] flex  items-center justify-center h-full">
                            <div className="w-[25%] items-center h-full  hover:text-white flex relative"> <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> <div className=" text-[14px] text-white flex justify-center w-[60%] rounded-full bg-red-600 h-[17%] top-9 left-4 absolute">{udatedamount}</div> </Link></div>
                            {!isLoggedin &&  <Link to='/Signup'  className="w-[75%]   bg-[#C91924] h-[40%] text-white rounded-full flex justify-center items-center hover:translate-x-6 hover:duration-1000 hover:ease-in-out" > <button >{ShowLogout}</button></Link>
                            }
                            {isLoggedin && <button className="w-[75%] bg-[#C91924]  h-[40%] hover:bg-red-800 text-white rounded-full hover:translate-x-6 hover:duration-1000 hover:ease-in-out flex justify-center items-center" onClick={logoutHandler} >{item.Logout}</button>}
                        </div>

                    </div>)
            })}

        </div>
    );
}

export default Navbar;