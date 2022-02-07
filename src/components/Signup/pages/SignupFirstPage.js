import { useEffect, useContext } from "react";
import { StateContext } from "../../../App";
import { ModalPrimaryHead } from "../utility/ModalPrimaryHead";
import { FormNameInput } from "../input/FormNameInput";
import { FormEmailInput } from "../input/FormEmailInput";
import { PhoneAlternative } from "../utility/PhoneAlternative";
import { DobText } from "../utility/DobText";
import { DobMonthInput } from "../input/DobMonthInput";
import { DobDayInput } from "../input/DobDayInput";
import { DobYearInput } from "../input/DobYearInput";
import { FormNextButton } from "../buttons/FormNextButton";

const SignupFirstPage = () => {
  const { formData } = useContext(StateContext);

  useEffect(() => {
    // iterates through the formData object and disables the button if any input is empty & enables it if all inputs are not empty
    // this is triggered every time formData changes
    const signupButton = document.querySelector("#signup-next-button");
    Object.values(formData).some((input) =>
      input === "" ? (signupButton.disabled = true) : (signupButton.disabled = false)
    );
  }, [formData]);

  return (
    <>
      <ModalPrimaryHead />

      <h3 id="signup-first-page-heading">Create your account</h3>

      <form id="signup-form">
        <FormNameInput />

        <FormEmailInput />

        <PhoneAlternative />

        <DobText />

        <div id="dob-inputs-container">
          <DobMonthInput />
          <DobDayInput />
          <DobYearInput />
        </div>
      </form>

      <FormNextButton />
    </>
  );
};

export default SignupFirstPage;
