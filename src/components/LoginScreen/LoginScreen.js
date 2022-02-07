import { useContext } from "react";
import { StateContext } from "../../App";
import LoginBackground from "./LoginBackground";
import LoginCTA from "./LoginCTA";
import LoginNav from "./LoginNav";
import SignupModal from "../Signup/SignupModal";

const LoginScreen = () => {
  const { showSignupModal } = useContext(StateContext);

  return (
    <>
      <div className="wrapper">
        <LoginBackground />
        <LoginCTA />
      </div>
      <LoginNav />
      {showSignupModal && <SignupModal />}
    </>
  );
};

export default LoginScreen;
