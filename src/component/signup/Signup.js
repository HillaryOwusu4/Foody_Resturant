import SignUpForm from "./SignupForms";
import { useState } from "react";
import '../signup/Sigup.css'
const Signup = ({showSignupHandler,showtext,isloginVisible}) => {

   const Showsignup = ['signup-page', isloginVisible ? 'CloseSignup' : 'OpenSignup']
    return (
        <div className={Showsignup.join(' ')}>
            <div className="w-[40%] h-full rounded-l-md bg-red-600 flex justify-center items-center">
                <div className="w-[85%]  flex flex-col justify-start items-center h-[40%]">
                    <p className="text-[48px] animate-bounce duration-1000 font-semibold text-white  mt-8
              ">Hello,Friends!</p>
                    <p className="w-[75%] mt-3 animate-bounce justify-text duration-500 text-gray-200 font-thin">Enter personal details and start eating healthy with us</p>
                    <button className="border mt-10  animate-bounce duration-250  border-white w-[60%] h-[18%] rounded-full  bg-red-500 text-white" onClick={showSignupHandler}>{showtext}</button>
                </div>
            </div>
            <div className="w-[60%] flex justify-center items-center h-full ">
                <SignUpForm isloginVisible={isloginVisible}/>
            </div>

        </div>
    );
}

export default Signup;