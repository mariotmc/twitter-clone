import { ArrowLeftSymbol } from "../symbols/ArrowLeftSymbol";
import { TwitterIcon } from "../../LoginScreen/utility/TwitterIcon";

export const LoginModalHead = () => {
  return (
    <>
      <div id="modal-head-container" style={{ alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", width: "270px" }}>
          <ArrowLeftSymbol id="signup-close-symbol" width="20px" height="34px" />
        </div>
        <TwitterIcon class="very-small-icon white" />
        <div></div>
      </div>
    </>
  );
};
