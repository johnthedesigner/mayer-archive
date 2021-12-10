import Link from "next/link";

import Photograph from "./Photograph";
import PageBody from "./PageBody";

const PhotoHero = ({ imageId, photoCaption, collection, CollectionIntro }) => {
  let styles = {
    backgroundImage: `url("/hero-bg-04.svg")`,
    height: "10rem",
  };

  return (
    <div className="photo-hero">
      <div className="photo-hero__background" style={styles} />
      <PageBody>
        <div className="photo-hero__content">
          <div className="photo-hero__image-container">
            <Photograph
              imageId={imageId}
              resolution="1000"
              zoomResolution="1000"
              collection={collection}
              caption={photoCaption}
              priority={true}
            />
          </div>
          <div className="photo-hero__text-container">
            <p>
              From Collection:{" "}
              <Link href={`/collections/${collection}`}>
                <a title={collection}>{collection}</a>
              </Link>
            </p>
            <h3>Subway Newsreader</h3>
            <p>
              <em>April 14, 1956</em>
            </p>
            <CollectionIntro />
          </div>
        </div>
        {/* <div className="single-column">
          <p>
            Fusce gravida consectetur ipsum, eu malesuada ipsum convallis quis.
            Phasellus quis tellus a neque ultrices semper pellentesque vel nunc.
            Aenean hendrerit at nulla ac suscipit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div> */}
      </PageBody>
    </div>
  );
};

export default PhotoHero;
