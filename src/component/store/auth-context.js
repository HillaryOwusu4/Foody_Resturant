import React, { useState } from "react";
import { useHistory } from "react-router";
const Authcontext = React.createContext({
    token: '',
    showlogout: false,
    isLoggedIn: false,
    showSignup: true,
    history: '',
    login: (token) => { },
    logout: () => { }
});

export const Authprovider = (props) => {
    const initaltoken = localStorage.getItem('token')

    const trues = localStorage.getItem('boolean')
    const [showlogout, setshowlogout] = useState(false)
    const [showSignup, setshowSignup] = useState(true)
    const [token, setToken] = useState(initaltoken)




    const UserIsLoggedIn = !!token;

    const LoginHandler = (token) => {
        setToken(token)
        setshowlogout(true)
        setshowSignup(false)
        localStorage.setItem('token',token)
        localStorage.setItem('boolean',JSON.stringify(true))

    }

    const LogoutHandler = () => {
        setToken(null)
        setshowlogout(false)
       
        setshowSignup(true)
        localStorage.removeItem('token')

    localStorage.removeItem('boolean')
    }

    const Authvalue = {
        showlogout: showlogout,
        showSignup: showSignup,
        history: '',
        token: token,
        isLoggedIn: UserIsLoggedIn,
        login: LoginHandler,
        logout: LogoutHandler
    }

    return (
        <Authcontext.Provider value={Authvalue}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authcontext;