export const EmailSignupButton = (props) => {
  return (
    <>
      <button id="email-signup-button" className="button" onClick={() => props.setShowSignupModal(true)}>
        Sign up with email
      </button>
    </>
  );
};
