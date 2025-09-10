import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth(); 

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export {PrivateRoutes};
