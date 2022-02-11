import { useAppContext } from "../../Context";

const Home = () => {
  const { currentUser, handleLogout } = useAppContext();

  return (
    <div>
      <div>{currentUser && `email: ${currentUser.email}`}</div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;
