import LoginBackground from "./LoginBackground";
import LoginCTA from "./LoginCTA";
import LoginNav from "./LoginNav";
import SignupModal from "../Signup/SignupModal";
import { useAppContext } from "../../Context";

const LoginScreen = () => {
  const { showSignupModal } = useAppContext();

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
