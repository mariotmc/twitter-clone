import { useContext, useEffect } from "react";
import { StateContext } from "../../../App";

export const EmailSigninInput = () => {
  const { emailInputRef } = useContext(StateContext);

  const toggleButton = () => {
    const signupButton = document.querySelector("#signup-next-button");
    !emailInputRef.current.value ? (signupButton.disabled = true) : (signupButton.disabled = false);
  };

  useEffect(() => {
    const signupButton = document.querySelector("#signup-next-button");
    signupButton.disabled = true;
  }, []);

  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        ref={emailInputRef}
        onChange={toggleButton}
        required
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
