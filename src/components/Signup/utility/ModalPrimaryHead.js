import { CloseSymbol } from "../symbols/CloseSymbol";
import { TwitterIcon } from "../../LoginScreen/utility/TwitterIcon";

export const ModalPrimaryHead = ({ id }) => {
  return (
    <>
      <div id="modal-head-container">
        <div style={{ display: "flex", width: "270px" }}>
          <CloseSymbol id={id} width="20px" height="34px" />
        </div>
        <TwitterIcon class="very-small-icon white" />
        <div></div>
      </div>
    </>
  );
};
