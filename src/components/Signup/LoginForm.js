import { useContext } from "react";
import { StateContext } from "../../App";
import { ModalPrimaryHead } from "./utility/ModalPrimaryHead";
import { GoogleButton } from "../LoginScreen/buttons/GoogleButton";
import { AppleButton } from "../LoginScreen/buttons/AppleButton";
import { Linebreak } from "../LoginScreen/utility/Linebreak";
import { EmailSigninInput } from "./input/EmailSigninInput";
import { FormNextButton } from "./buttons/FormNextButton";

const LoginForm = () => {
  const { redirectUser } = useContext(StateContext);

  return (
    <div id="login-modal-container" className="modal-container">
      <div id="login-modal" className="modal">
        <ModalPrimaryHead />
        <form>
          {/* <form onSubmit={handleSubmit}> */}
          <h3>Sign in to Twitter</h3>

          <GoogleButton id="google-icon" class="button signup-button" text="in" />

          <AppleButton id="apple-icon" class="button signup-button" text="in" />

          <Linebreak />

          <EmailSigninInput />

          <FormNextButton />
        </form>
        <p id="signup-text">
          Don't have an account? <span onClick={() => redirectUser("signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
