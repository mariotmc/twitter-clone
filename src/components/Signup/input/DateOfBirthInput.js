import { useContext } from "react";
import { StateContext } from "../../../App";

export const DateOfBirthInput = () => {
  const { formData } = useContext(StateContext);

  return (
    <div className="signup-input-container">
      <input
        id="dob"
        className="form-input"
        name="dob"
        placeholder="Birth date"
        readOnly
        value={`${formData.day}.${formData.month}.${formData.year}`}
      />
      <label className="form-label" htmlFor="dob">
        Birth date
      </label>
    </div>
  );
};
