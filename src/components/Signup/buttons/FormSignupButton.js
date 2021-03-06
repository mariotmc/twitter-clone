import { useAppContext } from "../../../Context";

export const FormSignupButton = () => {
  const { handleSignUp, loading } = useAppContext();

  return (
    <div className="signup-form-button-container">
      <button className="button signup-form-button" disabled={loading} onClick={(e) => handleSignUp(e)}>
        Sign up
      </button>
    </div>
  );
};
