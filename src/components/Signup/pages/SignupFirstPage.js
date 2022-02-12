import { useEffect } from "react";
import { ModalPrimaryHead } from "../utility/ModalPrimaryHead";
import { FormNameInput } from "../input/FormNameInput";
import { FormEmailInput } from "../input/FormEmailInput";
import { PhoneAlternative } from "../utility/PhoneAlternative";
import { DobText } from "../utility/DobText";
import { DobMonthInput } from "../input/DobMonthInput";
import { DobDayInput } from "../input/DobDayInput";
import { DobYearInput } from "../input/DobYearInput";
import { FormNextButton } from "../buttons/FormNextButton";
import { useAppContext } from "../../../Context";

const SignupFirstPage = () => {
  const { formData, nextPage } = useAppContext();

  useEffect(() => {
    const signupButton = document.querySelector("#signup-next-button");
    Object.values(formData).some((input) =>
      input === "" ? (signupButton.disabled = true) : (signupButton.disabled = false)
    );
  }, [formData]);

  return (
    <>
      <ModalPrimaryHead id="signup-close-symbol" />

      <h3 id="signup-first-page-heading">Create your account</h3>

      <form className="signup-form" onSubmit={(e) => nextPage(e)(formData.email)}>
        <FormNameInput />

        <FormEmailInput />

        <PhoneAlternative />

        <DobText />

        <div id="dob-inputs-container">
          <DobMonthInput />
          <DobDayInput />
          <DobYearInput />
        </div>

        <FormNextButton />
      </form>
    </>
  );
};

export default SignupFirstPage;
