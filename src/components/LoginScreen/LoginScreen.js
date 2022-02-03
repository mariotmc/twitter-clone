import LoginBackground from "./LoginBackground";
import LoginCTA from "./LoginCTA";
import LoginNav from "./LoginNav";

const LoginScreen = () => {
  return (
    <>
      <div className="wrapper">
        <LoginBackground />
        <LoginCTA />
      </div>
      <LoginNav />
    </>
  );
};

export default LoginScreen;
