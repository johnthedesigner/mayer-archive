import Link from "next/link";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Photograph from "../components/Photograph";
import PageBody from "../components/PageBody";
import PingPong from "../components/Pingpong";

const Collections = () => {
  return (
    <>
      <Header color="gold" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">Collections</h1>
      </Hero>
      <PageBody>
        <PingPong
          TextContent={() => {
            return (
              <>
                <h2>The City</h2>
                <p>
                  <em>1947 – 1956</em>
                </p>
                <p>
                  Fusce gravida consectetur ipsum, eu malesuada ipsum convallis
                  quis. Phasellus quis tellus a neque ultrices semper
                  pellentesque vel nunc. Aenean hendrerit at nulla ac suscipit.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <Link href="/collections/the-city">
                  <a
                    className="button"
                    title="Mayer Archive Photo Collection – The City"
                  >
                    View this Collection
                  </a>
                </Link>
              </>
            );
          }}
          Photo={() => {
            return (
              <Photograph
                imageId="232_1952-06-16_03"
                resolution="1000"
                collection="the-city"
                caption="Lorem ipsum dolor sit amet."
                colorPop="gold"
                priority={true}
              />
            );
          }}
          reverse={true}
        />
        <PingPong
          TextContent={() => {
            return (
              <>
                <h2>Mid-century Life</h2>
                <p>
                  <em>1947 – 1956</em>
                </p>
                <p>
                  Fusce gravida consectetur ipsum, eu malesuada ipsum convallis
                  quis. Phasellus quis tellus a neque ultrices semper
                  pellentesque vel nunc. Aenean hendrerit at nulla ac suscipit.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <Link href="/">
                  <a
                    className="button"
                    title="Mayer Archive Photo Collection – The City"
                  >
                    View this Collection
                  </a>
                </Link>
              </>
            );
          }}
          Photo={() => {
            return (
              <Photograph
                imageId="316_1956-11-03_10"
                resolution="1000"
                collection="mid-century-life"
                caption="Lorem ipsum dolor sit amet."
                colorPop="blue"
                priority={true}
              />
            );
          }}
          reverse={true}
        />
      </PageBody>
    </>
  );
};

export default Collections;
