import { useContext } from "react";
import { StateContext } from "../../../App";

export const FormNextButton = () => {
  const { setPage } = useContext(StateContext);

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div id="signup-next-button-container">
      <button id="signup-next-button" className="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
