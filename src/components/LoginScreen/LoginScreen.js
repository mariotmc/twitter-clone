import { useEffect } from "react";
import { useAppContext } from "../../Context";
import LoginBackground from "./LoginBackground";
import LoginCTA from "./LoginCTA";
import LoginNav from "./LoginNav";
import SignupModal from "../Signup/SignupModal";

const LoginScreen = () => {
  const { showSignupModal } = useAppContext();

  useEffect(() => {
    document.title = "Twitter. It’s what’s happening / Twitter";
  }, []);

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
