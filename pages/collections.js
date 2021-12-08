import Header from "../components/Header";
import Hero from "../components/Hero";
import Photograph from "../components/Photograph";

const Collections = () => {
  return (
    <>
      <Header color="blue" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">Collections</h1>
      </Hero>
    </>
  );
};

export default Collections;
