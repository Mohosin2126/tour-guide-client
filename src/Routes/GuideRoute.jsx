import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useGuideDashboard from "../Hook/useGuideDashboard";

const GuideRoute = ({ children }) => {
    const { user, loading } =useContext(AuthContext);
    const [isGuide, isGuideLoading] = useGuideDashboard();
    const location = useLocation();

    if (loading || isGuideLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isGuide) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default GuideRoute;