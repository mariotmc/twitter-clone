export const TermsOfServiceText = () => {
  return (
    <small id="signup-tos">
      By signing up, you agree to the{" "}
      <a className="tos-links" href="https://twitter.com/en/tos" target="_blank" rel="noreferrer">
        Terms of Service
      </a>{" "}
      and{" "}
      <a className="tos-links" href="https://twitter.com/en/privacy" target="_blank" rel="noreferrer">
        Privacy Policy
      </a>
      , including{" "}
      <a
        className="tos-links"
        href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
        target="_blank"
        rel="noreferrer"
      >
        Cookie Use
      </a>
      .
    </small>
  );
};
