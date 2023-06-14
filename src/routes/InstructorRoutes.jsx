import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProviders";
import useInstructor from "../hooks/useInstructor";

import { ClockLoader } from "react-spinners";

const InstructorRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return (
            <div className="h-[100vh] flex items-center flex-col justify-center">
                <h1 className="text-[#181D4E] text-3xl my-4">Loading Please Wait</h1>
                <ClockLoader size='150' color="#36d7b7" />
            </div>
        )
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoutes;