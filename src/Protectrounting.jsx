import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loginuser"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectRoute;