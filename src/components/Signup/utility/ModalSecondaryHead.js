import { useContext } from "react";
import { StateContext } from "../../../App";
import { ArrowLeftSymbol } from "../symbols/ArrowLeftSymbol";

export const ModalSecondaryHead = () => {
  const { page } = useContext(StateContext);

  return (
    <div className="modal-secondary-head-container">
      <div style={{ display: "flex", textAlign: "center", marginRight: "22px" }}>
        <ArrowLeftSymbol id="signup-arrow-left-symbol" width="20px" height="auto" />
      </div>
      <h3 id="signup-second-page-title">Step {page} of 5</h3>
    </div>
  );
};
