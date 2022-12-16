import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import Authcontext from "./auth-context";
import { useHistory } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    let auth = useContext(Authcontext)
    
      const history = useHistory()
     
      auth.history = history.location.pathname

  


    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Signup",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  