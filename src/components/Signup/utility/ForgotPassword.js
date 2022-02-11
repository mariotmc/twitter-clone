import { useAppContext } from "../../../Context";

export const ForgotPassword = ({ id, className }) => {
  const { redirectUser, setPage } = useAppContext();

  return (
    <small
      id={id}
      className={className}
      onClick={() => {
        redirectUser("password-reset");
        setPage(1);
      }}
    >
      Forgot password?
    </small>
  );
};
