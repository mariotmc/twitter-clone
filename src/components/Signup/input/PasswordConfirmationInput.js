import { useContext } from "react";
import { StateContext } from "../../../App";

export const PasswordConfirmationInput = () => {
  const { passwordConfirmation, error, handleChange } = useContext(StateContext);

  const toggleBorderColor = (e) => {
    error ? e.target.classList.add("invalidInputBorder") : e.target.classList.remove("invalidInputBorder");
  };

  return (
    <>
      <div id="signup-password-confirmation-input-container" className="signup-input-container">
        <input
          id="password-confirmation"
          className="form-input"
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          onChange={handleChange}
          value={passwordConfirmation}
          onInvalid={(e) => toggleBorderColor(e)}
          required
        />
        <label className="form-label" htmlFor="password-confirmation">
          Password Confirmation
        </label>
      </div>
      {error && error !== "This email has already been taken" && error !== "Failed to create an account" && (
        <p className="signup-error-message">{error}</p>
      )}
    </>
  );
};
