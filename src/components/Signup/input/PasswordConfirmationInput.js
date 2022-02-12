import { useAppContext } from "../../../Context";

export const PasswordConfirmationInput = () => {
  const { passwordConfirmation, signupPasswordConfirmationRef, error, handleChange } = useAppContext();

  return (
    <>
      <div id="signup-password-confirmation-input-container" className="signup-input-container">
        <input
          id="password-confirmation"
          className="form-input"
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          ref={signupPasswordConfirmationRef}
          onChange={handleChange}
          value={passwordConfirmation}
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
