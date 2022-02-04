import { SignupForm } from "./SignupForm";
import { ModalHead } from "./utility/ModalHead";
import { FormNextButton } from "./utility/FormNextButton";

const SignupModal = () => {
  return (
    <div id="signup-modal-container">
      <div id="signup-modal">
        <ModalHead />

        <SignupForm />

        <FormNextButton />
      </div>
    </div>
  );
};

export default SignupModal;
