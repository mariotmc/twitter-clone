import { useAppContext } from "../../../Context";

export const LogInButton = () => {
  const { handleLogin, loading } = useAppContext();

  return (
    <div className="signup-form-button-container">
      <button
        id="login-second-page-button"
        className="button signup-form-button"
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
