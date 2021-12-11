import _ from "lodash";
import Link from "next/link";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Photograph from "../../components/Photograph";
import PageBody from "../../components/PageBody";
import PingPong from "../../components/PingPong";
import photos from "../../photos.json";

const Collections = () => {
  return (
    <>
      <Header color="gold" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">Collections</h1>
      </Hero>
      <PageBody>
        {photos.collections.map((collection) => {
          let thumbnail = _.find(collection.photos, { thumbnail: true });
          return (
            <PingPong
              key={collection.id}
              TextContent={() => {
                return (
                  <>
                    <h2>{collection.label}</h2>
                    <p>
                      <em>1947 – 1956</em>
                    </p>
                    <Link href={`/collections/${collection.id}`}>
                      <a
                        className="button"
                        title={`Mayer Archive Photo Collection – ${collection.label}`}
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
                    imageId={thumbnail.id}
                    resolution="1000"
                    collection={collection.id}
                    caption={thumbnail.caption}
                    colorPop="gold"
                    priority={true}
                  />
                );
              }}
              reverse={true}
            />
          );
        })}
      </PageBody>
    </>
  );
};

export default Collections;
