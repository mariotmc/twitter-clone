import { useAppContext } from "../../../Context";

export const SignInPasswordInput = () => {
  const { loginData, error, handleChange } = useAppContext();

  const toggleBorderColor = (e) => {
    error ? e.target.classList.add("invalidInputBorder") : e.target.classList.remove("invalidInputBorder");
  };

  return (
    <>
      <div id="signup-password-input-container" className="signup-input-container">
        <input
          id="signInPassword"
          className="form-input"
          type="password"
          name="signInPassword"
          placeholder="Password"
          onChange={handleChange}
          value={loginData.signInPassword}
          onInvalid={(e) => toggleBorderColor(e)}
          required
        />
        <label className="form-label" htmlFor="signInPassword">
          Password
        </label>
      </div>
      {error && error !== "This email has already been taken" && error !== "Failed to create an account" && (
        <p className="signup-error-message">{error}</p>
      )}
    </>
  );
};
