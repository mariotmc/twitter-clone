import { ModalSecondaryHead } from "../utility/ModalSecondaryHead";
import { FormNameInput } from "../input/FormNameInput";
import { FormEmailInput } from "../input/FormEmailInput";
import { DateOfBirthInput } from "../input/DateOfBirthInput";
import { FormSignupButton } from "../buttons/FormSignupButton";
import { PasswordInput } from "../input/PasswordInput";
import { PasswordConfirmationInput } from "../input/PasswordConfirmationInput";

const SignupThirdPage = () => {
  return (
    <>
      <ModalSecondaryHead />

      <h3 id="signup-first-page-heading">Create your account</h3>

      <form id="signup-form-third-page" className="signup-form">
        <FormNameInput />

        <FormEmailInput />

        <DateOfBirthInput />

        <PasswordInput />

        <PasswordConfirmationInput />
      </form>

      <p id="signup-tos">
        By signing up, you agree to our{" "}
        <a href="https://twitter.com/en/tos" target="_blank" rel="noreferrer">
          Terms
        </a>
        ,{" "}
        <a href="https://twitter.com/en/privacy" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        , and{" "}
        <a
          href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
          target="_blank"
          rel="noreferrer"
        >
          Cookie Use
        </a>
        .
      </p>

      <FormSignupButton />
    </>
  );
};

export default SignupThirdPage;
