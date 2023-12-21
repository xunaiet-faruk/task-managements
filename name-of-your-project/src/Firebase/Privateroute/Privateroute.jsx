import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Auth/Authprovider";


const Privateroute = ({ children }) => {
    const loaction = useLocation();
    const { user, loading } = useContext(Authcontext);
    if (loading) {
        return <div className="flex justify-center"><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;

};

export default Privateroute;