import { useAppContext } from "../../../Context";

export const LoginNextButton = () => {
  const { loginNextButton } = useAppContext();

  return (
    <div id="login-next-button-container">
      <button id="login-next-button" className="button" ref={loginNextButton}>
        Next
      </button>
    </div>
  );
};
