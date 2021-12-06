import Header from "../components/Header";
import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Header color="gold" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">About the Mayer Archive</h1>
      </Hero>
    </>
  );
};
export default About;
