import { CloseSymbol } from "../symbols/CloseSymbol";
import { TwitterIcon } from "../../LoginScreen/utility/TwitterIcon";

export const ModalPrimaryHead = (props) => {
  return (
    <>
      <div id="modal-head-container">
        <div style={{ display: "flex", width: "270px" }}>
          <CloseSymbol
            id="signup-close-symbol"
            width="20px"
            height="auto"
            setShowSignupModal={props.setShowSignupModal}
          />
        </div>
        <TwitterIcon class="very-small-icon white" />
        <div></div>
      </div>
    </>
  );
};
