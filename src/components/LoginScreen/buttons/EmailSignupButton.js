import { useAppContext } from "../../../Context";

export const EmailSignupButton = () => {
  const { setShowSignupModal } = useAppContext();

  return (
    <>
      <button id="email-signup-button" className="button" onClick={() => setShowSignupModal(true)}>
        Sign up with email
      </button>
    </>
  );
};
