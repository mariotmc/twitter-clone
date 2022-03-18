const Tweet = () => {
  return (
    <article style={{ display: "flex", width: "100%" }}>
      <div>
        <img
          src={image}
          alt="profile picture"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </div>

      <div>
        <div className="name-container"></div>
        <div className="tweet-container"></div>
        <div className="engagement-container"></div>
      </div>
    </article>
  );
};

export default Tweet;
