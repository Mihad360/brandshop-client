/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {

    const {user, loader} = useContext(Authcontext)
    const location = useLocation()

    if(loader){
        return <div className="flex justify-center min-h-screen">
            <span className="w-10 loading loading-spinner text-secondary"></span>
        </div>

    }
    
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;