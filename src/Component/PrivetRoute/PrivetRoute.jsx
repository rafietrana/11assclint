 
 
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hook/useAuth/useAuth";

 

const PrivetRoute = ({children}) => {

    const {user, loading} = useAuth();


 

 
 const location = useLocation();
 

 if(loading){
    return <p><span className="loading loading-spinner loading-lg"></span></p>
 }
 
      if (user) {
        return children;
          }

          else{
            return <Navigate state={location.pathname} to={'/login'}></Navigate>
          }
};

export default PrivetRoute;