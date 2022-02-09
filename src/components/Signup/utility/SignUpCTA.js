import { useContext } from "react";
import { StateContext } from "../../../App";

export const SignUpCTA = () => {
  const { redirectUser, setPage, setLoginData } = useContext(StateContext);

  return (
    <p id="signup-text">
      Don't have an account?{" "}
      <span
        onClick={() => {
          setLoginData({ signInEmail: "", signInPassword: "" });
          setPage(1);
          redirectUser("signup");
        }}
      >
        Sign up
      </span>
    </p>
  );
};
