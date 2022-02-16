import { useAppContext } from "../../../Context";

const Content = () => {
  const { content } = useAppContext();

  return (
    <div className="content-container">
      <div className="content-title-container" style={{ height: "53px" }}>
        <h1 style={{ margin: "0" }}>{content}</h1>
      </div>
      Content
    </div>
  );
};

export default Content;
