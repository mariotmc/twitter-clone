const Article = ({ heading, title, image }) => {
  return (
    <article className="trend-article" style={{ display: "flex", padding: "12px 16px" }}>
      <div className="article-text-content-container" style={{ paddingRight: "15px" }}>
        <div className="trend-article-heading" style={{ fontSize: "13px", color: "#8899A6" }}>
          {heading}
        </div>
        <div
          className="trend-article-title"
          style={{ marginTop: "5px", fontSize: "15px", fontWeight: "700" }}
        >
          {title}
        </div>
      </div>
      {image && (
        <div style={{ position: "relative", minWidth: "68px", minHeight: "68px" }}>
          <div
            className="trend-article-image-container"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          ></div>
        </div>
      )}
    </article>
  );
};

export default Article;
