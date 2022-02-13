import { useAppContext } from "../../../Context";

export const ForgotPassword = ({ id, className }) => {
  const { redirectUser, setPage, setLoginData } = useAppContext();

  return (
    <small
      id={id}
      className={className}
      onClick={() => {
        redirectUser("password-reset");
        setLoginData((prevState) => {
          return { ...prevState, signInPassword: "" };
        });
        setPage(1);
      }}
    >
      Forgot password?
    </small>
  );
};
