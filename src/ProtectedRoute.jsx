import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ login, children }) => {
  if (!login) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
