import { useEffect, useContext } from "react";
import { StateContext } from "../../../App";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";

export const FormSignupButton = () => {
  const { handleSignUp, error, loading, setCurrentUser } = useContext(StateContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return (
    <div id="signup-form-button-container">
      {error && <p style={{ display: "block" }}>{error}</p>}
      <button id="signup-form-button" className="button" disabled={loading} onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};
