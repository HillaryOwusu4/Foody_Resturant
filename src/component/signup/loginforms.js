import { useRef, useState } from "react";
import { useContext } from "react";
import {useHistory} from "react-router-dom";
import Authcontext from "../store/auth-context";
import MoonLoader from "react-spinners/MoonLoader";
const LoginForms = (props) => {

    const history = useHistory()
    

    const loginContext = useContext(Authcontext)
    const location = loginContext.history


    let enterendEmailref = useRef()
    let enterendPasswprdref = useRef()
    const [spinner, setSpinner] = useState(false)
     const[redirectPath,setRedirectPath]=useState(null)

    // const getFromRoute = () => {
    //   const paths = props?.location?.state?.from;
    //   if (paths?.pathname !== '') {
    //     setRedirectPath(`${paths?.pathname}`);
    //   }
    //   if (paths?.pathname !== '' && paths?.search !== '') {
    //   setRedirectPath(`${paths?.pathname}${paths?.search}`);
    //   }
    // }

    const SubmitLoginHandler = (event) => {
        event.preventDefault()
        const Email = enterendEmailref.current.value
        const Password = enterendPasswprdref.current.value
        setSpinner(true)
    
   
       
     
       
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_og44gGgoRILZ7bJ_X2SzlDL6edzvDp4'
        
        fetch(url,
          {
            method:'POST',
            body:JSON.stringify({
              email:Email,
              password:Password,
              returnSecureToken:true
            }),
            headers:{
            'Content-Type': 'application/json'
            }
          }).then((res) => {
          
            setSpinner(false)
            if(res.ok){
             return res.json()
             
            }else{
       
                
              return res.json().then((data) =>{
                 let errorMessage = 'Athentication Failed'
              if(data && data.error && data.error.message){
                errorMessage= data.error.message
              }
              
              throw new Error(errorMessage)
              })
            }
          }).then(data => {
            loginContext.login(data.idToken)
            history.replace(`${location}`)
          }).catch(err =>{
            alert(err.message)
          })
         
          enterendEmailref.current.value = ''
          enterendPasswprdref.current.value=''
    }




    return (<div className="w-[80%] flex flex-col  items-center justify-center h-[80%] ">
        <div className="w-full h-[30%] font-semibold flex justify-center items-end ">
            <p className="text-[43px] ">Sign In</p>
        </div>
        <div className="w-full h-[70%]">
            <form className="w-full  items-center outline-none flex  flex-col h-full" onSubmit={SubmitLoginHandler}>
                <input type="email" placeholder="Email" ref={enterendEmailref} className="w-[90%] bg-gray-200 border mt-10  h-[14%] outline-none p-4" />
                <input type="password" placeholder="Password" ref={enterendPasswprdref} className="w-[90%] bg-gray-200 outline-none mt-4 h-[14%] p-4" />
              {!spinner &&  <button className="border mt-10 lg:h-[15%] hover:bg-red-800  border-white w-[43%] h-[12%] rounded-full  bg-red-500 text-white ">Sign In</button>}
                {spinner && <MoonLoader color="#d52000" size={30} className=" mt-10   w-[50%] h-[14%]    " />}
            </form>

        </div></div>);
}

export default LoginForms;