import Header from "../components/Header";
import Hero from "../components/Hero";
import Photograph from "../components/Photograph";

const About = () => {
  return (
    <>
      <Header color="gold" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">About the Mayer Archive</h1>
      </Hero>
      <div className="page-body">
        <div className="ping-pong">
          <div className="ping-pong__image-container">
            <Photograph
              imageId="057_1948-07-12_01"
              resolution="1000"
              zoomResolution="1000"
              collection="the-city"
              caption="Lorem ipsum dolor sit amet."
            />
          </div>
          <div className="ping-pong__text-container">
            <h4>Collections</h4>
            <h2>The City</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
