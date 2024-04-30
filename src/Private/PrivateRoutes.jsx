
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/Use Auth Context/UseAuthContext";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(user);

    if (loading) {
        return(
            <div className="flex justify-center items-center min-h-screen" >
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to={"/login"} ></Navigate>
    );
};

export default PrivateRoutes;