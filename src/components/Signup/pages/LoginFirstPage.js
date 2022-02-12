import { ModalPrimaryHead } from "../utility/ModalPrimaryHead";
import { GoogleButton } from "../../LoginScreen/buttons/GoogleButton";
import { AppleButton } from "../../LoginScreen/buttons/AppleButton";
import { Linebreak } from "../../LoginScreen/utility/Linebreak";
import { SignInEmailInput } from "../input/SignInEmailInput";
import { LoginNextButton } from "../buttons/LoginNextButton";
import { SignUpCTA } from "../utility/SignUpCTA";
import { useAppContext } from "../../../Context";

export const LoginFirstPage = () => {
  const { nextPage, loginData } = useAppContext();

  return (
    <div id="login-modal-container" className="modal-container">
      <div id="login-modal" className="modal">
        <ModalPrimaryHead />
        <form id="login-first-page-form" onSubmit={() => nextPage(loginData.signInEmail)}>
          <h3>Sign in to Twitter</h3>

          <GoogleButton id="google-icon" class="button signup-button" text="in" />

          <AppleButton id="apple-icon" class="button signup-button" text="in" />

          <Linebreak />

          <SignInEmailInput id="login-first-page-email" />
          <LoginNextButton />
        </form>

        <SignUpCTA id="login-first-page-cta" />
      </div>
    </div>
  );
};
