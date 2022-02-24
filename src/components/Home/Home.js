import { useEffect } from "react";
import { useAppContext } from "../../Context";
import Navigation from "./navigation/Navigation";
import Content from "./content/Content";
import Trends from "./trends/Trends";

const Home = () => {
  const { setContent } = useAppContext();

  useEffect(() => {
    setContent("Home");
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
