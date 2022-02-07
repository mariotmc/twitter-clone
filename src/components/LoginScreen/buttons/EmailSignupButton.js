import { useContext } from "react";
import { StateContext } from "../../../App";

export const EmailSignupButton = () => {
  const { setShowSignupModal } = useContext(StateContext);

  return (
    <>
      <button id="email-signup-button" className="button" onClick={() => setShowSignupModal(true)}>
        Sign up with email
      </button>
    </>
  );
};
