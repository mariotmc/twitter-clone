export const FormNextButton = ({ setPage }) => {
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
