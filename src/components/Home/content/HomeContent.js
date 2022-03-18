import { useEffect } from "react";
import TweetMD from "../utility/TweetMD";

const HomeContent = () => {
  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);

  return (
    <>
      <TweetMD />
    </>
  );
};

export default HomeContent;
