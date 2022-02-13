import { TwitterIcon } from "./utility/TwitterIcon";
import { GoogleButton } from "./buttons/GoogleButton";
import { AppleButton } from "./buttons/AppleButton";
import { EmailSignupButton } from "./buttons/EmailSignupButton";
import { Linebreak } from "./utility/Linebreak";
import { TermsOfServiceText } from "./utility/TermsOfServiceText";
import { useAppContext } from "../../Context";

const LoginCTA = () => {
  const { redirectUser } = useAppContext();

  return (
    <div id="login-cta">
      <TwitterIcon class="icon small-icon" />

      <h1 id="login-heading">Happening now</h1>

      <h2 id="login-secondary-heading">Join Twitter today.</h2>

      <GoogleButton id="google-icon" className="button signup-button" text="up" />

      <AppleButton id="apple-icon" class="button signup-button" text="up" />

      <Linebreak />

      <EmailSignupButton />

      <TermsOfServiceText id="login-tos" />

      <h3 id="login-tertiary-heading">Already have an account?</h3>

      <button id="signin-button" className="button" onClick={() => redirectUser("login")}>
        Sign in
      </button>
    </div>
  );
};

export default LoginCTA;
