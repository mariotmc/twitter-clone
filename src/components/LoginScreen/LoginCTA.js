import { TwitterIcon } from "./utility/TwitterIcon";
import { GoogleButton } from "./buttons/GoogleButton";
import { AppleButton } from "./buttons/AppleButton";
import { EmailSignupButton } from "./buttons/EmailSignupButton";
import { Linebreak } from "./utility/Linebreak";
import { TermsOfServiceText } from "./utility/TermsOfServiceText";

const LoginCTA = () => {
  return (
    <div id="login-cta">
      <TwitterIcon class="icon small-icon" />

      <h1 id="login-heading">Happening now</h1>

      <h2 id="login-secondary-heading">Join Twitter today.</h2>

      <GoogleButton id="google-icon" class="button signup-button" />

      <AppleButton id="apple-icon" class="button signup-button" />

      <Linebreak />

      <EmailSignupButton />

      <TermsOfServiceText />

      <h3 id="login-tertiary-heading">Already have an account?</h3>
      <button id="signin-button" className="button">
        Sign in
      </button>
    </div>
  );
};

export default LoginCTA;
