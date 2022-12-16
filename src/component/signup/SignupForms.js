import '../store/Userform.css'
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from 'react-spinners/MoonLoader';
import { useState, useRef, } from 'react';
const SignUpForm = ({ isloginVisible }) => {
    const [spinner, setSpinner] = useState(false)

    const enterendname = useRef()
    const enterendEmail = useRef()
    const enterendPassword = useRef()

    const SubmitHandler = (event) => {
        event.preventDefault()
        const Username = enterendname.current.value
        let UserEmail = enterendEmail.current.value
        const UserPassword = enterendPassword.current.value
        setSpinner(true)


       
         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_og44gGgoRILZ7bJ_X2SzlDL6edzvDp4'
        
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        name: Username,
                        email: UserEmail,
                        password: UserPassword,
                        returnSecureToken: true
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
            
                setSpinner(false)
                
                if (res.ok) {
                    let susceesful  = 'Signed up successfully'
                    alert(susceesful)
                    return res.json()
                   
                } else {
                    return res.json().then(data => {
                        let errorMessage = 'Authentication Failed';
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message
                        }


                        throw new Error(errorMessage)
                    })
                }
            }).then(data => 
                { 
                }).catch(err => {
                alert(err.message)
            })

            enterendname.current.value = ''
            enterendEmail.current.value = ''
            enterendPassword.current.value = ''
    }
    return (<div className="w-[80%] h-[80%] ">
        <div className="w-full h-[30%] font-semibold flex justify-center items-end ">
            <p className="text-[43px] ">Create Account</p>
        </div>
        <div className="w-full h-[70%]" onSubmit={SubmitHandler}>
            <form className="w-full  items-center outline-none flex  flex-col h-full">
                <input type="text" placeholder="Name" ref={enterendname} className="w-[90%] bg-gray-200 border mt-10  h-[16%] outline-none p-4" />
                <input type="email" placeholder="Email" ref={enterendEmail} className="w-[90%] bg-gray-200 border mt-4  h-[16%] outline-none p-4" />
                <input type="password" placeholder="Password" ref={enterendPassword} className="w-[90%] bg-gray-200 outline-none mt-4 h-[16%] p-4" />
                {spinner && <MoonLoader color="#d52000" size={30} className=" mt-10   w-[50%] h-[14%]    " />}
                {!spinner && <button className="border mt-10   border-white w-[50%] h-[14%] rounded-full hover:bg-red-800 bg-red-500 text-white " >Sign Up</button>}

            </form>

        </div>



    </div>);
}

export default SignUpForm;