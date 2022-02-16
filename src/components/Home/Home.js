import { useEffect } from "react";
import Navigation from "./navigation/Navigation";
import Content from "./content/Content";
import Trends from "./trends/Trends";

const Home = () => {
  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <Navigation />
        <Content />
        <Trends />
      </div>
    </>
  );
};

export default Home;
