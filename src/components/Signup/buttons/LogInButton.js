import { useEffect, useContext } from "react";
import { StateContext } from "../../../App";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";

export const LogInButton = () => {
  const { handleLogin, loading, setCurrentUser } = useContext(StateContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return (
    <div id="signup-form-button-container">
      <button
        id="signup-form-button"
        className="button"
        type="submit"
        form="login-form"
        disabled={loading}
        onClick={(e) => handleLogin(e)}
      >
        Sign in
      </button>
    </div>
  );
};
