import Signup from "./Signup";
import Login from "./login";
import { useState } from "react";
import Authcontext from "../store/auth-context";
import { useContext } from "react";

const MainSignup = ({setshowlogout}) => {
    const MainContext = useContext(Authcontext)
    
    const[isVisible,setisVisible] = useState(false)
    const[isloginVisible,setisloginVisible] = useState(true)
    const showLoginHandler =()=>{
        setisVisible(true)
        setisloginVisible(false)
    }
    const showSignupHandler =()=>{
        setisVisible(false)
        setisloginVisible(true)
    }

    let showtext = isVisible ?  'Sign In' : 'Sign up'

    return ( <div className="w-full flex justify-center h-full">
        { isVisible && <Signup showSignupHandler={showSignupHandler} showtext={showtext} isloginVisible={isloginVisible}/>}
         {isloginVisible && <Login setshowlogout={setshowlogout} showLoginHandler={showLoginHandler} showtext={showtext} isVisible={isVisible}/>}

    </div> );
}
 
export default MainSignup;