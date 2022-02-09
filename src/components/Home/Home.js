import { useContext } from "react";
import { StateContext } from "../../App";

const Home = () => {
  const { isLoggedIn, currentUser } = useContext(StateContext);

  return (
    <div>
      <div>{currentUser && `email: ${currentUser.email}`}</div>
    </div>
  );
};

export default Home;
