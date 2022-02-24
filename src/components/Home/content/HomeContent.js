import { useEffect } from "react";

const HomeContent = () => {
  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);

  return <div>HomeContent</div>;
};

export default HomeContent;
