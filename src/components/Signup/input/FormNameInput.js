import { useContext } from "react";
import { StateContext, FormInputChangeContext } from "../../../App";

export const FormNameInput = () => {
  const { formData } = useContext(StateContext);
  const { handleChange } = useContext(FormInputChangeContext);

  return (
    <div id="signup-name-input-container" className="signup-input-container">
      <input
        id="name"
        className="form-input"
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
        value={formData.name}
      />
      <label className="form-label" htmlFor="name">
        Name
      </label>
    </div>
  );
};
