import { useAppContext } from "../../../Context";

export const FormNextButton = () => {
  const { setPage } = useAppContext();

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
