import { LoginModalHead } from "../utility/LoginModalHead";
import { SignInEmailInput } from "../input/SignInEmailInput";
import { SignInPasswordInput } from "../input/SignInPasswordInput";
import { LogInButton } from "../buttons/LogInButton";
import { SignUpCTA } from "../utility/SignUpCTA";

export const LoginSecondPage = () => {
  return (
    <div id="login-modal-container" className="modal-container">
      <div id="login-modal" className="modal">
        <LoginModalHead />

        <h3>Enter your password</h3>

        <form id="login-form">
          <SignInEmailInput />

          <SignInPasswordInput />
        </form>

        <LogInButton />

        <SignUpCTA />
      </div>
    </div>
  );
};
