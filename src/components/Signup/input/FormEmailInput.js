import { useContext } from "react";
import { StateContext, FormInputChangeContext } from "../../../App";

export const FormEmailInput = () => {
  const { formData } = useContext(StateContext);
  const { handleChange } = useContext(FormInputChangeContext);

  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
