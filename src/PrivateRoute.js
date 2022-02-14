import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return !localStorage.user ? <Navigate to="/twitter-clone/login" /> : children;
};

export default PrivateRoute;
