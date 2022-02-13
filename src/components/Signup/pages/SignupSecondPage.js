import { ModalSecondaryHead } from "../utility/ModalSecondaryHead";
import { FormNextButton } from "../buttons/FormNextButton";
import { Checkbox } from "@mui/material";
import { useAppContext } from "../../../Context";

const SignupSecondPage = () => {
  const { nextPage, formData, handleChange } = useAppContext();

  const checkboxStyles = {
    color: "rgb(136, 153, 166)",
    width: 42,
    height: 42,
  };

  return (
    <>
      <ModalSecondaryHead />

      <div id="signup-second-page-container">
        <h3 id="signup-second-page-heading">Customize your experience</h3>

        <form onSubmit={(e) => nextPage(e)("signup")}>
          <h4>Get more out of Twitter</h4>
          <div className="signup-second-page-input-container">
            <label className="signup-second-page-text" htmlFor="email-notifications">
              Receive email about your Twitter activity and recommendations.
            </label>
            <Checkbox
              size="medium"
              id="email-notifications"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
              sx={checkboxStyles}
            />
          </div>

          <h4>Connect with people you know</h4>
          <div className="signup-second-page-input-container">
            <label className="signup-second-page-text" htmlFor="email-access">
              Let others find your Twitter account by your email address.
            </label>
            <Checkbox
              size="medium"
              id="email-access"
              name="emailAccess"
              checked={formData.emailAccess}
              onChange={handleChange}
              sx={checkboxStyles}
            />
          </div>

          <h4>Personalized ads</h4>
          <div className="signup-second-page-input-container">
            <label className="signup-second-page-text" htmlFor="personalized-ads">
              You will always see ads on Twitter based on your Twitter activity. When this setting is enabled,
              Twitter may further personalize ads from Twitter advertisers, on and off Twitter, by combining
              your Twitter activity with other online activity and information from our partners.
            </label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                size="medium"
                id="personalized-ads"
                name="personalizedAds"
                checked={formData.personalizedAds}
                onChange={handleChange}
                sx={checkboxStyles}
              />
            </div>
          </div>

          <p id="signup-second-page-details-text">
            For more details about these settings, visit the{" "}
            <a
              id="signup-second-page-link"
              href="https://help.twitter.com/en/managing-your-account/new-account-settings"
              target="_blank"
              rel="noreferrer"
            >
              Help Center
            </a>
            .
          </p>

          <FormNextButton />
        </form>
      </div>
    </>
  );
};

export default SignupSecondPage;
