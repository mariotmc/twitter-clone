import { FormNameInput } from "./utility/FormNameInput";
import { FormEmailInput } from "./utility/FormEmailInput";
import { PhoneAlternative } from "./utility/PhoneAlternative";
import { DobText } from "./utility/DobText";
import { DobMonthInput } from "./utility/DobMonthInput";
import { DobDayInput } from "./utility/DobDayInput";
import { DobYearInput } from "./utility/DobYearInput";

export const SignupForm = () => {
  return (
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
  );
};
