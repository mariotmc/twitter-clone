import { useAppContext } from "../../../Context";

export const PasswordInput = () => {
  const { password, signupPasswordRef, error, handleChange } = useAppContext();

  return (
    <>
      <div id="signup-password-input-container" className="signup-input-container">
        <input
          id="password"
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          ref={signupPasswordRef}
          onChange={handleChange}
          value={password}
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
