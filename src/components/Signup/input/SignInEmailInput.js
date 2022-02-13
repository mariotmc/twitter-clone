import { useEffect } from "react";
import { useAppContext } from "../../../Context";

export const SignInEmailInput = ({ id }) => {
  const { loginEmailRef, loginNextButton, loginData, handleChange, page, setInvalidBorderColor, error } =
    useAppContext();

  const toggleButton = () => {
    if (loginEmailRef.current && loginNextButton.current)
      !loginEmailRef.current.value
        ? (loginNextButton.current.disabled = true)
        : (loginNextButton.current.disabled = false);
  };

  useEffect(() => {
    if (loginEmailRef.current && loginNextButton.current) {
      if (page === 1 && !loginEmailRef.current.value) loginNextButton.current.disabled = true;
      if (page === 2) {
        loginEmailRef.current.disabled = true;
        loginEmailRef.current.style.color = "rgb(110, 118, 125)";
        loginEmailRef.current.parentElement.style.backgroundColor = "rgb(32, 35, 39)";
        loginEmailRef.current.parentElement.style.borderColor = "rgb(32, 35, 39)";
      }
    }
  }, []);

  return (
    <>
      <div id={id} className="signup-input-container">
        <input
          id="signInEmail"
          className="form-input"
          type="email"
          name="signInEmail"
          placeholder="Email"
          ref={loginEmailRef}
          onChange={(e) => {
            handleChange(e);
            toggleButton(e);
          }}
          onInvalid={() => setInvalidBorderColor(loginEmailRef)}
          value={loginData.signInEmail}
          required
        />
        <label className="form-label" htmlFor="signInEmail">
          Email
        </label>
      </div>
      {error && error === "Sorry, we could not find your account." && (
        <p className="signup-error-message" style={{ alignSelf: "flex-start" }}>
          {error}
        </p>
      )}
    </>
  );
};
