import { TwitterIcon } from "./utility/TwitterIcon";
import bgImage from "../../media/loginBackground.png";

const LoginBackground = () => {
  return (
    <div id="login-background" style={{ backgroundImage: `url(${bgImage})` }}>
      <TwitterIcon id="large-login-icon" class="icon large-icon" />
    </div>
  );
};

export default LoginBackground;
