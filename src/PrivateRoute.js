import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

const PrivateRoute = ({ children }) => {
  return auth.currentUser !== undefined ? children : <Navigate to="/twitter-clone/login" />;
};

export default PrivateRoute;
