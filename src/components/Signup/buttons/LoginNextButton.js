import { useAppContext } from "../../../Context";

export const LoginNextButton = () => {
  const { setPage } = useAppContext();

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div id="login-next-button-container">
      <button id="login-next-button" className="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
