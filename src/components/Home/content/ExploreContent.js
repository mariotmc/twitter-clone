import { useEffect } from "react";

const ExploreContent = () => {
  useEffect(() => {
    document.title = "Explore / Twitter";
  }, []);

  return <div>ExploreContent</div>;
};

export default ExploreContent;
