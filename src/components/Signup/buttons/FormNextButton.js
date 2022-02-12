import { useAppContext } from "../../../Context";

export const FormNextButton = () => {
  const { signupNextButton } = useAppContext();

  return (
    <div id="signup-next-button-container">
      <button id="signup-next-button" className="button" ref={signupNextButton}>
        Next
      </button>
    </div>
  );
};
