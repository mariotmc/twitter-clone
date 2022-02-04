import { CloseSymbol } from "../utility/CloseSymbol";
import { TwitterIcon } from "../../LoginScreen/utility/TwitterIcon";

export const ModalHead = () => {
  return (
    <>
      <div id="modal-head-container">
        <div style={{ width: "270px" }}>
          <CloseSymbol id="signup-close-symbol" class="white" width="20px" height="auto" />
        </div>
        <TwitterIcon class="very-small-icon white" />
        <div></div>
      </div>
      <h3 id="signup-modal-heading">Create your account</h3>
    </>
  );
};
