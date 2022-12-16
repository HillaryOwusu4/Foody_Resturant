import '../signup/Login.css'
import LoginForms from "./loginforms";

const Login = ({showLoginHandler,showtext,isVisible,}) => {
 
    const Showlogin = ['login-page', isVisible ?  'Closelogin':'Openlogin']

    return ( <div className={Showlogin.join(' ')}>
        <div className="w-[55%] flex justify-center items-center h-full ">
          <LoginForms isVisible={isVisible}/>
        </div>
        <div className="w-[45%] h-full  bg-red-400">
        <div className="w-full h-full rounded-l-md bg-red-600 flex justify-center items-center">
                <div className="w-[85%]  flex flex-col justify-start items-center h-[40%]">
                    <p className="text-[48px] animate-bounce font-semibold text-white  mt-8
              ">Welcome Back!</p>
                    <p className="w-[65%] mt-3 justify-text animate-bounce text-gray-200 font-thin">To keep connected with us please login with your personal info</p>
                    <button className="border mt-10  animate-bounce border-white w-[60%] h-[18%] rounded-full  bg-red-500 text-white" onClick={showLoginHandler}>{showtext}</button>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Login;