import Link from "next/link";

import Header from "../../../components/Header";
import PhotoHero from "../../../components/PhotoHero";

const PhotoDetail = () => {
  return (
    <>
      <Header color="gold" />
      <PhotoHero
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
    </>
  );
};

export default PhotoDetail;
