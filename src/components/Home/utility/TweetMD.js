const TweetMD = () => {
  const image = localStorage.getItem("image").slice(1, -1);

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "1px solid rgb(56, 68, 77)",
      }}
    >
      <div style={{ display: "flex", width: "95%", height: "60px", margin: "15px auto 0 auto" }}>
        <img
          src={image}
          alt="profile picture"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <form id="new-tweet-form" style={{ width: "100%", margin: "0 0 0 20px" }}>
          <textarea
            name="new-tweet"
            id="new-tweet"
            placeholder="What's happening?"
            maxLength="280"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              color: "#fff",
              backgroundColor: "transparent",
              fontSize: "20px",
              fontFamily: "inherit",
              lineHeight: "20px",
              border: "none",
              outline: "none",
              resize: "none",
            }}
          />
        </form>
      </div>
      <div style={{ width: "100%" }}>
        <button
          type="submit"
          form="new-tweet-form"
          style={{
            display: "block",
            width: "76px",
            height: "36px",
            margin: "15px 2.5% 15px auto",
            color: "#fff",
            backgroundColor: "rgb(29, 155, 240)",
            fontWeight: "700",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetMD;
