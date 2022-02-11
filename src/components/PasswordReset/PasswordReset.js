import { useAppContext } from "../../Context";
import { ModalPrimaryHead } from "../Signup/utility/ModalPrimaryHead";
import { SignInEmailInput } from "../Signup/input/SignInEmailInput";

const PasswordReset = () => {
  const { loginData, message, handleResetPassword } = useAppContext();

  return (
    <div className="modal-container">
      <div className="modal">
        <ModalPrimaryHead />
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
          {message && <p>{message}</p>}
          <button
            className="button"
            style={{ width: "100%", height: "44px", margin: "auto 0 36px", fontWeight: "700" }}
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
