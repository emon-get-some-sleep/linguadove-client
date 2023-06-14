import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ClockLoader } from "react-spinners";
import { AuthContext } from "../providers/AuthProviders";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return (
            <div className="h-[100vh] flex items-center flex-col justify-center">
                <h1 className="text-[#181D4E] text-3xl my-4">Loading Please Wait</h1>
                <ClockLoader size='150' color="#36d7b7" />
            </div>
        )
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;