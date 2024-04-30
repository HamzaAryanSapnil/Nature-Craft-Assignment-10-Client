
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/Use Auth Context/UseAuthContext";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    console.log(user);

    if (user) {
        return children
    }
    return (
        <Navigate to={"/login"} ></Navigate>
    );
};

export default PrivateRoutes;