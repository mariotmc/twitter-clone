import { useEffect } from "react";
import { useAppContext } from "../../Context";
import { ModalPrimaryHead } from "../Signup/utility/ModalPrimaryHead";
import { SignInEmailInput } from "../Signup/input/SignInEmailInput";

const PasswordReset = () => {
  const { loginData, message, handleResetPassword, redirectUser, setMessage } = useAppContext();

  useEffect(() => {
    document.title = "Twitter";
  }, []);

  return (
    <div className="modal-container">
      <div className="modal">
        <ModalPrimaryHead id="password-reset-close" />
        <div
          style={{
            width: "536px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              margin: "20px 0 36px",
              textAlign: "left",
              width: "100%",
              fontSize: "23px",
              fontFamily: "inherit",
            }}
          >
            Reset your password
          </h3>
          <SignInEmailInput />

          {message && <p style={{ margin: 0, color: "rgb(136, 153, 166)", fontSize: "15px" }}>{message}</p>}

          <span
            id="password-reset-page-login"
            onClick={() => {
              redirectUser("login");
              setMessage("");
            }}
          >
            Log in
          </span>

          <button
            className="button"
            style={{ width: "100%", height: "44px", margin: "30px 0 36px", fontWeight: "700" }}
            onClick={() => handleResetPassword(loginData.signInEmail)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
