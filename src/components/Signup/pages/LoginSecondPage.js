import { LoginModalHead } from "../utility/LoginModalHead";
import { SignInEmailInput } from "../input/SignInEmailInput";
import { SignInPasswordInput } from "../input/SignInPasswordInput";
import { LogInButton } from "../buttons/LogInButton";
import { SignUpCTA } from "../utility/SignUpCTA";
import { ForgotPassword } from "../utility/ForgotPassword";

export const LoginSecondPage = () => {
  return (
    <div id="login-modal-container" className="modal-container">
      <div id="login-modal" className="modal">
        <LoginModalHead />

        <h3 id="login-second-page-heading">Enter your password</h3>

        <form id="login-form">
          <SignInEmailInput id="login-second-page-email" />

          <SignInPasswordInput />
          <ForgotPassword id="login-second-page-forgot-password" />
        </form>

        <LogInButton />

        <SignUpCTA id="login-second-page-cta" />
      </div>
    </div>
  );
};
