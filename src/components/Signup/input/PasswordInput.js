import { useContext } from "react";
import { StateContext } from "../../../App";

export const PasswordInput = () => {
  const { password, error, handleChange } = useContext(StateContext);

  const toggleBorderColor = (e) => {
    error ? e.target.classList.add("invalidInputBorder") : e.target.classList.remove("invalidInputBorder");
  };

  return (
    <>
      <div id="signup-password-input-container" className="signup-input-container">
        <input
          id="password"
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          onInvalid={(e) => toggleBorderColor(e)}
          required
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>
      {error && error !== "This email has already been taken" && error !== "Failed to create an account" && (
        <p className="signup-error-message">{error}</p>
      )}
    </>
  );
};
