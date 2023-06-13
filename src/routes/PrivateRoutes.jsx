import { useContext } from "react";
import { ClockLoader } from "react-spinners";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
            <div className="h-[100vh] flex items-center flex-col justify-center">
                <h1 className="text-[#181D4E] text-3xl my-4">Loading Please Wait</h1>
                <ClockLoader size='150' color="#36d7b7" />
            </div>
        )
    }
    if(user?.email){
        return children;
    }

    
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;