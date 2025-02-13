import { useContext } from "react";
// import { AuthContext } from "../../components/prividers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <span className="loading  loading-spinner text-info flex justify-center items-center"></span>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>

    );
};

export default PrivateRoute;