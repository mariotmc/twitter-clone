import { useAppContext } from "../../../Context";

export const ArrowLeftSymbol = (props) => {
  const { setPage } = useAppContext();

  const previousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="arrow-left-symbol">
      <svg
        id={props.id}
        viewBox="0 0 24 24"
        aria-hidden="true"
        width={props.width}
        height={props.height}
        style={{ fill: "rgb(239, 243, 244)" }}
        onClick={previousPage}
      >
        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
      </svg>
    </div>
  );
};
