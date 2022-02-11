import { useEffect } from "react";
import { useAppContext } from "../../../Context";

export const SignInEmailInput = ({ id }) => {
  const { emailInputRef, loginData, handleChange, page } = useAppContext();

  const toggleButton = () => {
    const loginButton = document.querySelector("#login-next-button");
    if (loginButton)
      !emailInputRef.current.value ? (loginButton.disabled = true) : (loginButton.disabled = false);
  };

  useEffect(() => {
    const loginButton = document.querySelector("#login-next-button");
    if (loginButton) {
      if (page === 1 && !emailInputRef.current.value) loginButton.disabled = true;
    }
    if (page === 2) {
      emailInputRef.current.disabled = true;
      emailInputRef.current.style.color = "rgb(110, 118, 125)";
      emailInputRef.current.parentElement.style.backgroundColor = "rgb(32, 35, 39)";
      emailInputRef.current.parentElement.style.borderColor = "rgb(32, 35, 39)";
    }
  }, []);

  return (
    <div id={id} className="signup-input-container">
      <input
        id="signInEmail"
        className="form-input"
        type="email"
        name="signInEmail"
        placeholder="Email"
        ref={emailInputRef}
        onChange={(e) => {
          handleChange(e);
          toggleButton(e);
        }}
        value={loginData.signInEmail}
        required
      />
      <label className="form-label" htmlFor="signInEmail">
        Email
      </label>
    </div>
  );
};
