import { Navigate } from "react-router-dom";
import { useAppContext } from "./Context";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAppContext();

  return currentUser ? children : <Navigate to="/twitter-clone/login" />;
};

export default PrivateRoute;
