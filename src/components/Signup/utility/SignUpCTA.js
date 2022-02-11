import { useAppContext } from "../../../Context";

export const SignUpCTA = ({ id }) => {
  const { redirectUser, setPage, setLoginData } = useAppContext();

  return (
    <p id={id} className="signup-text">
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
