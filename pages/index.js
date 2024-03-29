import Link from "next/link";

import Head from "next/head";
import Header from "../components/Header";
import PageBody from "../components/PageBody";
import PingPong from "../components/PingPong";
import Photograph from "../components/Photograph";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="About the Mayer Archive" color="blue" />
      <div className="home-hero">
        <img className="home-hero__film-strip" src="/film-strip.svg" />
      </div>
      <PageBody>
        <div className="single-column">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Fusce gravida consectetur ipsum, eu malesuada ipsum convallis quis.
            Phasellus quis tellus a neque ultrices semper pellentesque vel nunc.
            Aenean hendrerit at nulla ac suscipit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
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
      </PageBody>
    </>
  );
}
