import Link from "next/link";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Photograph from "../../components/Photograph";
import PageBody from "../../components/PageBody";
import PingPong from "../../components/Pingpong";
import CollectionHero from "../../components/CollectionHero";

const photos = [
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
  {
    imageId: "232_1952-06-16_03",
    resolution: "1000",
    zoomResolution: "1000",
    collection: "the-city",
    caption: "Lorem ipsum dolor sit amet.",
    colorPop: "gold",
    priority: true,
  },
];

const Collections = () => {
  return (
    <>
      <Header color="gold" />
      <CollectionHero
        imageId="232_1952-06-16_03"
        collection="the-city"
        collectionTitle="The City"
        collectionDateRange="1947 – 1956"
        photoCaption="Lorem ipsum dolor sit amet."
        CollectionIntro={() => {
          return (
            <>
              <p>
                Fusce gravida consectetur ipsum, eu malesuada ipsum convallis
                quis. Phasellus quis tellus a neque ultrices semper pellentesque
                vel nunc. Aenean hendrerit at nulla ac suscipit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>
                Malesuada ipsum convallis quis. Phasellus quis tellus a neque
                ultrices semper pellentesque vel nunc. Aenean hendrerit at nulla
                ac suscipit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
            </>
          );
        }}
      />
      <PageBody>
        <div className="collection-grid">
          {photos.map((photo, index) => {
            return (
              <div
                key={`${photo.imageId}_${index}`}
                className="collection-grid__item"
              >
                <Photograph
                  imageId={photo.imageId}
                  resolution={photo.resolution}
                  zoomResolution={photo.zoomResolution}
                  collection={photo.collection}
                  caption={photo.caption}
                  priority={false}
                />
              </div>
            );
          })}
        </div>
      </PageBody>
    </>
  );
};

export default Collections;